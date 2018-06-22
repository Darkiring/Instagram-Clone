import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Comentarios extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button
          title="Ir a Autores"
          onPress={() => { navigation.navigate('Autor'); }}
        />
      </View>
    );
  }
}
