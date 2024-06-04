import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Navbar from '../../components/NavBarPrincipal';

export default function PrincipaAdm() {

    const showLinks = {
        identificarEspecies: true,
        especiesAmeacadas: false,
        geolocalizacao: false,
        administração: false
    };

    return (
        <View style={{flex: 1}}>
            <Navbar logoSource={require('../../assets/logos/Logo2.png')} showLinks={showLinks} />
            <ImageBackground source={require('../../assets/background/backgroundAdm.jpg')} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>Bem-vindo, Administrador!</Text>
                    <Text style={styles.paragraph}>
                    O aplicativo Oceano Inteligente utiliza inteligência artificial para identificar espécies marinhas automaticamente através de fotos capturadas.
        Gerencie usuários, ONGs e monitoramentos para contribuir na conservação de espécies marinhas.
                    </Text>
                    <Text style={styles.paragraph}>
                    Funcionalidades Principais para Administradores:
                    {'\n'}- Gerenciamento de usuários e ONGs.
                    {'\n'}- Monitoramento de detecções.
                    {'\n'}- Configurações do sistema.
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        
    },
    container: {
        flex: 1,
        padding: 20,

        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'white'
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 50,
        color: 'white'
    },
});

