import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useScreenNavigation } from '../screens/navigation';
import { FormTextInput, Form, schema } from './FormTextInput';
import { FirebaseError } from 'firebase/app';

type UserFormProps = {
  onSubmit: (data: Form) => Promise<void>;
};

const UserForm: React.FC<UserFormProps> = (props) => {
  const navigation = useScreenNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<Form>({
    mode: 'all',
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });
  const isInvalid: boolean = Object.keys(errors).length > 0 || !isDirty;

  const onValid = (data: Form) => {
    props
      .onSubmit(data)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((e) => {
        if (e instanceof FirebaseError) {
          console.log(e);
        }
      });
  };

  return (
    <View style={styles.form}>
      <FormTextInput
        control={control}
        areaName="email"
        label="メールアドレス"
        placeholder="Email Adress"
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <FormTextInput
        control={control}
        areaName="password"
        label="パスワード"
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry
        textContentType="password"
      />
      <Button title="Submit" onPress={handleSubmit(onValid)} disabled={isInvalid} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 24,
  },
});

export default UserForm;
