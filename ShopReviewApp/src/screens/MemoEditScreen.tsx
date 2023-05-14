import React, { useState } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
// import getInset from 'react-native-safe-area-view';
import { useHeaderHeight } from '@react-navigation/elements';
import { useTheme } from '@rneui/themed';
import { getFirestore, doc, collection, addDoc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import RaisedCircleButton from '../components/CircleButton';
import { MemoEditScreenProps } from './navigation';
import { memoConverter, Memo } from '../services/firebase';

const MemoEditScreen: React.FC<MemoEditScreenProps> = (props) => {
  const { navigation, route } = props;
  const docId = route.params?.docId;
  const bodyText = route.params?.bodyText || '';

  const { theme } = useTheme();
  const [memoText, setMemoText] = useState<string>(bodyText);

  const handlePress = () => {
    const { currentUser } = getAuth();
    if (currentUser) {
      const memo: Memo = { bodyText: memoText, updatedAt: new Date() };
      const db = getFirestore();
      if (docId !== undefined) {
        // 既にあるメモを編集する
        const docRef = doc(db, `users/${currentUser.uid}/memos/${docId}`).withConverter(
          memoConverter,
        );
        setDoc(docRef, memo)
          .then(() => {
            navigation.goBack();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // 新規作成
        const colRef = collection(db, `users/${currentUser.uid}/memos`).withConverter(
          memoConverter,
        );
        addDoc(colRef, memo)
          .then(() => {
            navigation.goBack();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  // KeybordAvoidingViewのための設定
  // const bottomPadding = getInset('bottom', false);
  // const offset = bottomPadding > 0 ? 90 : 65;
  const height = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior="height"
      keyboardVerticalOffset={height}
      enabled
    >
      <View style={styles.memoBody}>
        <TextInput
          multiline
          autoFocus
          style={[styles.memoBodyText, { color: theme.colors.black }]}
          textAlignVertical={'top'}
          value={memoText}
          onChangeText={(text) => setMemoText(text)}
        />
      </View>
      <RaisedCircleButton name="check" onPress={handlePress} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
  },
});

export default MemoEditScreen;
