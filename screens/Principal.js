import React from 'react';
import { View, Text} from 'react-native';
import Navbar from '../components/NavBar';
import CustomCarousel from '../components/Carousel';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/telas/principalStyles';

const Principal = () => {
  const navigation = useNavigation();

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar logoSource={require('../assets/Logo1.png')} />
      <View style={styles.container}>
        <CustomCarousel handleCadastro={handleCadastro} />
      </View>
    </View>
  );
};

export default Principal;
