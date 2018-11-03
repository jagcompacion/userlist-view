import axios from 'axios';
import { FETCH_USERS } from '../constants';

export const fetchUsers = page => dispatch => axios.get(`https://reqres.in/api/users?per_page=10&page=${page}`)
  .then(({ data: users }) => {
    dispatch({
      type: FETCH_USERS,
      users: {
        data: users.data,
        hasMore: users.total_pages - users.page > 0,
      },
    });
  });

export default {};
