import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import SignInForm from './Formas/SignInForm';

export default class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm />
        <Button
          title="Registrarme"
          onPress={() => {
          navigation.navigate('SignUp');
        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 18,
  },
});
