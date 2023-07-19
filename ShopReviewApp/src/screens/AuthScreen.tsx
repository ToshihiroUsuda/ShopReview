import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, useTheme } from '@rneui/themed';
import { useAtom } from 'jotai';

/* components */
import ThemeModeSwitch from '../components/button/ThemeModeSwitch';
import SignInForm from '../components/form/SignInForm';
import RegisterForm from '../components/form/RegisterForm';

/* atom */
import { userAtom } from '../atoms/user';

/* types */
import { User } from '../types/user';
import { Button } from '@rneui/base';

const AuthScreen: React.FC = () => {
  const { theme } = useTheme();
  const [isSignIn, setIsSignIn] = useState(true);
  const [, setUser] = useAtom(userAtom);

  const onSubmit = (user: User) => {
    setUser(user);
  };

  const handlePressRight = () => {
    setIsSignIn(() => !isSignIn);
  };

  const FormComponent = isSignIn ? SignInForm : RegisterForm;
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.inner}>
        <Text h2 h2Style={{ color: theme.colors.black, fontWeight: 'bold', paddingBottom: 24 }}>
          {isSignIn ? 'ログイン' : '会員登録'}
        </Text>
        <View style={styles.formContainer}>
          <FormComponent onSubmit={onSubmit} />
        </View>
        <View style={styles.messageLine}>
          <Button
            type="clear"
            titleStyle={styles.messageButtonText}
            buttonStyle={{ paddingVertical: 0 }}
            disabled={!isSignIn}
            disabledTitleStyle={{ color: theme.colors.background }}
          >
            パスワードを忘れた方
          </Button>
          <Button
            type="clear"
            titleStyle={styles.messageButtonText}
            buttonStyle={{ paddingVertical: 0 }}
            onPress={handlePressRight}
          >
            {isSignIn ? '会員登録はこちら' : '会員の方はこちら'}
          </Button>
        </View>
        <View style={styles.googleLogin}>
          <Button
            type="outline"
            raised
            icon={{ name: 'google', type: 'font-awesome', size: 20, color: theme.colors.primary }}
            iconContainerStyle={{ marginRight: 10 }}
            onPress={() => {}}
          >
            Googleアカウントでログイン
          </Button>
          {/* <ThemeModeSwitch /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingHorizontal: 27,
    paddingTop: 32,
  },
  formContainer: {
    paddingTop: 16,
  },
  messageLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageButtonText: {
    fontSize: 16,
  },
  googleLogin: {
    paddingTop: 24,
  },
});

export default AuthScreen;
