import { unit } from '../index';

test('test unit', () => {
  expect(unit.baseToken(1000)).toStrictEqual('10');
  expect(unit.baseToken('1000')).toStrictEqual('10');
  expect(unit.baseToken('10000000')).toStrictEqual('100,000');

  expect(unit.chainToken(1000)).toStrictEqual('0.001');
  expect(unit.chainToken('1000')).toStrictEqual('0.001');
  expect(unit.chainToken('10000000')).toStrictEqual('10');
  expect(unit.chainToken('100000000000')).toStrictEqual('100,000');

  expect(unit.energy(100)).toStrictEqual('1.00');
  expect(unit.energy(10000000000)).toStrictEqual('100,000,000.00');

  expect(unit.distance(100)).toStrictEqual('0.01');
  expect(unit.distance('1000000')).toStrictEqual('100.00');
  expect(unit.distance('10000000000')).toStrictEqual('1,000,000.00');

  expect(unit.runningTime(36000)).toStrictEqual('1.00');
  expect(unit.runningTime(360000)).toStrictEqual('10.00');

  expect(unit.mixin('100')).toStrictEqual('10.00');
  expect(unit.mixin('100000')).toStrictEqual('10,000.00');
});
