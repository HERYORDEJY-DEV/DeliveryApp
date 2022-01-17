import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StatusBar,
} from 'react-native';

import { _colors } from '../style/colors';
import { SvgXml } from 'react-native-svg';
import { iconArrowBack } from '../assets/svg/icon-arrow-back';

interface Props {
  title?: string;
  header?: string;
  onPress?: () => void;
  containerStyles?: ViewStyle;
  titleStyles?: TextStyle;
}

const notchHeight: number | undefined = StatusBar.currentHeight;

export default function NavBar(props: Props) {
  return (
    <View>
      <View
        style={[
          styles.container,
          { elevation: props.title ? 4 : 0 },
          props.containerStyles,
        ]}
      >
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <TouchableOpacity
          style={[styles.iconWrapper]}
          onPress={() => console.log('iii')}
        >
          <SvgXml
            xml={iconArrowBack()}
            width={16}
            height={16}
            style={styles.icon}
          />
        </TouchableOpacity>
        {props.title && (
          <Text style={[styles.title, props.titleStyles]}>{props.title}</Text>
        )}
      </View>
      {props.header && <Text style={styles.header}>{props.header}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80 + Number(notchHeight),
    paddingTop: 20 + Number(notchHeight),
    width: '100%',
    backgroundColor: _colors.Background,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
  },
  title: {
    fontSize: 17,
    color: _colors.TextPrimary,
    textTransform: 'capitalize',
    fontFamily: 'SFProText-Semibold',
    flex: 1,
    textAlign: 'center',
    // padding: 10,
  },
  header: {
    fontSize: 34,
    color: _colors.TextPrimary,
    textTransform: 'capitalize',
    fontFamily: 'SFProText-Bold',
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  iconWrapper: {
    padding: 20,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  icon: {},
});
