import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { _colors } from '../../style/colors';
import ItemDetailsSlide from '../../components/item-details-slide';
import ItemDetailsContent from '../../components/item-details-content';
import { RootStackNavigatorParamList } from '../../navigation';

const { width, height } = Dimensions.get('screen');

export default function ItemDetails() {
  // const route = useRoute();
  const route =
    useRoute<RouteProp<RootStackNavigatorParamList, 'ItemDetails'>>();

  const { params } = route;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        // hidden={true}
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View style={styles.overlay} />
      <ItemDetailsSlide data={params.item.images.big} />
      <ItemDetailsContent item={params?.item} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: _colors.Background, flex: 1 },
  imageBackground: { width: '100%', height: 358 },
  imageWrapper: { width, height: 358 },
  imageStyle: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
  },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: '#00000079' },
});
