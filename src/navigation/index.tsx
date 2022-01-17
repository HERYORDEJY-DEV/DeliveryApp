import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabStack from './tab-stack';
import ItemDetails from '../screens/top-level-stack/item-details';
import Payment from '../screens/top-level-stack/payment';
import SplashScreen from '../screens/top-level-stack/splash-screen';
import { CategoryItemsProps } from '../utils/type-declarations';

const { Navigator, Screen } = createStackNavigator();

export type RootStackNavigatorParamList = {
  TabStack: undefined;
  ItemDetails: { item: CategoryItemsProps };
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name={'SplashScreen'} component={SplashScreen} />
        <Screen name={'TabStack'} component={TabStack} />
        <Screen name={'ItemDetails'} component={ItemDetails} />
        <Screen name={'Payment'} component={Payment} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
