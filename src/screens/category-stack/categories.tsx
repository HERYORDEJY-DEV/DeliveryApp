import React from 'react';
import { Dimensions, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import ItemCard from '../../components/item-card';
import NavBar from '../../components/nav-bar';
import Search from '../../components/search';
import { categories } from '../../api/datas';
import { _colors } from '../../style/colors';

const { width, height } = Dimensions.get('window');

export default function Categories() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <NavBar header={'Categories'} />
      <Search containerStyles={{ marginHorizontal: 20, marginBottom: 0 }} />
      <FlatList
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <ItemCard
            title={item.name}
            quantity={item.quantity}
            onPress={() =>
              navigation.navigate({ name: 'Category', params: item })
            }
            imageSource={item.image}
            containerStyles={{
              marginLeft: 20,
              marginBottom: 20,
              width: width * 0.5 - 30,
            }}
          />
        )}
        numColumns={2}
        centerContent={true}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: _colors.Background,

    // padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
