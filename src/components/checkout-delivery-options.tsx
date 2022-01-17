import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { _colors } from '../style/colors';
import { SvgXml } from 'react-native-svg';
import { iconWalking } from '../assets/svg/icon-walking';
import { iconCheck } from '../assets/svg/icon-check';
import { iconBike } from '../assets/svg/icon-bike';
import { iconDrone } from '../assets/svg/icon-drone';

const _options: Array<{
  id: string;
  title: string;
  key: string;
  icon: (e: { stroke?: string; fill?: string }) => string;
}> = [
  {
    id: '1',
    title: 'I’ll pick it up myself',
    icon: e => iconWalking(e),
    key: 'myself',
  },
  { id: '2', title: 'By courier', icon: e => iconBike(e), key: 'courier' },
  { id: '3', title: 'By drone', icon: e => iconDrone(e), key: 'drone' },
];

export default function CheckoutDeliveryOptions() {
  const [deliveryOption, setDeliveryOption] = useState<string | null>(null);

  const selectDeliveryOption = (option: string) => setDeliveryOption(option);

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Delivery options</Text>
        <TouchableOpacity style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>CHANGE</Text>
        </TouchableOpacity>
      </View>
      {_options.map((item, index) => (
        <TouchableOpacity
          key={item.key}
          style={[
            styles.sectionBody,
            {
              marginVertical: index % 2 == 0 ? 10 : 0,
            },
          ]}
          onPress={() => setDeliveryOption(item.key)}
        >
          <View style={styles.sectionBodyWrapper}>
            <SvgXml
              xml={item.icon({
                stroke:
                  deliveryOption === item.key
                    ? _colors.SelectedViolet
                    : '#2D0C57',
              })}
              width={25}
              height={25}
              style={styles.sectionBodyIcon}
            />
            <Text
              style={[
                styles.sectionBodyText,
                {
                  color:
                    deliveryOption === item.key
                      ? _colors.SelectedViolet
                      : _colors.TextSecondary,
                  fontFamily:
                    deliveryOption === item.key
                      ? 'SFProText-Semibold'
                      : 'SFProText-Regular',
                },
              ]}
            >
              {item.title}
            </Text>
          </View>
          {deliveryOption === item.key && (
            <SvgXml
              xml={iconCheck({
                stroke:
                  deliveryOption === item.key
                    ? _colors.SelectedViolet
                    : '#2D0C57',
              })}
              width={25}
              height={25}
              style={styles.sectionBodyIcon}
            />
          )}
        </TouchableOpacity>
      ))}
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
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
