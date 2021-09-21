export const getCurrentPrice = (price: number, unit: number) => {
  return parseInt((price * unit).toFixed(2), 10);
};
