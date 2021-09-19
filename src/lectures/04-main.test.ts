import {isPositive} from './04-main';

describe('isPositive', () => {
  it('Khi n > 0', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(2)).toBe(true);
    expect(isPositive(3)).toBe(true);
  });
  it('Khi n < 0', () => {
    expect(isPositive(-1)).toBe(false);
  });
  it('Khi n = 0', () => {
    expect(isPositive(0)).toBe(false);
  })
})
