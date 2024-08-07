/* eslint-disable prettier/prettier */
import React from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {Separator} from '../../components/ui/Separator';
import {Alert} from 'react-native';
import {showPrompt} from '../../../config/adapters/prompt.adapters';

export const AlertScreen = () => {
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
      <Separator />
      <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
      <Separator />
      <Button text="Prompt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
