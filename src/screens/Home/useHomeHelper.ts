import React from 'react';
import { useCryptoPrices } from './../../hooks/useCryptoPrices';

export const useHomeHelper = () => {
  const { data, refetch } = useCryptoPrices();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    refetch()
      .then(() => setRefreshing(false))
      .catch(() => setRefreshing(false));
  }, [refetch]);

  return {
    data,
    refreshing,
    refetch,
    onRefresh,
  };
};
