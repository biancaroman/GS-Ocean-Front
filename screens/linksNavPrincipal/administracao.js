import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';

export default function Administracao(){

  const handleEditUser = (userId) => {
    alert(`Editar usuário com ID ${userId}`);
  }

  const handleDeleteUser = (userId) => {
    alert(`Excluir usuário com ID ${userId}`);
  }

  const handleApproveONG = (ongId) => {
    alert(`Aprovar cadastro da ONG com ID ${ongId}`);
  }

  const handleRejectONG = (ongId) => {
    alert(`Rejeitar cadastro da ONG com ID ${ongId}`);
  }

  const handleEditSpecies = (speciesId) => {
    alert(`Editar espécie com ID ${speciesId}`);
  }

  const handleDeleteSpecies = (speciesId) => {
    alert(`Excluir espécie com ID ${speciesId}`);
  }

  const handleEditCategory = (categoryId) => {
    alert(`Editar categoria com ID ${categoryId}`);
  }

  const handleDeleteCategory = (categoryId) => {
    alert(`Excluir categoria com ID ${categoryId}`);
  }

  return (
    <View style={{flex:1}}> 
      <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
      <View style={styles.container}>
        <Text style={styles.heading}>Administração</Text>
        <Text style={styles.purpose}>Propósito: Gerenciar usuários, ONGs e dados do nosso sistema.</Text>
        <View style={styles.section}>
          <Text style={styles.subheading}>Lista de usuários cadastrados:</Text>
          <View style={styles.itemContainer}>
            <Text style={styles.listItem}>Usuário 1</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => handleEditUser(1)} style={styles.button}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteUser(2)} style={styles.button}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheading}>Lista de novos cadastros de ONGs:</Text>
          <View style={styles.itemContainer}>
            <Text style={styles.listItem}>ONG 1</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => handleApproveONG(1)} style={styles.button}>
                <Text style={styles.buttonText}>Aprovar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRejectONG(1)} style={styles.button}>
                <Text style={styles.buttonText}>Rejeitar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheading}>Ferramentas para manter e atualizar o banco de dados:</Text>
          <View style={styles.itemContainer}>
            <Text style={styles.listItem}>Espécie 1</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => handleEditSpecies(1)} style={styles.button}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteSpecies(1)} style={styles.button}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.listItem}>Espécie 2</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => handleEditSpecies(2)} style={styles.button}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteSpecies(2)} style={styles.button}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.listItem}>Categoria 1</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => handleEditCategory(1)} style={styles.button}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteCategory(1)} style={styles.button}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.listItem}>Categoria 2</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => handleEditCategory(2)} style={styles.button}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteCategory(2)} style={styles.button}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>    
          </View>
        </View>
      </View>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#262250'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white'
  },
  purpose: {
    marginBottom: 10,
    color: 'white'
  },
  section: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20
  },
  subheading: {
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white'
  },
  listItem: {
    marginLeft: 10,
    marginBottom: 5,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    marginLeft: 20,
    marginBottom: 6
  },
  buttonText: {
    color: 'white',
  },
});
