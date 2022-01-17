import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Checkout from '../screens/checkout-stack/checkout';

const { Navigator, Screen } = createStackNavigator();

export default function CheckoutStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={'Checkout'} component={Checkout} />
    </Navigator>
  );
}
