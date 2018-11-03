import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import users from './users.json';
import { FETCH_USERS } from '../constants';
import { fetchUsers } from './users';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ users: {} });
const mockResponse = users;

fetchMock.get('https://reqres.in/api/users', mockResponse);

it('creates async action to fetch users', async () => {
  const expectedActions = [{ users, type: FETCH_USERS }];

  await store.dispatch(fetchUsers());
  expect(store.getActions()).toEqual(expectedActions);
});
