import { useMemo } from 'react';
import { portfolios } from '../constants';
import { ICoin } from '../models';

export const useUserCoin = () => {
  const newArray = [];
  const coins = useMemo(
    () =>
      portfolios.forEach(coin => {
        if (newArray.indexOf(coin.coin) === -1) {
          newArray.push(coin);
        }
        return newArray;
      }),
    [],
  );

  return {
    coins,
  };
};
