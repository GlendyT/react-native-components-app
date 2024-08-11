/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../../../config/theme/theme';
//import {ThemeContext} from '../../context/ThemeContext';

export const TextInputScreen = () => {
  //  const {colors} = useContext(ThemeContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <ScrollView>
      <CustomView margin>
        <Title text="Text Inputs" safe />

        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Nombre completo"
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={value => setForm({...form, name: value})}
          />

          <TextInput
            style={globalStyles.input}
            placeholder="email"
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={value => setForm({...form, email: value})}
          />

          <TextInput
            style={globalStyles.input}
            placeholder="Phone"
            keyboardType="phone-pad"
            onChangeText={value => setForm({...form, phone: value})}
          />
        </Card>

        <View style={{height: 10}} />
        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
        <View style={{height: 10}} />

        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
      </CustomView>
      <View style={{height: 20}} />
    </ScrollView>
  );
};
