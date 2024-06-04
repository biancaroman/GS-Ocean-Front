import React from 'react';
import { View, Text } from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';

export default function EspeciesAmeacadas(){


  return (
    <View style={{flex:1}}> 
    <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
      <View>
        <Text>Página Especies Ameacadas</Text>
      </View>   
    </View>
  );
};
