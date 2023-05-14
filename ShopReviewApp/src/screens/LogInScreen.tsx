import React, { useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from 'firebase/auth';

import { LogInScreenProps } from './navigation';
import UserInput from '../components/UserInput';
import { Form } from '../components/FormTextInput';

const LogInScreen: React.FC<LogInScreenProps> = (props) => {
  const { navigation } = props;

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      }
    });
    return unsubscribe;
  }, []);

  const onSubmit = async (data: Form) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, data.email, data.password);
  };

  return (
    <UserInput
      title="ログイン"
      footerDescription="会員登録は"
      footerLinkDestination="SignUp"
      onSubmit={onSubmit}
    />
  );
};

export default LogInScreen;
