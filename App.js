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
// import NotAutenticateRoutes from './component/not-authenticated/notAuthenticateRoutes';
import AuthenticatedRutas from './component/authenticated/AuthenticatedRutas';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      texto: 'hola',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <AuthenticatedRutas />
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
