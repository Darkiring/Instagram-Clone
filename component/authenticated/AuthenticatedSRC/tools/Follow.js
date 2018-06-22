import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Follow extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button
          title="Ir a Autor"
          onPress={() => {
          navigation.navigate('Autor');
        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
