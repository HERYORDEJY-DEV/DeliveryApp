import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import NavBar from '../../components/nav-bar';
import { _colors } from '../../style/colors';
import CheckoutPaymentMethod from '../../components/checkout-payment-method';
import CheckoutDeliveryAddress from '../../components/checkout-delivery-address';
import CheckoutDeliveryOptions from '../../components/checkout-delivery-options';
import CheckoutNonContactDelivery from '../../components/checkout-non-contact-delivery';

export default function Checkout() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar title={'Checkout'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.content}
      >
        {/*  payment method section*/}
        <CheckoutPaymentMethod />
        {/*  delivery address section*/}
        <CheckoutDeliveryAddress />
        {/*  delivery options section*/}
        <CheckoutDeliveryOptions />
        {/*  non-contact delivery section*/}
        <CheckoutNonContactDelivery />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: _colors.Background,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: _colors.Background,
  },
});
