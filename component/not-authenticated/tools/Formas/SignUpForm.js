import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { autenticacion } from '../../../../Store/Servicios/Firebase';

const fieldNombre = props => (
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

const validate = (values) => {
  const errors = {};
  if (!values.nombre) {
    errors.nombre = 'Campo requerido';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'El nombre de usuario debe tener un tamaño minimo de 5 caracteres';
  } else if (values.nombre.length > 23) {
    errors.nombre = 'El nombre de usuario es demasiado grande';
  }

  if (!values.correo) {
    errors.correo = 'Correo requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Correo Invalido';
  }

  if (!values.password) {
    errors.password = 'Contraseña requerida';
  } else if (values.password.length < 6) {
    errors.password = 'Contraseña muy corta';
  } else if (values.password.length > 15) {
    errors.passsword = 'La contraseña no puede ser mayor a 15 caracteres';
  }

  if (!values.confirmacion) {
    errors.confirmacion = 'Debes escribir una confirmacion de la contraseña';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'Las contraseñas no coinciden';
  }

  return errors;
};

const SignUpForm = props => (
  <View>
    <Text style={styles.texto}> Datos necesarios para registro </Text>
    <Field name="nombre" component={fieldNombre} ph="Ingrese su nombre Usuario" />
    <Field name="correo" component={fieldNombre} ph="Ingrese su correo" keyboard="email-address" autocapi="none" />
    <Field name="password" component={fieldNombre} ph="Ingrese su contraseña" sc />
    <Field name="confirmacion" component={fieldNombre} ph="Ingrese nuevamente su contraseña" sc />
    <Button
      style={{ alignItems: 'center' }}
      title="Registrar"
      onPress={props.handleSubmit(props.registro)}
    />
  </View>
);

const styles = StyleSheet.create({
  texto: {
    fontSize: 18,
  },
});

export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
