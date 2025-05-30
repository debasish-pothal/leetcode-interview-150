/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    buyPrice = Math.min(buyPrice, prices[i]);

    profit = Math.max(profit, prices[i] - buyPrice);
  }

  return profit;
};
