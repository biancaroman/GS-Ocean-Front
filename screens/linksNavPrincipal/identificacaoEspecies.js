import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';
import { styles } from '../../styles/linksNavPrincipal/identificacaoEspeciesStyles';

export default function IdentificacaoEspecies() {
  const [result, setResult] = useState(null);
  const [recentIdentifications, setRecentIdentifications] = useState([
    {
      id: 1,
      photoUri: require('../../assets/blog/polvoMimico.jpeg'),
      speciesName: 'Polvo Mimico',
      conservationStatus: 'Vulnerável'
    },
    {
      id: 2,
      photoUri: require('../../assets/blog/peixePalhaco.png'),
      speciesName: 'Peixe Palhaço',
      conservationStatus: 'Em perigo'
    }
  ]);

  return (
    <View style={{ flex: 1 }}>
      <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
      <View style={styles.container}>
        <Text style={styles.title}>Identificação de Espécies</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Fazer Upload de Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Gravar Vídeo</Text>
          </TouchableOpacity>
        </View>
  
        <TouchableOpacity style={styles.identifyButton}>
          <Text style={styles.buttonText}>Identificar</Text>
        </TouchableOpacity>
        {result && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Nome da Espécie: {result.speciesName}</Text>
            <Text style={styles.resultText}>Descrição: {result.description}</Text>
            <Text style={styles.resultText}>Status de Conservação: {result.conservationStatus}</Text>
          </View>
        )}
        <Text style={styles.recentIdentificationsTitle}>Identificações Recentes</Text>
        <View style={styles.recentIdentificationsContainer}>
          {recentIdentifications.map(identification => (
            <View key={identification.id} style={styles.identificationItem}>
              <Image source={identification.photoUri} style={styles.identificationImage} />
              <View style={styles.identificationInfo}>
                <Text style={styles.speciesName}>{identification.speciesName}</Text>
                <Text style={styles.conservationStatus}>Status de Conservação: {identification.conservationStatus}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}




