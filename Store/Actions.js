import Constans from './Constans';

export const actionRegistro = values => ({
  type: Constans.registro,
  datos: values,
});

export const actionLogin = datos => ({
  type: Constans.login,
  datos,
});

export const actionEstablecerSesion = user => ({
  type: Constans.sessionOpen,
  user,
});

export const actionCerrarSesion = () => ({
  type: Constans.sessionClose,
});
