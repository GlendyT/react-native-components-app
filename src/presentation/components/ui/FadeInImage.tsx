/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ActivityIndicator, Animated, StyleProp} from 'react-native';
import {ImageStyle, View} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {animatedOpacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="gray"
          size={30}
        />
      )}

      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn({duration: 1000});
          setIsLoading(false);
        }}
        style={[style, {opacity: animatedOpacity}]}
      />
    </View>
  );
};
