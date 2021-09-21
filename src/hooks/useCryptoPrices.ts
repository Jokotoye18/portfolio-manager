import axios from 'axios';
import { useQuery } from 'react-query';

type Response = {
  [key: string]: number;
};

export const useCryptoPrices = () => {
  return useQuery(
    'crypto-prices',
    () =>
      axios
        .get(
          'https://min-api.cryptocompare.com/data/pricemulti?fsyms=DOT,ADA,ETH,GAS,VET,OXT,BTC,UNI,FIL&tsyms=USD,CNY,CAD',
        )
        .then(res => res.data),
    {},
  );
};
