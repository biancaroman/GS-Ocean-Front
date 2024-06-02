import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './screens/Principal';
import Cadastro from './screens/Cadastro';
import CadastroUsuario from './screens/CadastroUsuario';
import Login from './screens/Login';
import CadastroOngs from './screens/CadastroOngs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ title: 'Principal', headerShown: false }} 
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: 'Cadastro', headerShown: false }} 
        />
        <Stack.Screen
          name="CadastroUsuario"
          component={CadastroUsuario}
          options={{ title: 'CadastroUsuario', headerShown: false }} 
        />
        <Stack.Screen
          name="CadastroOngs"
          component={CadastroOngs}
          options={{ title: 'CadastroOngs', headerShown: false }} 
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}