import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button,
  BackHandler,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';

class SignUp extends Component {
  componentDidMount() {
    this.eventListener();
  }

  componentWillUnmount() {
    this.remvEventListener();
  }

  registroDeUsuario = (values) => {
    console.log(values);
    this.props.registro(values);
    // Comentario para subir commit
  }

  onClose = () => {
    const { navigation } = this.props;
    navigation.goBack();
    return true;
  }

  eventListener() {
    BackHandler.addEventListener('hardwareBackPress', this.onClose);
  }

  remvEventListener() {
    BackHandler.removeEventListener('hardwareBackPress', this.onClose);
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
