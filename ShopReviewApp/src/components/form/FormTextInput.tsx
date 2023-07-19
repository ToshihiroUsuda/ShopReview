import React from 'react';
import { View } from 'react-native';
import { Controller, FieldValues, UseControllerProps, FieldPath } from 'react-hook-form';
import { Input, InputProps, useTheme } from '@rneui/themed';

const FormTextInput = <T extends FieldValues = never, U extends FieldPath<T> = FieldPath<T>>({
  control,
  name,
  defaultValue,
  ...props
}: InputProps & UseControllerProps<T, U>) => {
  const { theme } = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, onBlur, name }, formState: { errors } }) => (
        <View>
          <Input
            {...props}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            errorStyle={{ color: theme.colors.error }}
            errorMessage={errors ? (errors[name] ? String(errors[name]?.message) : '') : ''}
          />
        </View>
      )}
    />
  );
};

export default FormTextInput;
