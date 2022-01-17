import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { _colors } from '../style/colors';
import { SvgXml } from 'react-native-svg';
import { iconCreditCard } from '../assets/svg/icon-credit-card';
import { useNavigation } from '@react-navigation/native';
import Payment from '../screens/top-level-stack/payment';

export default function CheckoutPaymentMethod() {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Payment method</Text>
        <TouchableOpacity
          style={styles.sectionButton}
          onPress={() => navigation.navigate({ name: 'Payment', params: {} })}
        >
          <Text style={styles.sectionButtonText}>CHANGE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionBody}>
        <View style={styles.sectionBodyWrapper}>
          <SvgXml
            xml={iconCreditCard()}
            width={25}
            height={25}
            style={styles.sectionBodyIcon}
          />
          <Text style={styles.sectionBodyText}>**** **** **** 7890</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  section: { marginBottom: 20 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  sectionBody: {
    minHeight: 56,
    // alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  sectionBodyWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'SFProText-Bold',
    color: _colors.TextPrimary,
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  sectionBodyText: {
    fontSize: 17,
    fontFamily: 'SFProText-Regular',
    color: _colors.TextSecondary,
    letterSpacing: -0.41,
    lineHeight: 1.5 * 17,
  },
  sectionBodyIcon: {
    marginRight: 20,
  },
  sectionButton: {},
  sectionButtonText: {
    fontSize: 15,
    fontFamily: 'SFProText-Bold',
    color: _colors.SelectedViolet,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: -0.01,
    textTransform: 'uppercase',
  },
});
