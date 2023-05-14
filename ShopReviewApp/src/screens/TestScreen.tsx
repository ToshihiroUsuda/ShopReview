import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ITestScreenProps {
  message?: string;
}

const TestScreen: React.FC<ITestScreenProps> = ({ message = 'World' }: ITestScreenProps) => {
  return (
    <View style={styles.testScreen}>
      <Text>{`Hello ${message}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  testScreen: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TestScreen;
