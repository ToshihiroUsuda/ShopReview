import React from 'react';

import { View } from 'react-native';
import { Text, Switch, useThemeMode } from '@rneui/themed';
import { useAtom } from 'jotai';

/* atom */
import { themeModeAtom } from '../../atoms/themeMode';

const ThemeModeSwitch: React.FC = () => {
  const [, setThemeMode] = useAtom(themeModeAtom);
  const { mode, setMode } = useThemeMode();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <Text h4> DarkMode </Text>
      <Switch
        value={mode === 'dark'}
        onValueChange={(value) => {
          setThemeMode(value ? 'dark' : 'light');
          setMode(value ? 'dark' : 'light');
        }}
      />
    </View>
  );
};

export default ThemeModeSwitch;
