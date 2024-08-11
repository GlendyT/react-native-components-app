/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
//import {colors} from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';
import {ThemeContext} from '../../context/ThemeContext';
import {CustomView} from '../../components/ui/CustomView';
import {Button} from '../../components/ui/Button';

export const Animation101Screen = () => {
  const {colors} = useContext(ThemeContext);

  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
          {
            opacity: animatedOpacity,
            transform: [{translateY: animatedTop}],
          },
        ]}
      />
      <Button
        text="Fade in"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 700,
          });
        }}
        style={{marginTop: 10}}
      />
      <Button
        text="Fade Out"
        onPress={() => fadeOut({})}
        style={{marginTop: 10}}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    //backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
