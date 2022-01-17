import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { _colors } from '../style/colors';
import { SvgXml } from 'react-native-svg';
import { iconCheck } from '../assets/svg/icon-check';

interface Props {
  title: string;
  quantity: string | number;
  onPress: (type: string) => void;
  containerStyles?: ViewStyle;
  titleStyles?: TextStyle;
}

export default function Label(props: Props) {
  const [selected, setSelected] = useState(false);

  const onSelect = () => {
    setSelected(prev => !prev);
    props.onPress(props.title);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.containerStyles,
        { backgroundColor: selected ? '#D6B6FF' : _colors.White },
      ]}
      onPress={onSelect}
    >
      {selected && (
        <SvgXml xml={iconCheck()} width={16} height={11} style={styles.icon} />
      )}
      <Text
        style={[
          styles.title,
          props.titleStyles,
          { color: selected ? '#6C0EE4' : _colors.TextSecondary },
        ]}
      >
        {props.title} ({props.quantity})
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 17,
    height: 34,
    backgroundColor: _colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    color: _colors.TextSecondary,
    textTransform: 'capitalize',
    fontFamily: 'SFProText-Medium',
  },
  icon: {
    marginRight: 10,
  },
});
