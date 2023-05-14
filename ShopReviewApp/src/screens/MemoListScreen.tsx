import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@rneui/themed';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { MemoListScreenProps } from './navigation';
import MemoList from '../components/MemoList';
import RaisedCircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import { memoConverter, MemoCollection } from '../services/firebase';

const MemoListScreen: React.FC<MemoListScreenProps> = (props) => {
  const { navigation } = props;
  const { theme } = useTheme();
  const [memos, setMemos] = useState<MemoCollection[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    let unsubscribe = () => {};
    const { currentUser } = getAuth();
    if (currentUser) {
      const db = getFirestore();
      const colRef = collection(db, `users/${currentUser.uid}/memos`).withConverter(memoConverter);
      unsubscribe = onSnapshot(colRef, (snapshot) => {
        const cols: MemoCollection[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          cols.push({ id: doc.id, bodyText: data.bodyText, updatedAt: data.updatedAt });
        });
        const colsSorted = cols
          .slice()
          .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
        setMemos(colsSorted);
      });
    }
    return unsubscribe;
  }, []);

  const handlePress = () => {
    navigation.navigate('MemoEdit');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <MemoList memos={memos} />
      <RaisedCircleButton name="add" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MemoListScreen;
