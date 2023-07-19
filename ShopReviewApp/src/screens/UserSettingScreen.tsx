import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

/* types */
import { UserSettingScreenProps } from '../types/navigation';

/* components */
import LogOutButton from '../components/button/LogOutButton';

const UserSettingScreen: React.FC<UserSettingScreenProps> = (props) => {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>User Setting</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserSettingScreen;
