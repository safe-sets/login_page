const { sum, div, mul, sub, } = require('../utilities/jestSetupTests.js');

describe('Math', () => {
  it('Should allow numbers to be added', () => {
    expect(sum(1, 1)).toBe(2);
  });
  it('Should allow numbers to be divisable', () => {
    expect(div(10, 5)).toBe(2);
  });
  it('Should allow multiplication', () => {
    expect(mul(10, 5)).toBe(50);
  });
  it('Should allow numbers to be subtracted', () => {
    expect(sub(10, 5)).toBe(5);
  });
});
