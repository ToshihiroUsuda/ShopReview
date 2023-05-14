import React from 'react';
import { View, StyleSheet, Alert, FlatList, ListRenderItem } from 'react-native';
import { ListItem, Button } from '@rneui/themed';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useScreenNavigation } from '../screens/navigation';
import { MemoCollection, memoConverter } from '../services/firebase';

type MemoListItemProps = {
  docId: string;
  title: string;
  subtitle: string;
};

const MemoListItem: React.FC<MemoListItemProps> = (props) => {
  const navigation = useScreenNavigation();
  const { docId, title, subtitle } = props;
  const handlePress = () => {
    navigation.navigate('MemoDetail', { docId });
  };

  const handleDelete = (reset: () => void) => {
    const { currentUser } = getAuth();
    if (currentUser) {
      const db = getFirestore();
      const docRef = doc(db, `users/${currentUser.uid}/memos/${docId}`).withConverter(
        memoConverter,
      );
      Alert.alert('メモを削除します', 'よろしいですか？', [
        {
          text: 'キャンセル',
          onPress: () => {
            reset();
          },
        },
        {
          text: '削除',
          style: 'destructive',
          onPress: () => {
            deleteDoc(docRef).catch(() => {
              Alert.alert('削除に失敗しました');
            });
            reset();
          },
        },
      ]);
    }
  };
  return (
    <ListItem.Swipeable
      bottomDivider
      leftWidth={0}
      rightContent={(reset) => (
        <Button
          title="Delete"
          onPress={() => handleDelete(reset)}
          icon={{ name: 'delete', color: 'white' }}
          buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
        />
      )}
      onPress={handlePress}
    >
      <ListItem.Content>
        <ListItem.Title style={styles.listTitle} numberOfLines={1}>
          {title}
        </ListItem.Title>
        <ListItem.Subtitle style={styles.listSubtitle}>{subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};

type MemoListProps = {
  memos: MemoCollection[];
};

const MemoList: React.FC<MemoListProps> = (props) => {
  const { memos } = props;
  const renderItem: ListRenderItem<MemoCollection> = ({ item }) => {
    return (
      <MemoListItem
        key={item.id}
        docId={item.id}
        title={item.bodyText}
        subtitle={String(item.updatedAt)}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item: MemoCollection) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  memoList: {
    flex: 1,
  },
  listTitle: {
    fontSize: 20,
    lineHeight: 32,
  },
  listSubtitle: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});

export default MemoList;
