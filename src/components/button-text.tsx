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

export default function ButtonText(props: Props) {
  return (
    <TouchableOpacity style={[styles.container, props.containerStyles]}>
      <Text style={[styles.title, props.titleStyles]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 15,
    color: _colors.TextSecondary,
    textTransform: 'uppercase',
    fontFamily: 'SFProText-Semibold',
  },
});
