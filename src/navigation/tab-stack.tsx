import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesStack from './categories-stack';
import CheckoutStack from './checkout-stack';
import ProfileStack from './profile-stack';
import CustomTabBar from '../components/tab-bar';

type TabNavigatorParamList = {
  'Categories-Stack': {};
  'Checkout-Stack': {};
  'Profile-Stack': {};
};
const { Navigator, Screen } = createBottomTabNavigator<TabNavigatorParamList>();

export default function TabStack() {
  return (
    <Navigator
      initialRouteName={'Categories-Stack'}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => (
        <>
          <CustomTabBar {...props} />
        </>
      )}
    >
      <Screen name={'Categories-Stack'} component={CategoriesStack} />
      <Screen name={'Checkout-Stack'} component={CheckoutStack} />
      <Screen name={'Profile-Stack'} component={ProfileStack} />
    </Navigator>
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
