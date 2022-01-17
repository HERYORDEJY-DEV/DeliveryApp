import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  TextInputProps,
  TextInput,
} from 'react-native';

import { _colors } from '../style/colors';
import { SvgXml } from 'react-native-svg';
import { iconSearch } from '../assets/svg/icon-search';

interface Props {
  containerStyles?: ViewStyle;
}

interface InputProps extends TextInputProps {}

export default function Search(props: Props, iProps: InputProps) {
  return (
    <View style={[styles.container, props.containerStyles]}>
      <SvgXml xml={iconSearch()} />
      <TextInput
        {...iProps}
        placeholder={'Search'}
        placeholderTextColor={_colors.TextSecondary}
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: _colors.Border,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: _colors.White,
  },
  textInput: {
    fontSize: 17,
    color: _colors.TextSecondary,
    fontFamily: 'SFProText-Regular',
    width: '100%',
    height: 48,
    marginLeft: 15,
    flex: 1,
    // zIndex: 1000,
  },
});
