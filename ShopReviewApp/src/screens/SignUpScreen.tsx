import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import UserInput from '../components/UserInput';
import { Form } from '../components/FormTextInput';

const SignUpScreen: React.FC = () => {
  const onSubmit = async (data: Form) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, data.email, data.password);
  };

  return (
    <UserInput
      title="新規会員登録"
      footerDescription="会員の方は"
      footerLinkDestination="LogIn"
      onSubmit={onSubmit}
    />
  );
};

export default SignUpScreen;
