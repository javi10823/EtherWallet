import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen} from '../screens/Onboarding';
import {AddWalletScreen} from '../screens/AddWallet';
import {Home} from '../screens/Home';
import {SettingsScreen} from '../screens/Settings';
import {Receive} from '../screens/Receive';

const Stack = createNativeStackNavigator();

export const ROUTES: Record<string, never> = {
  ONBOARDING: 'OnboardingScreen' as never,
  ADD_WALLET: 'AddWalletScreen' as never,
  HOME: 'Home' as never,
  SETTINGS: 'Settings' as never,
  RECEIVE: 'Receive' as never,
};

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.ONBOARDING}
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.ADD_WALLET}
          component={AddWalletScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.SETTINGS}
          component={SettingsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.RECEIVE}
          component={Receive}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
