import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  StatusBar,
  View,
  Dimensions,
  ImageBackground,
  BackHandler,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { _colors } from '../../style/colors';
import { SvgXml } from 'react-native-svg';
import { iconBox } from '../../assets/svg/icon-box';
import ButtonPrimary from '../../components/button-primary';

const { width, height } = Dimensions.get('screen');

export default function SplashScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const { params } = route;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        // hidden={true}
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <ImageBackground
        source={require('../../assets/images/splash-screen.png')}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <Image
          source={require('../../assets/images/LOGO.png')}
          style={styles.logo}
        />
        <View style={styles.bottom}>
          <View style={styles.bottomWrapper}>
            <View style={styles.topWrapper}>
              <View style={styles.iconWrapper}>
                <SvgXml xml={iconBox()} style={styles.icon} />
              </View>
              <Text style={styles.title}>Non-Contact{'\n'}Deliveries</Text>
              <Text style={styles.subtitle}>
                When placing an order, select the option “Contactless delivery”
                and the courier will leave your order at the door.
              </Text>
            </View>
            <ButtonPrimary
              title={'Order Now'}
              onPress={() => navigation.navigate('TabStack')}
            />
            <ButtonPrimary
              title={'Dismiss'}
              onPress={() => BackHandler.exitApp()}
              containerStyles={{
                backgroundColor: 'transparent',
                marginTop: 10,
              }}
              titleStyles={{ color: _colors.TextSecondary }}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: _colors.Background, flex: 1 },
  imageBackground: { width: '100%', height: '100%', flex: 1 },
  imageWrapper: { width, height: 358 },
  imageStyle: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
  },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: '#00000079' },
  logo: { marginTop: 30 + Number(StatusBar.currentHeight), marginLeft: 30 },
  icon: {},
  bottom: {
    height: 584,
    backgroundColor: '#F6F5F5',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    // marginTop: 80,
    justifyContent: 'center',
    // flex: 1,
  },
  bottomWrapper: {
    // alignItems: 'center',
    // padding: 20,
    justifyContent: 'center',
    flex: 1,
  },

  iconWrapper: {
    backgroundColor: _colors.White,
    height: 104,
    width: 104,
    borderRadius: 104,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topWrapper: {
    alignItems: 'center',
  },
  title: {
    color: _colors.TextPrimary,
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    color: _colors.TextSecondary,
    fontFamily: 'SFProText-Regular',
    fontSize: 17,
    lineHeight: 1.5 * 17,
    letterSpacing: -0.41,
    textAlign: 'center',
    width: '80%',
    marginBottom: 20,
  },
});
