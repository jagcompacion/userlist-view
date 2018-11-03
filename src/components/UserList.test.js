import React from 'react';
import { shallow } from 'enzyme';
import { UserList } from './UserList';

describe('UserList', () => {
  const mockFetchUser = jest.fn();
  const props = { users: {}, fetchUsers: mockFetchUser };
  shallow(<UserList {...props} />);

  it('dispatches the fetchUsers it receives from props', () => {
    expect(mockFetchUser).toHaveBeenCalled();
  });
});
