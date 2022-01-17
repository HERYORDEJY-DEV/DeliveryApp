import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Switch from './switch';
import { _colors } from '../style/colors';

export default function CheckoutNonContactDelivery() {
  const [nonContactDelivery, setNonContactDelivery] = useState<boolean>(false);

  const toggleNonContactDelivery = () => setNonContactDelivery(prev => !prev);

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Non-contact-delivery</Text>
        <View style={styles.sectionButton}>
          <Switch
            onPress={toggleNonContactDelivery}
            value={nonContactDelivery}
          />
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
