import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../screens/category-stack/categories';
import Category from '../screens/category-stack/category';
import { CategoryProps } from '../utils/type-declarations';

export type CategoriesStackNavigatorParamList = {
  Categories: {};
  Category: CategoryProps;
};

const { Navigator, Screen } =
  createStackNavigator<CategoriesStackNavigatorParamList>();

export default function CategoriesStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={'Categories'} component={Categories} />
      <Screen name={'Category'} component={Category} />
    </Navigator>
  );
}
