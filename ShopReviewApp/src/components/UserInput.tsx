import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Button, Text } from '@rneui/themed';

import UserForm from './UserForm';
import { Form } from './FormTextInput';
import { useScreenNavigation } from '../screens/navigation';

type UserInputProps = {
  title: string;
  footerDescription: string;
  footerLinkDestination: 'LogIn' | 'SignUp';
  onSubmit: (data: Form) => Promise<void>;
};

const UserInput: React.FC<UserInputProps> = (props) => {
  const { title, footerDescription, footerLinkDestination, onSubmit } = props;
  const navigation = useScreenNavigation();
  const { theme } = useTheme();

  const handlePress = useCallback(() => {
    navigation.navigate(footerLinkDestination);
  }, [navigation, footerLinkDestination]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.userInput}>
        <Text h2 h2Style={{ color: theme.colors.black, fontWeight: 'bold', paddingBottom: 24 }}>
          {title}
        </Text>
        <UserForm onSubmit={onSubmit} />

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: theme.colors.black }]}>
            {footerDescription}
          </Text>
          <Button
            type="clear"
            titleStyle={[styles.footerText, { fontWeight: 'bold' }]}
            buttonStyle={{ padding: 0 }}
            title={'こちら'}
            onPress={handlePress}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInput: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  header: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    lineHeight: 20,
  },
});

export default UserInput;
