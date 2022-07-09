import { renderPropType, renderQuality } from '..';

describe('test propType', () => {
  it('render prop type', () => {
    expect(renderPropType(601)).toStrictEqual('慢走鞋');
    expect(renderPropType(602)).toStrictEqual('慢跑鞋');
    expect(renderPropType(603)).toStrictEqual('跑步鞋');
    expect(renderPropType(604)).toStrictEqual('全能鞋');
    expect(renderPropType(9999)).toStrictEqual('mis type');
  });

  it('render shoe quality', () => {
    expect(renderQuality(1)).toStrictEqual('灰');
    expect(renderQuality(2)).toStrictEqual('绿');
    expect(renderQuality(3)).toStrictEqual('蓝');
    expect(renderQuality(4)).toStrictEqual('紫');
    expect(renderQuality(5)).toStrictEqual('橙');
    expect(renderQuality(9999)).toStrictEqual(9999);
  });
});
