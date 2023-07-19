import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useTheme } from '@rneui/themed';

/* types */
import { ScreenPropsList } from '../types/navigation';

/* components */
import ShopListScreen from '../screens/ShopListScreen';
import ShopDetailScreen from '../screens/ShopDetailScreen';
import ReviewEditScreen from '../screens/ReviewEditScreen';
import ReviewDetailScreen from '../screens/ReviewDetailScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import UserSettingScreen from '../screens/UserSettingScreen';

const Stack = createStackNavigator<ScreenPropsList>();

const AppStackNavigation: React.FC = () => {
  const { theme } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ShopList"
        screenOptions={{ headerTintColor: theme.colors.primary }}
      >
        <Stack.Group
          screenOptions={{
            gestureEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="ShopList"
            component={ShopListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ShopDetail" component={ShopDetailScreen} />
          <Stack.Screen name="ReviewDetail" component={ReviewDetailScreen} />
          <Stack.Screen name="UserDetail" component={UserDetailScreen} />
          <Stack.Screen name="UserSetting" component={UserSettingScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="ReviewEdit"
            component={ReviewEditScreen}
            options={{ headerLeft: () => null }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigation;
