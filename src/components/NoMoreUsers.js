import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  text: {
    textAlign: 'center',
  },
});

export const NoMoreUsers = () => (
  <View style={styles.container}>
    <Text style={styles.text}>No more users</Text>
  </View>
);

export default NoMoreUsers;
