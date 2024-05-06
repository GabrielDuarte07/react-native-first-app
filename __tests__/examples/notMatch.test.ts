import {it, describe, expect} from '@jest/globals';

describe('testing not equal and match', () => {
  it('sum two numbers', () => {
    expect(1 + 1).not.toEqual(1);
  });

  it('match expression', () => {
    expect('developer').toMatch(/\w+/);
  });
});
