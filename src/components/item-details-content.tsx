import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';

import { _colors } from '../style/colors';
import { CategoryItemsProps } from '../utils/type-declarations';
import ButtonSecondary from './button-secondary';
import { iconFav } from '../assets/svg/icon-fav';
import { iconCart } from '../assets/svg/icon-cart';
import ButtonPrimaryIcon from './button-primary-icon';

interface Props {
  item: CategoryItemsProps;
}
const { width, height } = Dimensions.get('screen');

export default function ItemDetailsContent(props: Props) {
  const contentHeight = useRef(new Animated.Value(height - (358 + 15))).current;

  const [fav, setFav] = useState(false);
  const [cart, setCart] = useState(false);

  const toggleFav = () => setFav(prev => !prev);
  const toggleCart = () => setCart(prev => !prev);

  const animateContentHeight = () =>
    Animated.timing(contentHeight, {
      toValue: 1,
      duration: 190,
      useNativeDriver: true,
    });

  useEffect(() => {
    animateContentHeight().start();
  }, []);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: contentHeight }] }]}
    >
      <View style={styles.topWrapper}>
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>{`${props.item.price}`}</Text>
          <Text style={styles.units}>{`€ / ${props.item.measurement}`}</Text>
        </View>
        <Text
          style={styles.approx}
        >{`~ ${props.item.approx} / ${props.item.measurement}`}</Text>
        <Text style={styles.origin}>{props.item.origin}</Text>
        <Text style={styles.desc}>{props.item.description}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <ButtonSecondary
          onPress={toggleFav}
          icon={iconFav({
            fill: fav ? _colors.PrimaryButton : '#FFFFFF',
            stroke: fav ? _colors.PrimaryButton : _colors.TextSecondary,
          })}
          containerStyles={{
            backgroundColor: _colors.White,
            borderColor: _colors.Border,
            borderWidth: 1,
            flex: 0.2,
          }}
        />
        <View style={{ paddingHorizontal: 10 }} />
        <ButtonPrimaryIcon
          onPress={toggleCart}
          icon={iconCart({
            stroke: cart ? _colors.White : _colors.PrimaryButton,
          })}
          containerStyles={{
            backgroundColor: cart ? _colors.PrimaryButton : _colors.White,
            flex: 0.8,
            borderColor: _colors.PrimaryButton,
            borderWidth: cart ? 0 : 1,
          }}
          titleStyles={{
            color: cart ? _colors.White : _colors.PrimaryButton,
          }}
          title={'Add to cart'}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: _colors.White,
    height: height - (358 + 15),
    paddingHorizontal: 20,
    paddingVertical: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  topWrapper: {
    flex: 1,
  },
  units: {
    fontSize: 24,
    fontFamily: 'SFProText-Regular',
    color: _colors.TextSecondary,
  },
  approx: {
    fontSize: 17,
    fontFamily: 'SFProText-Medium',
    color: _colors.PrimaryButton,
    marginVertical: 10,
  },
  price: {
    fontSize: 32,
    fontFamily: 'SFProText-Bold',
    color: _colors.TextPrimary,
    paddingRight: 5,
  },
  origin: {
    fontSize: 22,
    fontFamily: 'SFProText-Bold',
    color: _colors.TextPrimary,
    textTransform: 'capitalize',
    marginVertical: 30,
    marginBottom: 20,
  },
  desc: {
    fontSize: 17,
    fontFamily: 'SFProText-Regular',
    color: _colors.TextSecondary,
    lineHeight: 30,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    // flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
