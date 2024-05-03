import {describe, it, expect} from '@jest/globals';

export function add(x: number, y: number): number {
  return x + y;
}

describe('calculator', () => {
  it('add numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });
});
