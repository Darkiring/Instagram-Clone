import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';

class SignUp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignUpForm />
        <View style={styles.Button}>
          <Button
            title="Navegar a SignIn"
            onPress={() => {
          navigation.goBack();
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
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  Button: {
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
});

const mapDispatchToProps = dispatch => ({
  aumentar: () => {
    dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

