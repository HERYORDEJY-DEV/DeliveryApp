import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: RFValue(30), fontFamily: 'SF-Pro-Display-Heavy' },
});
