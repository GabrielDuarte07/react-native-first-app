import {describe, it, expect} from '@jest/globals';

describe('comparing toEqual with toBe', () => {
  it('toEqual', () => {
    expect(1 + 1).toEqual(2);
    expect('string').toEqual('string');
    expect({name: 'Dunha'}).toEqual({name: 'Dunha'});
  });

  it('toBe', () => {
    expect(1 + 1).toBe(2);
    expect('string').toBe('string');
    expect({name: 'Dunha'}).toEqual({name: 'Dunha'});
  });
});
