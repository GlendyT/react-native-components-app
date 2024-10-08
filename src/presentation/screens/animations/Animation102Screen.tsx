/* eslint-disable prettier/prettier */
import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false, // Added!
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: true,
      }).start();
    },
  });
  return (
    <CustomView style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getTranslateTransform(), styles.box]}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
