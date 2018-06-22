import { StackNavigator } from 'react-navigation';
import Publicacion from './tools/Publicacion';
import Search from './tools/Search';
import Autor from './tools/Profile';
import Comentarios from './tools/Comentarios';

const StackSearch = StackNavigator({
  Search: {
    screen: Search,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Autor: {
    screen: Autor,
  },
  Comentarios: {
    screen: Comentarios,
  },
});

export default StackSearch;
