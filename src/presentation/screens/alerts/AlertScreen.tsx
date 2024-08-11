/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
//import {Separator} from '../../components/ui/Separator';
import {Alert} from 'react-native';
import {showPrompt} from '../../../config/adapters/prompt.adapters';
import {View} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

export const AlertScreen = () => {
  const {isDark} = useContext(ThemeContext);
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('onDismiss');
        },
        userInterfaceStyle: isDark ? 'dark' : 'light',
      },
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('onDismiss');
        },
        userInterfaceStyle: isDark ? 'dark' : 'light',
      },
    );

  const onShowPrompt = () => {
    showPrompt({
      title: 'Prompt Title',
      subtitle: 'BTS PAVED THE WAY',
      buttons: [{text: 'OK', onPress: () => console.log('ok')}],
      placeholder: 'Placehonder',
    });

    //TODO: CODIGO NATIVO
    // Alert.prompt(
    //   'Correo Electronioc',
    //   'BTS PAVED THE WAY',
    //   (valor: string) => console.log({valor}),
    //   'secure-text',
    //   'Soy el vallor por defecto',
    //   'number-pad',
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />
      <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Prompt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
