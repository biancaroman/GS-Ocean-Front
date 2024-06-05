import React from 'react';
import { View, Text} from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';
import { styles } from '../../styles/linksNavPrincipal/geolocalizacaoStyles';

export default function Geolocalizacao(){
  return (
    <View style={{ flex: 1 }}>
      <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
      <View style={styles.container}>
        <Text style={styles.titulo}>Detecção Geolocalizada</Text>   
      </View>
    </View>
  );
}
