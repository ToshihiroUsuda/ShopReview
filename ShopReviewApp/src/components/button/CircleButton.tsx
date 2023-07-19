import React from 'react';

import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Button } from '@rneui/themed';

type Props = {
  name: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const CircleButton: React.FC<Props> = ({ name, onPress, style = {} }) => {
  return (
    <Button
      type="solid"
      icon={{ name: name, color: 'white' }}
      containerStyle={{ overflow: 'visible' }}
      buttonStyle={[styles.button, style]}
      radius={100}
      onPress={onPress}
    />
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  button: {
    // borderRadius: 1000,
    position: 'absolute',
    bottom: 40,
    right: 40,
    width: 72,
    height: 72,
    zIndex: 10,
    elevation: 4,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});
