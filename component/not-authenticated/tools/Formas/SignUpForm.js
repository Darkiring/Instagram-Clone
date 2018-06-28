import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = () => (
  <TextInput
    placeholder="Texto desde Field Nombre"
  />
);

const SignUpForm = () => (
  <View>
    <Text> Redux Renderiza un Form </Text>
    <Field name="nombre" component={fieldNombre} />
  </View>
);

export default reduxForm({ form: 'SignUpForm' })(SignUpForm);
