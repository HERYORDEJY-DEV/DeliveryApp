import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import NavBar from '../../components/nav-bar';
import Search from '../../components/search';
import { SvgXml } from 'react-native-svg';
import { vegetableVector } from '../../assets/svg/vegetable-vector';
import CategoryLabels from '../../components/category-labels';
import ItemRow from '../../components/item-row';
import { _colors } from '../../style/colors';
import { CategoriesStackNavigatorParamList } from '../../navigation/categories-stack';

export default function Category() {
  const route =
    useRoute<RouteProp<CategoriesStackNavigatorParamList, 'Category'>>();

  const navigation = useNavigation();
  const { params } = route;

  const [selectedTypes, setSelectedTypes] = useState<Array<string>>([]);

  const onSelectType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes([...selectedTypes.filter(elt => elt !== type)]);
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const listHeaderComponent = (
    <CategoryLabels data={params?.types} onPress={type => onSelectType(type)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <SvgXml xml={vegetableVector()} style={styles.topRightImage} />
      <NavBar header={params?.name} />
      <Search
        containerStyles={{ marginHorizontal: 20, zIndex: 2, marginBottom: 0 }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        data={params?.items}
        keyExtractor={item => item.name}
        renderItem={({ item, index }) => (
          <ItemRow onPress={() => {}} item={item} />
        )}
        ListHeaderComponent={listHeaderComponent}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: _colors.Background,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: { fontSize: 30, fontFamily: 'SF-Pro-Display-Heavy' },
  topRightImage: {
    position: 'absolute',
    top: -20,
    right: -40,
    zIndex: 1,
  },
});
