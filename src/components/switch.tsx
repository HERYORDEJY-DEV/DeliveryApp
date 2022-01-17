import React, { useRef } from 'react';
import { Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { _colors } from '../style/colors';

interface Props {
  onPress: () => void;
  value: boolean;
}

export default function Switch(props: Props) {
  const currentValue = useRef(new Animated.Value(Number(props.value))).current;

  const animateCurrentValue = () => {
    props.onPress();
    Animated.timing(currentValue, {
      toValue: Number(!props.value) * 44,
      duration: 500,
      useNativeDriver: true,
    });
  };

  return (
    <TouchableOpacity
      style={[
        styles.switchBody,
        {
          backgroundColor: props.value
            ? _colors.SelectedBgViolet
            : _colors.TextSecondary,
        },
      ]}
      onPress={animateCurrentValue}
      activeOpacity={1}
    >
      {props.value && (
        <Text style={[styles.switchLabel, { color: _colors.SelectedViolet }]}>
          Yes
        </Text>
      )}
      <Animated.View
        style={[
          styles.switchKnob,
          { transform: [{ translateX: currentValue }] },
        ]}
      />
      {!props.value && <Text style={styles.switchLabel}>No</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  switchBody: {
    width: 74,
    height: 30,
    backgroundColor: _colors.TextSecondary,
    borderRadius: 30,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  switchKnob: {
    width: 26,
    height: 26,
    backgroundColor: _colors.White,
    borderRadius: 30,
    margin: 0,
    padding: 0,
    // flex: 1,
    elevation: 3,
  },
  switchLabelWrapper: {},
  switchLabel: {
    fontSize: 14,
    fontFamily: 'SFProText-Medium',
    color: _colors.White, //#6C0EE4
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.01,
    textTransform: 'capitalize',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
