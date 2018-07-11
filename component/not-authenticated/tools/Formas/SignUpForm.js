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
  if (!values.nombre) {
    errors.nombre = 'Campo requerido';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'El nombre debe al menos tener un tamaño minimo de 5 caracteres';
  } else if (values.nombre.lenght > 10) {
    errors.nombre = 'El nombre es demasiado grande';
  }

  if (!values.correo) {
    errors.correo = 'Campo requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Email Invalido';
  }

  if (!values.password) {
    errors.password = 'Contraseña requerida';
  } else if (values.password.lenght < 5) {
    errors.password = 'Contraseña muy corta';
  } else if (values.password.lenght > 15) {
    errors.passsword = 'La contraseña no puede ser mayor a 15 caracteres';
  }

  if (!values.confirmacion) {
    errors.confirmacion = 'Debes escribir una confirmacion de la contraseña';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'Las contraseñas no coinciden';
  }

  return errors;
};

const SignUpForm = (props) => {
  console.log(props);
  return (
    <View>
      <Text> Redux Renderiza un Form </Text>
      <Text> Redux Form </Text>
      <Field name="nombre" component={fieldNombre} ph="Ingrese su nombre Usuario" />
      <Field name="correo" component={fieldNombre} ph="Ingrese su correo" keyboard="email-address" autocapi="none" />
      <Field name="password" component={fieldNombre} ph="Ingrese su contraseña" sc />
      <Field name="confirmacion" component={fieldNombre} ph="Ingrese nuevamente su contraseña" sc />
      <Button
        title="Registrar"
        onPress={props.handleSubmit(values => console.log(values))}
      />
    </View>
  );
};

export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
