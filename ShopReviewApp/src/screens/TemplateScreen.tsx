import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

/* types */
import { TemplateScreenProps } from '../types/navigation';

/* components */
import LogOutButton from '../components/button/LogOutButton';

const TemplateScreen: React.FC<TemplateScreenProps> = (props) => {
  const { navigation, route } = props;
  const id = route.params?.id;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{id || 'Template'}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TemplateScreen;
