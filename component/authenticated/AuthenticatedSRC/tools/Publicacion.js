import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Publicacion extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button
          title="Ir a Comentarios"
          onPress={() => { navigation.navigate('Comentarios'); }}
        />
        <Button
          title="Ir a Autor"
          onPress={() => { navigation.navigate('Autor'); }}
        />
      </View>
    );
  }
}
