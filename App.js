/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import NotAutenticateRoutes from './component/not-authenticated/notAuthenticateRoutes';
// import AuthenticatedRutas from './component/authenticated/AuthenticatedRutas';
import Store from './Store/Store';

export default class App extends Component {
  constructor() {
    console.ignoredYellowBox = [
      'Setting a timer',
    ];
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <NotAutenticateRoutes />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
