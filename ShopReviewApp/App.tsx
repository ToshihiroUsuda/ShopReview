import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { useAtom } from 'jotai';

/* atom */
import { userAtom } from './src/atoms/user';
import { themeModeAtom } from './src/atoms/themeMode';

/* screen */
import AuthScreen from './src/screens/AuthScreen';
import AppStackNavigation from './src/navigations/AppStackNavigation';

// import { initializeFirebaseApp } from './src/libs/firebase';
// initializeFirebaseApp();

const App: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [themeMode] = useAtom(themeModeAtom);
  const theme = createTheme({
    mode: themeMode,
    components: {
      Button: {
        raised: true,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* {!user.name ? <AuthScreen /> : <AppStackNavigation />} */}
      <AppStackNavigation />
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Template" component={TemplateScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </ThemeProvider>
  );
};

export default App;
