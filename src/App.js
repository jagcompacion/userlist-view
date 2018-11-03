/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import thunk from 'redux-thunk';
import appReducers from './reducers/app';
import UserList from './components/UserList';
import Pulse from './components/Pulse';

const store = createStore(appReducers, applyMiddleware(thunk));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUser: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showUser: true }), 3000);
  }

  render() {
    const { showUser } = this.state;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={{ display: !showUser ? 'flex' : 'none', flex: 1 }}>
            <Pulse />
          </View>
          <View style={{ display: showUser ? 'flex' : 'none', flex: 1 }}>
            <UserList />
          </View>
        </View>
      </Provider>
    );
  }
}

export default App;
