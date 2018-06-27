import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
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
    headerMode: 'none',
  },
);

export default NotAutenticateRoutes;
