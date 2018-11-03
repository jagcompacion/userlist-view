import appReducer from './app';

describe('appReducer', () => {
  it('initializes the default state', () => {
    expect(appReducer({}, {})).toEqual({ users: { data: [], hasMore: false } });
  });
});
