import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Button
          title="GO Autor"
          onPress={() => { navigation.navigate('Autor'); }}
        />
        <Button
          title="Comentarios"
          onPress={() => { navigation.navigate('Comentarios'); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
