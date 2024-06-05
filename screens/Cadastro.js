import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Navbar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/telas/cadastroPrincipalStyles';

export default function Cadastro () {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Navbar logoSource={require('../assets/logos/Logo1.png')} />
      <View style={styles.container}>
        <Text style={styles.text}>Escolha a opção que você se encaixa</Text>
        
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CadastroOngs')}>
          <ImageBackground source={require('../assets/background/backgroundCadastroUsuario.jpg')} style={styles.imageBackground}>
            <View style={styles.overlay} />
            <Text style={styles.cardText}>Sou uma ONG</Text>
          </ImageBackground>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CadastroUsuario')}>
          <ImageBackground source={require('../assets/background/usuario2.jpg')} style={styles.imageBackground}>
            <View style={styles.overlay} />
            <Text style={styles.cardText}>Sou um Usuário Comum</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

