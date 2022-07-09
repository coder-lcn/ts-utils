import { selectChains, chainFormat, Chains } from '..';

describe('test something about chain', () => {
  it('selectChains', () => {
    selectChains.forEach((item) => {
      expect(chainFormat(item.label as Chains)).toBeTruthy();
    });
  });

  it('chainFormat', () => {
    expect(chainFormat('sol')).toStrictEqual(103);
    expect(chainFormat('bsc')).toStrictEqual(104);
    expect(chainFormat('eth')).toStrictEqual(101);

    expect(chainFormat(0)).toStrictEqual('sol');
    expect(chainFormat(103)).toStrictEqual('sol');
    expect(chainFormat(104)).toStrictEqual('bsc');
    expect(chainFormat(101)).toStrictEqual('eth');

    // 异常数据
    expect(() => {
      // @ts-ignore
      chainFormat('other');
    }).toThrow();
    expect(chainFormat(9999)).toBeUndefined();
  });
});
