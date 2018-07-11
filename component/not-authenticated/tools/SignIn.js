import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import SignInForm from './Formas/SignInForm';

export default class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Componente SignIn</Text>
        <View style={styles.Button}>
          <SignInForm />
          <Button
            title="Navegar a SignUp"
            onPress={() => {
          navigation.navigate('SignUp');
        }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  Button: {
    alignItems: 'center',
  },
});
