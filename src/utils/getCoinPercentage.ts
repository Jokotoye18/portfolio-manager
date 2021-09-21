export const getCoinPercentage = (
  cost: number,
  currentPrice: number,
): string => {
  // decrease
  if (cost > currentPrice) {
    const percentageDecrease = ((cost - currentPrice) / cost) * 100;
    return percentageDecrease.toFixed(2);
  } else if (currentPrice > cost) {
    // increase
    const percentageIncrease = ((currentPrice - cost) / cost) * 100;
    return percentageIncrease.toFixed(2);
  } else {
    return '0';
  }
};

let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
