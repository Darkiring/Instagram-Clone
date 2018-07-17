import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
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
        placeholderTextColor="#808080"
        style={{
          // Setting up TextInput height as 50 pixel.
          height: 50,
          // Set border width.
           borderWidth: 1,
           // Set border Hex Color Code Here.
           borderColor: '#D1D1D1',
          // Set border Radius.
           borderRadius: 5,
          // Set background color of Text Input.
           backgroundColor: '#E9E9E9',
           margin: 5,
          }}
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
      <Text style={styles.texto}> Iniciar sesion </Text>
      <Field name="correo" component={fieldNombre} ph="Ingrese su correo" keyboard="email-address" autocapi="none" />
      <Field name="password" component={fieldNombre} ph="Ingrese su contraseña" sc autocapi="none" />
      <Button
        title="Ingresar"
        onPress={props.handleSubmit(values => console.log(values))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 18,
    color: 'white',
  },
});

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);
