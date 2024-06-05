import React from 'react';
import { View, Text } from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';
import { styles } from '../../styles/linksNavPrincipal/identificacaoEspeciesStyles';

export default function IdentificacaoEspecies(){

  return (
    <View style={{flex:1}}> 
      <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
      <View>
        <Text>Página Identificacao de Especies</Text>
      </View>   
    </View>
  );
};
