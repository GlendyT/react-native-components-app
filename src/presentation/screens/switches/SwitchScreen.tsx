/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/ui/Separator';

export const SwitchScreen = () => {
  //   const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <CustomView style={{ paddingHorizontal: 10, paddingTop: 100}}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => setState({...state, isActive: value})}
          text="Esta encendido?"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => setState({...state, isHungry: value})}
          text="Tiene Hambre?"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => setState({...state, isHappy: value})}
          text="Esta feliz?"
        />
      </Card>
    </CustomView>
  );
};
