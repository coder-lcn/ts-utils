import BigNumber from 'bignumber.js';
import Decimal from 'decimal.js';

export const unit = {
  /**
   * 业务基础代币： gst、gmt 的转换
   * @param num
   * @returns 转换之后的千分位分隔符的数字
   */
  baseToken(num: string | number) {
    return new BigNumber(num).div(100).toFormat();
  },
  /* 业务基础代币： gst、gmt */
  chainToken(num: string | number) {
    return new BigNumber(num).div(1000000).toFormat();
  },
  /* 能量 */
  energy(num: string | number) {
    return new BigNumber(num).div(100).toFormat(2);
  },
  /* 距离 */
  distance(num: string | number) {
    return new BigNumber(num).div(10000).toFormat(2);
  },
  /* 跑步时间 */
  runningTime(num: string | number) {
    return new Decimal(num).div(new Decimal(36000)).toFixed(2);
  },
  /* 信用度、跑步总时间、磨损度 */
  mixin(num: string | number) {
    return new BigNumber(num).div(10).toFormat(2);
  },
};
