const Math = require('../utilities/math.js');

describe('Math', () => {
  it('Should allow numbers to be added', () => {
    expect(Math.sum(1, 1)).toBe(2);
  });
  it('Should allow numbers to be divisable', () => {
    expect(Math.div(10, 5)).toBe(2);
  });
  it('Should allow multiplication', () => {
    expect(Math.mul(10, 5)).toBe(50);
  });
  it('Should allow numbers to be subtracted', () => {
    expect(Math.sub(10, 5)).toBe(5);
  });
});
