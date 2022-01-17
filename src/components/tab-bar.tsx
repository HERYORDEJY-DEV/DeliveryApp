import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import { SvgXml } from 'react-native-svg';
import { iconGridTab } from '../assets/svg/icon-grid-tab';
import { iconCartTab } from '../assets/svg/icon-cart-tab';
import { iconProfileTab } from '../assets/svg/icon-profile-tab';
import { _colors } from '../style/colors';

interface Props {}

function tabIcons(label: string, isFocused: boolean) {
  if (label === 'Categories-Stack') {
    return <SvgXml xml={iconGridTab({ isFocused })} width={22} height={22} />;
  }

  if (label === 'Checkout-Stack') {
    return <SvgXml xml={iconCartTab({ isFocused })} width={28} height={28} />;
  }

  if (label === 'Profile-Stack') {
    return (
      <SvgXml xml={iconProfileTab({ isFocused })} width={22} height={22} />
    );
  }
}

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map(
        (route: { key: string; name: string }, index: number) => {
          const { options } = descriptors[route.key];
          const label: string =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.button}
              key={index}
            >
              <View>
                {tabIcons(label, isFocused)}
                {/*<Text style={{ color: isFocused ? '#673ab7' : '#222' }}>*/}
                {/*  {label}*/}
                {/*</Text>*/}
                {/* TODO: Dynamically render the badge based on certain condition */}
                {label === 'Checkout-Stack' && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeValue}>6</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#F1F6FB',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    borderTopColor: _colors.Border,
    borderTopWidth: 2,
  },

  button: { alignItems: 'center', flex: 1 },
  badge: {
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: _colors.Green,
    borderRadius: 20,
    // flex: 1,
    position: 'absolute',
    top: -10,
    right: -10,
  },
  badgeValue: {
    fontSize: 10,
    fontFamily: 'SFProText-Semibold',
    textAlign: 'center',
    color: _colors.SelectedViolet,
  },
});
