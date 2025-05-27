export const calcPercentageChange = (amount:number, prevAmount:number): number => {
  if (amount === 0 || prevAmount === 0) return 0;
  return ((amount - prevAmount) / prevAmount) * 100;
}

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}
