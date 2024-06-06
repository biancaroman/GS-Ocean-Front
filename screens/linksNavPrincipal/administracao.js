import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';
import axios from 'axios'; 


export default function Administracao(){

  const api = axios.create({
    baseURL: "https://oceanovivo-41843-default-rtdb.firebaseio.com"
  });

  const [ongs, setOngs] = useState({});

  useEffect(() => {
    api.get('/ongs.json')
      .then(response => {
        setOngs(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter lista de ONGs:', error);
      });
  }, []);

  const handleEditUser = (userId) => {
    alert(`Editar usuário com ID ${userId}`);
  }

  const handleDeleteUser = (userId) => {
    alert(`Excluir usuário com ID ${userId}`);
  }

  const handleApproveONG = (ongId) => {
    api.put(`/ongs/${ongId}.json`, { aprovado: true })
      .then(response => {
        alert(`ONG aprovada com sucesso!`);
      })
      .catch(error => {
        alert(`Erro ao aprovar a ONG: ${error.message}`);
      });
  }

  const handleRejectONG = (ongId) => {
    api.delete(`/ongs/${ongId}.json`)
      .then(response => {
        const updatedOngs = { ...ongs };
        delete updatedOngs[ongId];
        setOngs(updatedOngs);
        alert(`ONG rejeitada e removida com sucesso!`);
      })
      .catch(error => {
        alert(`Erro ao rejeitar a ONG: ${error.message}`);
      });
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
      <ScrollView>
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
          {Object.keys(ongs).map(ongId => (
            <View key={ongId} style={styles.itemContainer}>
              <Text style={styles.listItem}>{ongs[ongId].nome}</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => handleApproveONG(ongId)} style={styles.button}>
                  <Text style={styles.buttonText}>Aprovar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRejectONG(ongId)} style={styles.button}>
                  <Text style={styles.buttonText}>Rejeitar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
      </ScrollView> 
    </View>
  );
};

