import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { _colors } from '../style/colors';
import { SvgXml } from 'react-native-svg';

interface Props {
  onPress: () => void;
  containerStyles?: ViewStyle;
  icon: string;
}

export default function ButtonSecondary(props: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyles]}
      onPress={props.onPress}
    >
      {/* TODO: use SvgXml here and pass icon xml as props */}
      <SvgXml xml={props.icon} width={20} height={20} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    height: 56,
    backgroundColor: _colors.PrimaryButton,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 10,
  },
  icon: {
    // marginRight: 5,
  },
});
