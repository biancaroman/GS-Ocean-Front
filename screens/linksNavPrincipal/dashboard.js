import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity  } from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';

export default function Dashboard(){

  const ultimasDeteccoes = [
    {
      especie: 'Tubarão-branco',
      localizacao: 'Latitude: -25.274398, Longitude: 133.775136',
      data: '01/06/2024'
    },
    {
      especie: 'Baleia-azul',
      localizacao: 'Latitude: 37.774929, Longitude: -122.419416',
      data: '30/05/2024'
    }
  ];

  return (
    <View style={{flex:1}}> 
      <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Últimas Detecções</Text>
            {ultimasDeteccoes.map((detecao, index) => (
            <View key={index} style={styles.detecao}>
                <Text style={styles.especie}>{detecao.especie}</Text>
                <Text style={styles.localizacao}>{detecao.localizacao}</Text>
                <Text style={styles.data}>{detecao.data}</Text>
            </View>
            ))}
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver todas as detecções</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionText}>Funcionalidades</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Identificação de Espécies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Relatórios</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  headerText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  detecao: {
    marginBottom: 10,
  },
  especie: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  localizacao: {
    fontSize: 14,
  },
  data: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  sectionText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  }
});


