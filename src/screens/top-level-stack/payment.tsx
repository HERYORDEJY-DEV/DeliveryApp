import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { _colors } from '../../style/colors';
import NavBar from '../../components/nav-bar';
import CreditCard from '../../components/credit-card';
import { SvgXml } from 'react-native-svg';
import { iconCamera } from '../../assets/svg/icon-camera';
import CreditCardInput from '../../components/credit-card-input';
import { iconMasterCard } from '../../assets/svg/icon-mastercard-card';
import { iconCardBack } from '../../assets/svg/icon-card-back';
import ButtonPrimary from '../../components/button-primary';

const { width, height } = Dimensions.get('screen');

export default function Payment() {
  const route = useRoute();
  const navigation = useNavigation();

  const { params } = route;
  return (
    <SafeAreaView style={styles.container}>
      <NavBar header={'Credit/Debit card'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.content}
      >
        <View style={{ alignItems: 'center' }}>
          <CreditCard
            number={'1234 5678 9012 3456'}
            expiry={'11/22'}
            name={'Oyebode Yusuf'}
            icon={''}
          />
          <SvgXml xml={iconCamera()} style={{ marginVertical: 20 }} />
        </View>
        <View style={styles.form}>
          <CreditCardInput label={'Name on card'} />
          <CreditCardInput label={'Card number'} icon={iconMasterCard()} />
          <View style={styles.rowWrapper}>
            <CreditCardInput label={'Expiry'} />
            <View style={{ marginHorizontal: 20 }} />
            <CreditCardInput label={'CCV'} icon={iconCardBack()} />
          </View>
        </View>
      </ScrollView>
      <ButtonPrimary
        title={'Use this card'}
        onPress={() => navigation.goBack()}
        containerStyles={{ margin: 20, marginBottom: 30 }}
      />
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
  form: {},
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
