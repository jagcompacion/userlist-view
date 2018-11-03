import React from 'react';
import { shallow } from 'enzyme';
import { Text, StyleSheet } from 'react-native';
import { NoMoreUsers } from './NoMoreUsers';

describe('NoMoreUsers', () => {
  it('should have label', () => {
    const styles = StyleSheet.create({
      container: {
        padding: 15,
      },
      text: {
        textAlign: 'center',
      },
    });

    const wrapper = shallow(<NoMoreUsers />);
    expect(wrapper.contains(<Text style={styles.text}>No more users</Text>))
      .toBe(true);
  });
});
