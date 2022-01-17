import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { _colors } from '../style/colors';

interface Props {
  title: string;
  onPress: () => void;
  containerStyles?: ViewStyle;
  titleStyles?: TextStyle;
}

export default function ButtonPrimary(props: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyles]}
      onPress={props.onPress}
    >
      <Text style={[styles.title, props.titleStyles]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 56,
    backgroundColor: _colors.PrimaryButton,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 15,
    color: _colors.White,
    textTransform: 'uppercase',
    fontFamily: 'SFProText-Semibold',
  },
});
