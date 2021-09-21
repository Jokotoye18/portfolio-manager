import React from 'react';
import { FlatList, RefreshControl, SafeAreaView } from 'react-native';

import { CoinCard } from '../../components';
import { portfolios } from '../../constants';
import { globalStyles } from '../../styles';
import { styles } from './styles';
import { useHomeHelper } from './useHomeHelper';

export const Home = () => {
  const { data, refreshing, onRefresh } = useHomeHelper();

  return (
    <SafeAreaView style={globalStyles.wrapper}>
      <FlatList
        data={data ? Object.entries(data || {}) : []}
        renderItem={({ item }) => {
          const prices = Object.values(item[1]);
          const coin = portfolios.find(coinInfo => coinInfo.coin === item[0]);
          const coinWithPrices = {
            ...coin,
            prices,
          };
          return <CoinCard coin={coinWithPrices} />;
        }}
        keyExtractor={item => `${item.purchaseId}`}
        contentContainerStyle={[globalStyles.container, styles.container]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};
