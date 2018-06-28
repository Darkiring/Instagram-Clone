import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

class SignUp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Componente SignUp</Text>
        <Button
          title="Navegar a SignIn"
          onPress={() => {
          navigation.goBack();
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

