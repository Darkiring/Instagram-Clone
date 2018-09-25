import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {
  Footer, Button, Container, Content,
} from 'native-base';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';
import { actionLogin } from '../../../Store/Actions';

class SignIn extends Component {
  singinDeUsuario = (values) => {
    this.props.login(values);
  }

  render() {
    const { navigation } = this.props;
    const account = '¿No tienes una cuenta?  ';
    return (
      <Container style={styles.container}>
        <Content
          style={{ paddingHorizontal: 18 }}
        >
          <View style={styles.containerInst}>
            <Image
              style={styles.containerOpaTex}
              source={require('../Background/instagram_PNG5.png')}
            />
          </View>
          <SignInForm login={this.singinDeUsuario} />
        </Content>
        <Footer
          style={{ backgroundColor: '#F9F9F9' }}
        >
          <Button
            full
            transparent
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <Text>
              {account}
              <Text style={{ fontWeight: 'bold', color: 'black' }}>Regístrate.</Text>
            </Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  containerInst: {
    alignItems: 'center',
  },
  containerOpaTex: {
    width: 200,
    height: 200,
    resizeMode: 'center',
  },
});

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: (datos) => {
    dispatch(actionLogin(datos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
