/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
//import {CustomView} from '../../components/ui/CustomView';
//import {Title} from '../../components/ui/Title';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';
//import {colors} from '../../../config/theme/theme';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    //TODO Añadir numero a nuestro arreglo
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };
  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%',
      }}
    />
    // <Image
    //   source={{uri: `https://picsum.photos/id/${number}/500/400`}}
    //   style={{
    //     height: 400,
    //     width: '100%',
    //   }}
    // />
  );
};

/*
       <Title text="Infinite Scroll" safe />
<Text
      style={{
        height: 300,
        backgroundColor: colors.primary,
        color: 'white',
        fontSize: 50,
      }}>
      {number}
    </Text>*/
