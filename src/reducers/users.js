import { FETCH_USERS } from '../constants';

const initialState = {
  data: [],
  hasMore: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS: {
      const { users: actionUsers } = action;
      const stateData = state.data ? state.data : [];
      return {
        data: [...stateData, ...actionUsers.data],
        hasMore: actionUsers.hasMore,
      };
    }
    default:
      return state;
  }
};

export default users;
