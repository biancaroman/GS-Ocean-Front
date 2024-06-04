import React from 'react';
import { View, Image, Pressable, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/componentes/navbarPrincipalStyles';


export default function NavbarSimples ({ logoSource }) {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Pressable style={styles.menuButton} onPress={handleBackPress}>
          <FontAwesomeIcon icon={faArrowLeft} size={28} color="white" />
        </Pressable>
        <Image source={logoSource} style={styles.logo} />
        <TouchableOpacity style={styles.bellIcon}>
          <FontAwesomeIcon icon={faBell} size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
