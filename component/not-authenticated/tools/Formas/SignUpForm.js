import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => (
  <TextInput
    placeholder="Texto desde Field Nombre"
    onChangeText={props.input.onChange}
    value={props.input.value}
  />
);

const SignUpForm = (props) => {
  console.log(props);
  return (
    <View>
      <Text> Redux Renderiza un Form </Text>
      <Text> Redux Form </Text>
      <Field name="nombre" component={fieldNombre} />
      <Field name="correo" component={fieldNombre} />
      <Button
        title="Registrar"
        onPress={props.handleSubmit(values => console.log(values))}
      />
    </View>
  );
};

export default reduxForm({ form: 'SignUpForm' })(SignUpForm);
