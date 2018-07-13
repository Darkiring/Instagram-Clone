import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Text,
} from 'react-native';
import SignInForm from './Formas/SignInForm';

export default class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={{ uri: 'https://lh6.googleusercontent.com/MAPHfXFsRNymfcpw3gI75KCblyZ6C1bmA1OrbZu3RfJT97A20kRXWn5qI_gV4mhUnhoPDO7DHo6UmmcVfLSL=w1870-h910-rw' }}
        style={styles.container}
        // source={{ uri: '../Background/BackGroundParis.jpg' }}
      >
        <View style={styles.containerInst}>
          <Text style={styles.containerOpaTex}> Instagram Clone </Text>
        </View>
        <View style={styles.containerOpa}>
          <SignInForm />
          <Button
            title="Registrarme"
            onPress={() => {
            navigation.navigate('SignUp');
        }}
          />
        </View>
      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 18,
    width: '100%',
    height: '100%',
  },
  containerOpa: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  containerOpaTex: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 38,
  },
  containerInst: {
    paddingBottom: 90,
    alignItems: 'center',
  },
});
