import { TabNavigator } from 'react-navigation';
import StackHome from './AuthenticatedSRC/StackHome';
import StackSearch from './AuthenticatedSRC/StackSearch';
import Add from './AuthenticatedSRC/tools/Add';
import Profile from './AuthenticatedSRC/tools/Profile';
import StackFollow from './AuthenticatedSRC/StackFollow';

const AuthenticatedRutas = TabNavigator(
  {
    Home: {
      screen: StackHome,
    },
    Search: {
      screen: StackSearch,
    },
    Add: {
      screen: Add,
    },
    Follow: {
      screen: StackFollow,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarPosition: 'bottom',
  },
);

export default AuthenticatedRutas;
