import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from '@rneui/themed';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TemplateScreen from './src/screens/TemplateScreen';
import { ScreenPropsList } from './src/types/navigation';

import { theme } from './src/theme';
import { initializeFirebaseApp } from './src/libs/firebase';
initializeFirebaseApp();

const Stack = createStackNavigator<ScreenPropsList>();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Template" component={TemplateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
