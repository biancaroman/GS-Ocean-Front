import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Navbar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    width: 400,
    height: 220,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
  },
});
