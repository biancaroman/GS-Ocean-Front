import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Pressable, Modal, TouchableOpacity, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/componentes/navbarStyles.js';

const Navbar = ({ logoSource, onMenuPress }) => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    if (menuVisible) {
      Animated.timing(slideAnim, {
        toValue: 0, 
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300, 
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [menuVisible, slideAnim]);

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const handleMenuPress = () => {
    setMenuVisible(!menuVisible);
  };

  const closeModal = () => {
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.menuButton} onPress={handleMenuPress}>
        <FontAwesomeIcon icon={faBars} size={24} color="black" />
      </Pressable>
      <Image source={logoSource} style={styles.logo} />
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      {menuVisible && (
        <Modal
          visible={menuVisible}
          transparent={true}
          animationType="none"
          onRequestClose={closeModal}
        >
          <Pressable style={styles.menuModalBackground} onPress={closeModal}>
            <Animated.View style={[styles.menuModal, { transform: [{ translateX: slideAnim }] }]}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <FontAwesomeIcon icon={faTimes} size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Principal');
                setMenuVisible(false);
              }}>
                <Text style={styles.linkHome}>HOME</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                navigation.navigate('QuemSomos');
                setMenuVisible(false);
              }}>
                <Text style={styles.menuItem}>QUEM SOMOS</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                navigation.navigate('FacaParte');
                setMenuVisible(false);
              }}>
                <Text style={styles.menuItem}>FAÇA PARTE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Contato');
                setMenuVisible(false);
              }}>
                <Text style={styles.menuItem}>CONTATO</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
};

export default Navbar;
