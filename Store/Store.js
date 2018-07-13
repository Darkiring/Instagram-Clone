import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';

const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};

// Asi recuerda es la logica del Middleware: ultimoMiddleware(miMiddleware(...args))

const miMiddleware = store => next => (action) => {
  console.log('Se ejecuta el Middleware');
  next(action);
};

const ultimoMiddleware = store => next => (action) => {
  console.log('Ultimo middleware');
  next(action);
};

const reducers = combineReducers({
  reducerPrueba,
  form,
});

const store = createStore(reducers, applyMiddleware(miMiddleware, ultimoMiddleware));

export default store;
