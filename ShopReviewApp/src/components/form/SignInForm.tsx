import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Timestamp } from 'firebase/firestore';
import * as yup from 'yup';

/* components */
import FormTextInput from './FormTextInput';

/* types */
import { User } from '../../types/user';

const schema = yup.object().shape({
  email: yup.string().required('必須項目です。').email('有効なメールアドレスを入力してください。'),
  password: yup
    .string()
    .matches(/(?=.*[a-z])/, '小文字を含めてください。')
    .matches(/(?=.*[A-Z])/, '大文字を含めてください。')
    .matches(/(?=.*[0-9])/, '数字を含めてください。')
    .min(8, '最低８文字含めてください。')
    .required('必須項目です。'),
});

export type TSignInForm = yup.InferType<typeof schema>;

type Props = {
  onSubmit: (user: User) => void;
};

const SignInForm: React.FC<Props> = (props) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TSignInForm>({
    mode: 'all',
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });

  const onValid = async (data: TSignInForm) => {
    const user: User = {
      id: 'test1',
      name: 'たろう',
      updatedAt: Timestamp.now(),
      createdAt: Timestamp.now(),
    };
    props.onSubmit(user);
  };

  return (
    <View style={styles.form}>
      <FormTextInput<TSignInForm>
        control={control}
        name="email"
        label="メールアドレス"
        // placeholder="メールアドレス"
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <FormTextInput<TSignInForm>
        control={control}
        name="password"
        label="パスワード"
        // placeholder="パスワード"
        autoCapitalize="none"
        secureTextEntry
        textContentType="password"
      />
      <Button title="ログイン" onPress={handleSubmit(onValid)} disabled={!isValid} raised />
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  form: {
    marginBottom: 24,
  },
});
