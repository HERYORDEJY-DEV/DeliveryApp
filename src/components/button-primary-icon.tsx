import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { _colors } from '../style/colors';
import { SvgXml } from 'react-native-svg';

interface Props {
  title: string;
  onPress: () => void;
  containerStyles?: ViewStyle;
  titleStyles?: TextStyle;
  icon: string;
}

export default function ButtonPrimaryIcon(props: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyles]}
      onPress={props.onPress}
    >
      {/* TODO: use SvgXml here and pass icon xml as props */}
      <SvgXml xml={props.icon} width={20} height={20} style={styles.icon} />
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
    flexDirection: 'row',
    marginVertical: 10,
    flex: 1,
  },
  title: {
    fontSize: 15,
    color: _colors.White,
    textTransform: 'uppercase',
    fontFamily: 'SFProText-Semibold',
    marginLeft: 5,
  },

  icon: {
    marginRight: 5,
  },
});
