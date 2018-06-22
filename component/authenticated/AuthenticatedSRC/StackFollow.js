import { StackNavigator } from 'react-navigation';
import TabFollow from './TabFollow';
import Autor from './tools/Profile';
import Publicacion from './tools/Publicacion';
import Comentarios from './tools/Follow';

const StackFollow = StackNavigator({
  TabFollow: {
    screen: TabFollow,
  },
  Autor: {
    screen: Autor,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Comentarios: {
    screen: Comentarios,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
});

export default StackFollow;
