import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, InputProps } from '@rneui/themed';
import { Controller, Control } from 'react-hook-form';
import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().required('必須項目です').email('有効なメールアドレスを入力してください'),
  password: yup
    .string()
    .matches(/(?=.*[a-z])/, '小文字を含めてください。')
    .matches(/(?=.*[A-Z])/, '大文字を含めてください。')
    .matches(/(?=.*[0-9])/, '数字を含めてください。')
    .min(8, '最低８文字含めてください。')
    .required('必須項目です'),
});

export type Form = yup.InferType<typeof schema>;
export type areaName = keyof Form;

type FormTextInputProps = {
  control: Control<Form>;
  areaName: areaName;
  defaultValue?: string;
  label: string;
} & InputProps;

export const FormTextInput: React.FC<FormTextInputProps> = ({
  control,
  areaName,
  defaultValue = '',
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={areaName}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, onBlur, name }, formState: { errors } }) => (
        <View>
          <Input
            {...props}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            errorStyle={styles.errorMessage}
            errorMessage={errors ? errors[name]?.message : ''}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
});
