import { StackNavigator } from 'react-navigation';
import TabFollow from './TabFollow';
import Autor from './tools/Profile';

const StackFollow = StackNavigator({
  TabFollow: {
    screen: TabFollow,
  },
  Autor: {
    screen: Autor,
  },
});

export default StackFollow;
