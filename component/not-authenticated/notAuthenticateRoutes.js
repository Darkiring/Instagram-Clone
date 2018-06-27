import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import SignIn from './tools/SignIn';
import SignUp from './tools/SignUp';

const NotAutenticateRoutes = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forVertical,
    }),
    headerMode: 'none',
  },
);

export default NotAutenticateRoutes;
