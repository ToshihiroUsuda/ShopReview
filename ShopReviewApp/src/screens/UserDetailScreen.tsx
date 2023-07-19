import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

/* types */
import { UserDetailScreenProps } from '../types/navigation';

/* components */
import LogOutButton from '../components/button/LogOutButton';

const UserDetailScreen: React.FC<UserDetailScreenProps> = (props) => {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>User Detail</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserDetailScreen;
