import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import { Footer, Button, Container, Content } from 'native-base';
import SignInForm from './Formas/SignInForm';

export default class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <Content
          style={{ paddingHorizontal: 18 }}
        >
          <View style={styles.containerInst}>
            <Image
              style={styles.containerOpaTex}
              source={{ uri: 'http://pngimg.com/uploads/instagram/instagram_PNG5.png' }}
            />
          </View>
          <SignInForm />
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
            <Text>¿No tienes una cuenta? <Text style={{ fontWeight: 'bold', color: 'black' }}>Regístrate.</Text></Text>
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
