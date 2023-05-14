import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@rneui/themed';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import RaisedCircleButton from '../components/CircleButton';
import { MemoDetailScreenProps } from './navigation';
import { memoConverter, Memo } from '../services/firebase';

const MemoDetailScreen: React.FC<MemoDetailScreenProps> = (props) => {
  const { navigation, route } = props;
  const docId = route.params?.docId;

  const [memo, setMemo] = useState<Memo | null>(null);
  const { theme } = useTheme();

  const handlePress = () => {
    if (docId !== undefined) {
      navigation.navigate('MemoEdit', { docId, bodyText: memo ? memo.bodyText : '' });
    }
  };

  useEffect(() => {
    const { currentUser } = getAuth();
    let unsubscribe = () => {};
    if (currentUser) {
      if (docId !== undefined) {
        const db = getFirestore();
        const docRef = doc(db, `users/${currentUser.uid}/memos/${docId}`).withConverter(
          memoConverter,
        );
        unsubscribe = onSnapshot(docRef, (doc) => {
          const data = doc.data();
          if (data) {
            setMemo(data);
          }
        });
      }
    }
    return unsubscribe;
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.memoInfoBar, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.momoInfoTitle} numberOfLines={1}>
          {memo && memo.bodyText}
        </Text>
        <Text style={styles.memoInfoDate}>{memo && String(memo.updatedAt)}</Text>
      </View>
      <RaisedCircleButton name="edit" style={{ top: 64, bottom: 'auto' }} onPress={handlePress} />
      <View style={styles.memoBody}>
        <Text style={[styles.memoBodyText, { color: theme.colors.black }]}>
          {memo && memo.bodyText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoInfoBar: {
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  momoInfoTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  memoInfoDate: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MemoDetailScreen;
