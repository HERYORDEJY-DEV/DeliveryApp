import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  Dimensions,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { _colors } from '../style/colors';
import { CategoryItemsProps } from '../utils/type-declarations';
import ButtonSecondary from './button-secondary';
import { iconFav } from '../assets/svg/icon-fav';
import { iconCart } from '../assets/svg/icon-cart';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

interface Props {
  // imageSource: ImageSourcePropType;
  onPress: () => void;
  containerStyles?: ViewStyle;
  titleStyles?: TextStyle;
  item: CategoryItemsProps;
}

const { width, height } = Dimensions.get('screen');

export default function ItemRow(props: Props) {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();

  const [fav, setFav] = useState(false);
  const [cart, setCart] = useState(false);

  const toggleFav = () => setFav(prev => !prev);
  const toggleCart = () => setCart(prev => !prev);

  return (
    <View style={[styles.container]}>
      <View style={[styles.content, props.containerStyles]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate({
              name: 'ItemDetails',
              params: { item: props.item },
            })
          }
          style={styles.imageWrapper}
        >
          <Image source={props.item.images.small} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.right}>
          <Text
            style={[styles.title, props.titleStyles]}
            numberOfLines={width > 465 ? 1 : 2}
          >
            {props.item.name}
          </Text>
          <View style={styles.bottomWrapper}>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>{`${props.item.price}`}</Text>
              <Text
                style={styles.units}
              >{`€ / ${props.item.measurement}`}</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <ButtonSecondary
                onPress={toggleFav}
                icon={iconFav({
                  fill: fav ? _colors.PrimaryButton : '#FFFFFF',
                  stroke: fav ? _colors.PrimaryButton : _colors.TextSecondary,
                })}
                containerStyles={{
                  height: 40,
                  backgroundColor: _colors.White,
                  borderColor: _colors.Border,
                  borderWidth: 1,
                }}
              />
              <View style={{ paddingHorizontal: 10 }} />
              <ButtonSecondary
                onPress={toggleCart}
                icon={iconCart({
                  stroke: cart ? _colors.White : _colors.PrimaryButton,
                })}
                containerStyles={{
                  height: 40,
                  backgroundColor: cart ? _colors.PrimaryButton : _colors.White,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: _colors.White,
    padding: 20,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  content: {
    // backgroundColor: _colors.White,
    flexDirection: 'row',
    // padding: 20,
    overflow: 'hidden',
  },
  imageWrapper: {
    height: 128,
    width: 177,
    // width: 177,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  right: { paddingLeft: 10, flex: 1 },
  bottomWrapper: { flex: 1, justifyContent: 'space-between' },
  title: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: _colors.TextPrimary,
    marginBottom: 5,
  },
  units: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    color: _colors.TextSecondary,
  },
  price: {
    fontSize: 22,
    fontFamily: 'SFProText-Bold',
    color: _colors.TextPrimary,
    paddingRight: 5,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
