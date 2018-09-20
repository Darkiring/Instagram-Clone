import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON());

const registroEnBaseDeDatos = ({ uid, email, nombre }) => baseDeDatos.ref(`usuarios/${uid}`)
  .set({
    nombre,
    email,
  });

const loginEnFirebase = ({ correo, password }) => autenticacion
  .signInWithEmailAndPassword(correo, password)
  .then(success => success.user.toJSON());

function* sagaRegistro(values) {
  try {
    // Register user in firebase
    const registro = yield call(registroEnFirebase, values.datos);
    const { email, uid } = registro;
    const { datos: { nombre } } = values;
    // Send user to database and save
    yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (error) {
    console.log(error);
  }
}

function* sagaLogin(values) {
  try {
    console.log(values);
    const result = yield call(loginEnFirebase, values.datos);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery('REGISTRO', sagaRegistro);
  yield takeEvery('LOGIN', sagaLogin);
}
