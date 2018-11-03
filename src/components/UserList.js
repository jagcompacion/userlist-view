import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FlatList,
  StyleSheet,
} from 'react-native';
import { fetchUsers } from '../actions/users';

import UserItem from './UserItem';
import NoMoreUsers from './NoMoreUsers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      firstFetch: true,
    };
    this.handleFetch = this.handleFetch.bind(this);
  }

  async componentWillMount() {
    const { page } = this.state;
    await this.props.fetchUsers(page);
    this.setState({ firstFetch: false });
  }

  handleFetch(hasMore) {
    const { page } = this.state;
    if (hasMore) {
      this.setState({ page: page + 1 });
      this.props.fetchUsers(page + 1);
    }
  }

  render() {
    const { users: { data, hasMore } } = this.props;
    const { firstFetch } = this.state;
    return (
      <FlatList
        style={styles.container}
        data={data}
        onEndReached={() => this.handleFetch(hasMore)}
        ListFooterComponent={(!hasMore && !firstFetch) && <NoMoreUsers />}
        onEndReachedThreshold={0}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <UserItem key={item.id} user={item} />}
      />
    );
  }
}

UserList.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({ users: state.users });
const dispatchToProps = { fetchUsers };

export default connect(mapStateToProps, dispatchToProps)(UserList);
