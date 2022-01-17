import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/profile-stack/profile';

const { Navigator, Screen } = createStackNavigator();

export default function ProfileStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={'Profile'} component={Profile} />
    </Navigator>
  );
}
