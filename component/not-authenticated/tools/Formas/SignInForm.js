import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
  console.log(props);
  return (
    <View>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        secureTextEntry={props.sc}
        keyboardType={props.keyboard}
        autoCapitalize={props.autocapi}
        onBlur={props.input.onBlur}
      />
      {props.meta.touched && props.meta.error && <Text style={{ color: 'red' }}>{props.meta.error}</Text>}
    </View>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.correo) {
    errors.correo = 'Correo requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Correo Invalido';
  }

  if (!values.password) {
    errors.password = 'Contraseña requerida';
  } else if (values.password.lenght < 5) {
    errors.password = 'Contraseña muy corta';
  } else if (values.password.lenght > 15) {
    errors.passsword = 'La contraseña no puede ser mayor a 15 caracteres';
  }

  return errors;
};

const SignInForm = (props) => {
  console.log(props);
  return (
    <View>
      <Text> Redux Renderiza un Form </Text>
      <Text> Redux Form </Text>
      <Field name="correo" component={fieldNombre} ph="Ingrese su correo" keyboard="email-address" autocapi="none" />
      <Field name="password" component={fieldNombre} ph="Ingrese su contraseña" sc />
      <Button
        title="Ingresar"
        onPress={props.handleSubmit(values => console.log(values))}
      />
    </View>
  );
};

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);
