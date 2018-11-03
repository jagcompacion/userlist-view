import usersReducer from './users';

import { FETCH_USERS } from '../constants';

describe('userReducer', () => {
  const usersData = { data: [], hasMore: false };

  it('fetches and sets the user data', () => {
    expect(usersReducer({}, { type: FETCH_USERS, users: usersData }))
      .toEqual(usersData);
  });
});
