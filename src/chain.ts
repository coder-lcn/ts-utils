/** 业务数据上支持的链 */
export const chainConfig = {
  sol: [103, 0], // 0 为历史遗留问题，旧有的数据存在 chain 为 0 的情况。后续当没有 0 的情况时，需要处理掉
  bsc: 104,
  eth: 101,
};

export type Chains = keyof typeof chainConfig;

/* 提供给组件使用的链信息结构 */
export const selectChains = (() => {
  const result: { label: string; value: number }[] = [];

  for (const key in chainConfig) {
    const value = chainConfig[key as Chains];
    result.push({ label: key, value: Array.isArray(value) ? value[0] : value });
  }

  return result;
})();

/* 链信息转换，链描述 <=> 链id */
export const chainFormat = (key: number | Chains) => {
  const transformedKey = Number(key);

  if (isNaN(transformedKey)) {
    const value = chainConfig[key as Chains];

    if (value) {
      if (Array.isArray(value)) {
        return value[0];
      } else {
        return value;
      }
    } else {
      throw new RangeError(
        `找不到 ${key} 的配置, ${JSON.stringify(chainConfig)}`
      );
    }
  } else {
    for (const key in chainConfig) {
      const value = chainConfig[key as Chains];
      let matched = false;

      if (Array.isArray(value)) {
        matched = value.includes(transformedKey);

        if (matched) {
          return key;
        }
      } else {
        matched = value === transformedKey;

        if (matched) {
          return key;
        }
      }
    }
  }
};
