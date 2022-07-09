export const qualityConfig = [
  {
    name: '灰',
    value: 1,
  },
  {
    name: '绿',
    value: 2,
  },
  {
    name: '蓝',
    value: 3,
  },
  {
    name: '紫',
    value: 4,
  },
  {
    name: '橙',
    value: 5,
  },
];

/* 鞋子类型 */
export const shoeType = [
  { name: '慢走鞋', value: 601 },
  { name: '慢跑鞋', value: 602 },
  { name: '跑步鞋', value: 603 },
  { name: '全能鞋', value: 604 },
];

/* 所有道具类型配置 */
export const propTypeConfig = [
  { name: '鞋盒', value: 301 },
  { name: '盲盒', value: 401 },
  { name: '宝石', value: 501 },
  ...shoeType,
];

/* 获取道具类型 */
export const renderPropType = (value: number) => {
  const target = propTypeConfig.find((item) => item.value === value);

  if (target) {
    return target.name;
  } else {
    return 'mis type';
  }
};

/* 鞋子品质 */
const qualityShoeMap = qualityConfig.reduce<Record<number, string>>(
  (result, item) => {
    result[item.value] = item.name;
    return result;
  },
  {}
);

/* 获取鞋子品质 */
export const renderQuality = (quality: number) => {
  if (qualityShoeMap[Number(quality)]) {
    return qualityShoeMap[quality];
  } else {
    return quality;
  }
};
