import React from 'react';
import { shallow } from 'enzyme';
import { Text, Image } from 'react-native';
import { UserItem } from './UserItem';

describe('UserItem', () => {
  it('should have pic and text', () => {
    const styles = {
      text: {
        marginLeft: 12,
        fontSize: 16,
      },
      photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
      },
    };

    const user = {
      id: 4,
      first_name: 'Eve',
      last_name: 'Holt',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
    };
    const wrapper = shallow(<UserItem user={user} />);
    expect(wrapper.contains(<Image style={styles.photo} source={{ uri: user.avatar }} />))
      .toBe(true);
    expect(wrapper.contains(<Text style={styles.text}>{user.first_name} {user.last_name}</Text>))
      .toBe(true);
  });
});
