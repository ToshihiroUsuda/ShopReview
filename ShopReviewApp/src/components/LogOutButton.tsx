import React from 'react';
import { Alert } from 'react-native';
import { Button, useTheme } from '@rneui/themed';
import { getAuth } from 'firebase/auth';
import { useScreenNavigation } from '../screens/navigation';

const LogOutButton: React.FC = () => {
  const navigation = useScreenNavigation();
  const { theme } = useTheme();
  const handlePress = () => {
    const auth = getAuth();
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch((e) => {
        Alert.alert(e);
      });
  };
  return (
    <Button
      onPress={handlePress}
      title="ログアウト"
      type="clear"
      titleStyle={{ color: theme.colors.white, fontSize: 16 }}
    />
  );
};

export default LogOutButton;
