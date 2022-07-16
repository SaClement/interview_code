// 最大收益计算
function maxProfit(prices: Array<number>) {
  let maxprofit: number = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > maxprofit) {
        maxprofit = profit;
      }
    }
  }
  return maxprofit;
}


/**
 * 一次遍历
 * @param prices 价格
 * @returns 最大收益 
 */
function oneMaxProfit(prices: Array<number>) {
  let minprice: number = Infinity;
  let maxprofit:number = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }
  return maxprofit;
}
