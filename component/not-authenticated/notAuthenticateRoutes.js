import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const SignIn = (props) => {
  console.log(props);
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Componente SignIn</Text>
      <Button
        title="Navegar a SignUp"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
};

const SignUp = (props) => {
  console.log(props);
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Componente SignUp</Text>
      <Button
        title="Navegar a SignIn"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const NotAutenticateRoutes = createStackNavigator(
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
