import React, { useState, useRef } from 'react';
import { View, Image, Pressable, Modal, TouchableOpacity, Text, Animated, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faTimes, faChartLine, faClipboardList, faBullhorn, faPlug, faCog, faLightbulb, faSignOutAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/componentes/navbarPrincipalStyles';
import logoModal from '../assets/logos/Logo1.png';

const screenWidth = Dimensions.get('window').width;

export default function Navbar ({ logoSource, showLinks }) {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;
  const [activeScreen, setActiveScreen] = useState('');

  const handleMenuPress = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: -screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  };

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
    setActiveScreen(screenName);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Pressable style={styles.menuButton} onPress={handleMenuPress}>
          <FontAwesomeIcon icon={faBars} size={28} color="white" />
        </Pressable>
        <Image source={logoSource} style={styles.logo} />
        <TouchableOpacity style={styles.bellIcon}>
          <FontAwesomeIcon icon={faBell} size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closeModal}
      >
        <View style={styles.menuModalBackground}>
          <Animated.View style={[styles.menuModal, { transform: [{ translateX: slideAnim }] }]}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <FontAwesomeIcon icon={faTimes} size={24} color="gray" />
            </TouchableOpacity>
            <Image source={logoModal} style={styles.logoModal} />
            <View style={styles.links}>
              <TouchableOpacity onPress={() => handleNavigation('Dashboard')}>
                <Text style={[styles.menuItem, activeScreen === 'Dashboard' ? styles.activeItem : null, activeScreen === 'Dashboard' ? { color: '#4c9ece' } : null]}>
                  <FontAwesomeIcon icon={faChartLine} size={18} color={activeScreen === 'Dashboard' ? '#4c9ece' : '#595683'} /> {'  '} Dashboard
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('Relatorios')}>
                <Text style={[styles.menuItem, activeScreen === 'Relatorios' ? styles.activeItem : null, activeScreen === 'Relatorios' ? { color: '#4c9ece' } : null]}>
                  <FontAwesomeIcon icon={faClipboardList} size={18} color={activeScreen === 'Relatorios' ? '#4c9ece' : '#595683'} /> {'  '} Relatórios
                </Text>
              </TouchableOpacity>
              {showLinks.identificarEspecies && (
                <TouchableOpacity onPress={() => handleNavigation('IdentificacaoEspecies')}>
                  <Text style={[styles.menuItem, activeScreen === 'IdentificarEspecies' ? styles.activeItem : null, activeScreen === 'IdentificarEspecies' ? { color: '#4c9ece' } : null]}>
                    <FontAwesomeIcon icon={faBullhorn} size={18} color={activeScreen === 'IdentificarEspecies' ? '#4c9ece' : '#595683'} /> {'  '} Identificar Espécies
                  </Text>
                </TouchableOpacity>
              )}
              {showLinks.especiesAmeacadas && (
                <TouchableOpacity onPress={() => handleNavigation('EspeciesAmeacadas')}>
                  <Text style={[styles.menuItem, activeScreen === 'EspeciesAmeacadas' ? styles.activeItem : null, activeScreen === 'EspeciesAmeacadas' ? { color: '#4c9ece' } : null]}>
                    <FontAwesomeIcon icon={faPlug} size={18} color={activeScreen === 'EspeciesAmeacadas' ? '#4c9ece' : '#595683'} /> {'  '} Espécies Ameaçadas
                  </Text>
                </TouchableOpacity>
              )}
              {showLinks.geolocalizacao && (
                <TouchableOpacity onPress={() => handleNavigation('Geolocalizacao')}>
                  <Text style={[styles.menuItem, activeScreen === 'Geolocalizacao' ? styles.activeItem : null, activeScreen === 'Geolocalizacao' ? { color: '#4c9ece' } : null]}>
                    <FontAwesomeIcon icon={faCog} size={18} color={activeScreen === 'Geolocalizacao' ? '#4c9ece' : '#595683'} /> {'  '} Geolocalização
                  </Text>
                </TouchableOpacity>
              )}
              {showLinks.administração && (
                <TouchableOpacity onPress={() => handleNavigation('Administracao')}>
                  <Text style={[styles.menuItem, activeScreen === 'Administracao' ? styles.activeItem : null, activeScreen === 'Administracao' ? { color: '#4c9ece' } : null]}>
                    <FontAwesomeIcon icon={faCog} size={18} color={activeScreen === 'Administracao' ? '#4c9ece' : '#595683'} /> {'  '} Administração
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => handleNavigation('Blog')}>
                <Text style={[styles.menuItem, activeScreen === 'Blog' ? styles.activeItem : null, activeScreen === 'Blog' ? { color: '#4c9ece' } : null]}>
                  <FontAwesomeIcon icon={faLightbulb} size={18} color={activeScreen === 'Blog' ? '#4c9ece' : '#595683'} /> {'  '} Blog
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handleNavigation('Principal')}>
              <Text style={styles.sairApp}>
                <FontAwesomeIcon icon={faSignOutAlt} size={20} color="black" /> {' '} Sair do APP
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};
