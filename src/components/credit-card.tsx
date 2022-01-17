import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { SvgXml } from 'react-native-svg';
import ccval from 'card-validator';
import { iconMasterCard } from '../assets/svg/icon-mastercard-card';
import { _colors } from '../style/colors';

interface Props {
  number: string;
  expiry: string;
  name: string;
  icon: string;
}

const { width } = Dimensions.get('screen');

export default function CreditCard(props: Props) {
  // const _i = ccval.number('4105400014520983');

  // console.log('..._i \t\t', _i);

  return (
    <ImageBackground
      source={require('../assets/images/credit-card.png')}
      style={styles.imageBg}
      imageStyle={{ maxWidth: width * 0.9 }}
    >
      <View style={styles.iconWrapper}>
        <SvgXml
          xml={iconMasterCard()}
          width={40}
          height={65}
          style={styles.icon}
        />
      </View>
      <View style={styles.numberWrapper}>
        <Text style={styles.number}>4747 4747 4747 4747</Text>
      </View>
      <View style={styles.nameWrapper}>
        <Text style={styles.name} numberOfLines={1}>
          Alexandra Smith Alexandra Smith{' '}
        </Text>
        <Text style={styles.expiry}>07/22</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    width: 374,
    height: 240,
    padding: 20,
    maxWidth: width * 0.9,
  },
  number: {
    fontSize: 26,
    fontFamily: 'SF-Pro-Display-Medium',
    color: _colors.White,
  },
  expiry: {
    fontSize: 20,
    fontFamily: 'SF-Pro-Display-Medium',
    color: _colors.White,
    flex: 0.3,
    textAlign: 'right',
  },
  name: {
    fontSize: 20,
    fontFamily: 'SF-Pro-Display-Medium',
    color: _colors.White,
    textTransform: 'uppercase',
    flex: 1,
  },
  icon: {},
  iconWrapper: { alignItems: 'flex-end' },
  numberWrapper: { alignItems: 'center', flex: 1 },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
