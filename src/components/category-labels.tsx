import React from 'react';
import { FlatList, StyleSheet, ScrollView, Dimensions } from 'react-native';

import Label from './label';

interface label {
  id?: string | number;
  name: string;
  quantity: number | string;
}

interface Props {
  data: Array<label>;
  onPress: (type: string) => void;
}

const { width, height } = Dimensions.get('screen');

export default function CategoryLabels(props: Props) {
  const renderItem = ({ name, quantity }: label) => {
    // console.log(name);
    return (
      <Label
        title={name}
        quantity={quantity}
        onPress={props.onPress}
        containerStyles={styles.renderItem}
      />
    );
  };

  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.containerContentS}
      style={styles.containerS}
      snapToInterval={width * 0.6}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      bounces={false}
      bouncesZoom={false}
    >
      <FlatList
        bounces={false}
        data={props.data}
        scrollEnabled={false}
        contentContainerStyle={styles.containerContentF}
        numColumns={Math.ceil(props.data.length / 2)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerS: { marginBottom: 10, paddingTop: 20 },
  containerContentS: { paddingLeft: 20 },
  containerContentF: {
    alignSelf: 'flex-start',
    paddingRight: 20,
  },
  renderItem: {
    marginRight: 20,
  },
});
