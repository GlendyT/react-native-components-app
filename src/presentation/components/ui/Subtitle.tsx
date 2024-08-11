/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Text} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  text: string;
  safe?: boolean;
}

export const Subtitle = ({text, safe = false}: Props) => {
  const {top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: colors.cardBackground,
        color: colors.text,
      }}>
      {text}
    </Text>
  );
};
