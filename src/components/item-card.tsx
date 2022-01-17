import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { _colors } from '../style/colors';

interface Props {
  imageSource: ImageSourcePropType | string;
  title: string;
  quantity: string | number;
  onPress: () => void;
  containerStyles?: ViewStyle;
  titleStyles?: TextStyle;
}

export default function ItemCard(props: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyles]}
      onPress={props.onPress}
    >
      <Image source={props.imageSource} style={styles.image} />
      <View style={styles.bottom}>
        <Text style={[styles.title, props.titleStyles]}>{props.title}</Text>
        <Text style={styles.quantity}>{`(${props.quantity})`}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: _colors.White,
    borderWidth: 1,
    borderColor: _colors.Border,
    // height: 211,
    // width: 177,
    overflow: 'hidden',
  },
  image: {
    height: 140,
    // width: 177,
    width: '100%',
  },
  bottom: { paddingHorizontal: 10, paddingVertical: 10 },
  title: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: _colors.TextPrimary,
    marginBottom: 5,
  },
  quantity: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: _colors.TextSecondary,
  },
});
