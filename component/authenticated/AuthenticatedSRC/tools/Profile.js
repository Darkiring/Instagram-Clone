import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Profile extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Button
          title="Ir a Publicacion"
          onPress={() => {
            navigation.navigate('Publicacion');
          }}
        />
      </View>
    );
  }
}
