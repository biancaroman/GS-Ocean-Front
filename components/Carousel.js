import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from '../styles/componentes/carouselStyles';

const CarouselItem = ({ item, handleCadastro }) => (
  <ImageBackground source={item.background} style={styles.imageBackground}>
    <View style={styles.overlay}>
      <Image source={item.logo} style={styles.logo} />
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>FAÇA PARTE</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

export default function CustomCarousel ({ handleCadastro }) {
  const carouselItems = [
    {
      background: require('../assets/background1.jpg'),
      logo: require('../assets/Logo2.png'),
      text: 'Bem-vindo ao Oceano Vivo: \n A tecnologia que protege a vida marinha.',
    },
    {
      background: require('../assets/background2.jpg'),
      logo: require('../assets/Logo2.png'),
      text: 'Junte-se a LeadTech na missão de proteger nossos oceanos.',
    },
    {
      background: require('../assets/background3.jpg'),
      logo: require('../assets/Logo2.png'),
      text: 'Junte-se a LeadTech na missão de proteger nossos oceanos.',
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        showsPagination={false}
        loop={true}
        autoplay={true}
        autoplayTimeout={5}
      >
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} item={item} handleCadastro={handleCadastro} />
        ))}
      </Swiper>
    </View>
  );
};


