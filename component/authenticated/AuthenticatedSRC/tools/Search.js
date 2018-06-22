import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Search extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button
          title="Ir Publicaciones"
          onPress={() => {
            navigation.navigate('Publicacion');
        }}
        />
      </View>
    );
  }
}
