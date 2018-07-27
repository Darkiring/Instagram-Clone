import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';

class SignUp extends Component {
  registroDeUsuario = (values) => {
    console.log(values);
    this.props.registro(values);
    // Comentario para subir commit
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignUpForm registro={this.registroDeUsuario} />
        <View style={styles.Button}>
          <Button
            title="Cancelar"
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
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,

  },
});

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
});

const mapDispatchToProps = dispatch => ({
  registro: (values) => {
    dispatch({ type: 'REGISTRO', datos: values });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
