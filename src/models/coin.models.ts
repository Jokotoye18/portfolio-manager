export interface ICoin {
  purchaseId: number;
  coin: string;
  unit: number;
  cost: number;
  prices: string[];
  percentageToSellAt?: string | number;
}
