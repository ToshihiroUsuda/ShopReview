import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  val: string;
};

const TemplateComponent: React.FC<Props> = ({ val }) => {
  return (
    <View style={styles.container}>
      <View>{val}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TemplateComponent;
