import { StackNavigator } from 'react-navigation';
import Home from '../AuthenticatedSRC/tools/Home';
import Autor from './tools/Profile';
import Publicacion from './tools/Publicacion';
import Comentarios from './tools/Comentarios';

const StackHome = StackNavigator({
  Home: {
    screen: Home,
  },
  Autor: {
    screen: Autor,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Comentarios: {
    screen: Comentarios,
  },
});

export default StackHome;
