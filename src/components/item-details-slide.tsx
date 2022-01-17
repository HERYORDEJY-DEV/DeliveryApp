import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Animated,
  NativeSyntheticEvent,
} from 'react-native';

interface Props {
  data: Array<string>;
}

import { _colors } from '../style/colors';
import { SvgXml } from 'react-native-svg';
import { iconEllipse } from '../assets/svg/icon-ellipse';

const { width, height } = Dimensions.get('screen');

export default function ItemDetailsSlide(props: Props) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const contentHeight = useRef(new Animated.Value(-358)).current;

  const animateContentHeight = () =>
    Animated.timing(contentHeight, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    });

  useEffect(() => {
    animateContentHeight().start();
  }, []);
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: contentHeight }] }]}
    >
      <Animated.ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        snapToInterval={width}
        decelerationRate={0}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
            listener: (event: NativeSyntheticEvent<any>) => {
              const offsetX = event.nativeEvent.contentOffset.x;
              setCurrentSlideIndex(Math.floor(offsetX / (width - 10)));
              // console.log('offsetX', offsetX, currentSlideIndex);
            },
          },
        )}
      >
        {props.data.map((image, index) => (
          <View style={styles.imageWrapper} key={index.toString()}>
            <Image source={image} style={styles.imageStyle} />
            <View style={styles.overlay} />
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.paginationWrapper}>
        {props.data.map((item, index) => (
          <SvgXml
            key={index.toString()}
            xml={iconEllipse({
              fillOpacity: currentSlideIndex === index ? '1' : '0.5',
            })}
            style={styles.paginationIcon}
          />
        ))}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { height: 358 },
  imageWrapper: { width, height: 358 },
  imageStyle: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
  },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: '#00000079' },
  paginationWrapper: {
    position: 'absolute',
    //bottom: height - 358 - Number(StatusBar.currentHeight)
    top: 300,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationIcon: {
    color: _colors.White,
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
