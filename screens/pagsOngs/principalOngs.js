import React from 'react';
import { View, Text} from 'react-native';
import Navbar from '../../components/NavBarPrincipal';

export default function PrincipalOngs(){

    const showLinks = {
        identificarEspecies: false,
        especiesAmeacadas: true,
        geolocalizacao: true,
        administração: false,
    };

  return (
    <View style={{flex:1}}> 
      <Navbar logoSource={require('../../assets/logos/Logo2.png')} showLinks={showLinks} />
      <View>
        <Text>Página Principal das ONGs</Text>
      </View>   
    </View>
  );
};

