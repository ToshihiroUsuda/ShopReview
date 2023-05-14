import React from 'react';
import { View, StyleSheet } from 'react-native';

/* types */
import { TemplateScreenProps } from '../types/navigation';

const TemplateScreen: React.FC<TemplateScreenProps> = (props) => {
  const { navigation, route } = props;
  const id = route.params?.id;
  return (
    <View style={styles.container}>
      <View>{id || 'Template'}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TemplateScreen;
