import {describe, it, expect, jest} from '@jest/globals';

describe('compare numbers and mock implementation', () => {
  it('compare numbers', () => {
    expect(1 + 1).toBeGreaterThanOrEqual(2);
    expect(2 + 3).toBeLessThanOrEqual(5);
  });

  it('mock', () => {
    const fakeAdd = jest
      .fn()
      .mockImplementation((a, b) => Number(a) + Number(b));
    expect(fakeAdd(4, 6)).toEqual(10);
  });
});
