import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { _colors } from '../style/colors';

interface Props {
  label?: string;
  icon?: string;
}

export default function CreditCardInput(props: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInput} />
          {props.icon && (
            <SvgXml
              xml={`${props.icon}`}
              style={styles.icon}
              width={32}
              height={20}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'flex-end', marginBottom: 20, flex: 1 },
  textInputWrapper: {
    height: 48,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: _colors.Border,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    height: '100%',
    width: '100%',
    color: _colors.TextPrimary,
    fontSize: 17,
    fontFamily: 'SFProText-Regular',
    marginRight: 10,
    flex: 1,
  },
  label: {
    color: _colors.TextSecondary,
    fontSize: 15,
    fontFamily: 'SFProText-Regular',
    lineHeight: 22,
    letterSpacing: -0.41,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  icon: {},
});
