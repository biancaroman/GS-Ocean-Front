import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import NavbarSimples from '../../components/NavBarSimples';
import { styles } from '../../styles/linksNavPrincipal/especiesAmeacadasStyles';

const especiesAmeacadas = [
  {
    id: '1',
    nome: 'Tartaruga Verde',
    habitat: 'Oceano Atlântico e Oceano Pacífico',
    motivosDeAmeaca: 'Poluição, pesca predatória, destruição do habitat',
    medidasDeConservacao: 'Programas de proteção de ninhos, áreas protegidas',
    imagem: require('../../assets/blog/tartarugaCouro.jpeg')
  },
  {
    id: '2',
    nome: 'Golfinho do Rio Yangtze',
    habitat: 'Rio Yangtze, China',
    motivosDeAmeaca: 'Poluição, pesca predatória, construção de represas',
    medidasDeConservacao: 'Programas de proteção de habitat, educação ambiental',
    imagem: require('../../assets/blog/tartarugaCouro.jpeg')
  },
  {
    id: '3',
    nome: 'Gorila das Montanhas',
    habitat: 'Florestas tropicais da África Central',
    motivosDeAmeaca: 'Desmatamento, caça ilegal, doenças',
    medidasDeConservacao: 'Proteção de habitat, ações de conscientização',
    imagem: require('../../assets/blog/tartarugaCouro.jpeg')
  },
  {
    id: '4',
    nome: 'Rinoceronte-de-java',
    habitat: 'Florestas tropicais e savanas da Indonésia e Vietnã',
    motivosDeAmeaca: 'Caça ilegal, perda de habitat',
    medidasDeConservacao: 'Programas de proteção, fiscalização rigorosa',
    imagem: require('../../assets/blog/tartarugaCouro.jpeg')
  },
];

export default function EspeciesAmeacadas() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEspecie, setSelectedEspecie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const showEspecieDetails = (especie) => {
    setSelectedEspecie(especie);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => showEspecieDetails(item)}>
      <Text style={styles.nomeEspecie}>{item.nome}</Text>
    </TouchableOpacity>
  );

  const filteredEspecies = especiesAmeacadas.filter(especie =>
    especie.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
      <View style={styles.container}>
        <Text style={styles.titulo}>Espécies Ameaçadas</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar espécie..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Ionicons name="search" size={24} color="gray" />
        </View>
        <FlatList
          data={filteredEspecies}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.lista}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedEspecie?.nome}</Text>
              <Image source={selectedEspecie?.imagem} style={styles.modalImagem} />
              <Text style={styles.modalInfo}><Text style={styles.boldText}>Habitat:</Text> {selectedEspecie?.habitat}</Text>
              <Text style={styles.modalInfo}><Text style={styles.boldText}>Motivos de Ameaça:</Text> {selectedEspecie?.motivosDeAmeaca}</Text>
              <Text style={styles.modalInfo}><Text style={styles.boldText}>Medidas de Conservação:</Text> {selectedEspecie?.medidasDeConservacao}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.fecharModal}>
                <Text style={styles.fecharModalText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

