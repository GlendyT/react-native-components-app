/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Title} from '../../components/ui/Title';
import {RefreshControl, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, globalStyles} from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange', 'green']}
          onRefresh={onRefresh}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}>
      <Title text="Pull to refresh" safe />
    </ScrollView>
  );
};
