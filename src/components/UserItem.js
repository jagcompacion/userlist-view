import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
});

export const UserItem = ({ user }) => (
  <View style={styles.container}>
    <Image source={{ uri: user.avatar }} style={styles.photo} />
    <Text style={styles.text}>{user.first_name} {user.last_name}</Text>
  </View>
);

UserItem.propTypes = {
  user: PropTypes.shape({}),
};

UserItem.defaultProps = {
  user: {},
};

export default UserItem;
