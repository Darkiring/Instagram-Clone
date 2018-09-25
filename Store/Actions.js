import Constans from './Constans';

export const actionRegistro = values => ({
  type: Constans.registro,
  datos: values,
});

export const actionLogin = datos => ({
  type: Constans.login,
  datos,
});
