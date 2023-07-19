import React from 'react';
import { Alert } from 'react-native';
import { Button, useTheme } from '@rneui/themed';
import { useAtom } from 'jotai';
// import { getAuth } from 'firebase/auth';

/* atoms */
import { userAtom } from '../../atoms/user';

import { initialUser } from '../../types/user';

const LogOutButton: React.FC = () => {
  const { theme } = useTheme();
  const [, setUser] = useAtom(userAtom);
  const handlePress = () => {
    // const auth = getAuth();
    // auth
    //   .signOut()
    //   .then(() => {
    //     navigation.reset({
    //       index: 0,
    //       routes: [{ name: 'LogIn' }],
    //     });
    //   })
    //   .catch((e) => {
    //     Alert.alert(e);
    //   });
    setUser(initialUser);
  };
  return (
    <Button
      onPress={handlePress}
      title="ログアウト"
      type="clear"
      titleStyle={{ color: theme.colors.primary, fontSize: 16 }}
    />
  );
};

export default LogOutButton;
