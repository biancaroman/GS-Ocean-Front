import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './screens/Principal';
import Cadastro from './screens/Cadastro';
import CadastroUsuario from './screens/CadastroUsuario';
import Login from './screens/Login';
import CadastroOngs from './screens/CadastroOngs';
import Contato from './screens/linksNav/Contato';
import FacaParte from './screens/linksNav/FacaParte';
import QuemSomos from './screens/linksNav/QuemSomos';
import PrincipalUsuario from './screens/pagsUsuario/principalUsuario';
import PrincipalOngs from './screens/pagsOngs/principalOngs';
import PrincipalAdm from './screens/pagsAdm/principalAdm';
import Administracao from './screens/linksNavPrincipal/administracao';
import Blog from './screens/linksNavPrincipal/blog';
import Dashboard from './screens/linksNavPrincipal/dashboard';
import EspeciesAmeacadas from './screens/linksNavPrincipal/especiesAmeacadas';
import Geolocalizacao from './screens/linksNavPrincipal/geolocalizacao';
import IdentificacaoEspecies from './screens/linksNavPrincipal/identificacaoEspecies';
import Relatorios from './screens/linksNavPrincipal/relatorios';
import PerfilUsuario from './screens/linksNavPrincipal/perfilUsuario';

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
        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{ title: 'Contato', headerShown: false }} 
        />
        <Stack.Screen
          name="FacaParte"
          component={FacaParte}
          options={{ title: 'FacaParte', headerShown: false }} 
        />
        <Stack.Screen
          name="QuemSomos"
          component={QuemSomos}
          options={{ title: 'QuemSomos', headerShown: false }} 
        />
        <Stack.Screen
          name="PrincipalUsuario"
          component={PrincipalUsuario}
          options={{ title: 'PrincipalUsuario', headerShown: false }} 
        />
        <Stack.Screen
          name="PrincipalOngs"
          component={PrincipalOngs}
          options={{ title: 'PrincipalOngs', headerShown: false }} 
        />
        <Stack.Screen
          name="PrincipalAdm"
          component={PrincipalAdm}
          options={{ title: 'PrincipalAdm', headerShown: false }} 
        />
        <Stack.Screen
          name="Administracao"
          component={Administracao}
          options={{ title: 'Administracao', headerShown: false }} 
        />
        <Stack.Screen
          name="Blog"
          component={Blog}
          options={{ title: 'Blog', headerShown: false }} 
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard', headerShown: false }} 
        />
        <Stack.Screen
          name="EspeciesAmeacadas"
          component={EspeciesAmeacadas}
          options={{ title: 'EspeciesAmeacadas', headerShown: false }} 
        />
        <Stack.Screen
          name="Geolocalizacao"
          component={Geolocalizacao}
          options={{ title: 'Geolocalizacao', headerShown: false }} 
        />
        <Stack.Screen
          name="IdentificacaoEspecies"
          component={IdentificacaoEspecies}
          options={{ title: 'IdentificacaoEspecies', headerShown: false }} 
        />
        <Stack.Screen
          name="Relatorios"
          component={Relatorios}
          options={{ title: 'Relatorios', headerShown: false }} 
        />
        <Stack.Screen
          name="PerfilUsuario"
          component={PerfilUsuario}
          options={{ title: 'PerfilUsuario', headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}