import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Navbar from '../../components/NavBarPrincipal';
import { styles } from '../../styles/principalApp/principalOngsStyles';

export default function PrincipaOngs() {

    const showLinks = {
        identificarEspecies: false,
        especiesAmeacadas: true,
        geolocalizacao: true,
        administração: false
    };

    return (
        <View style={{flex: 1}}>
            <Navbar logoSource={require('../../assets/logos/Logo2.png')} showLinks={showLinks} />
            <ImageBackground source={require('../../assets/background/backgroundOngs.webp')} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>Bem-vindo, ONG!</Text>
                    <Text style={styles.paragraph}>
                    O aplicativo Oceano Inteligente utiliza inteligência artificial para identificar espécies marinhas automaticamente através de fotos capturadas.
                    Auxilie no monitoramento da biodiversidade marinha e na conservação de espécies ameaçadas.
                    </Text>
                    <Text style={styles.paragraph}>
                    Funcionalidades Principais para ONGs:
                  {'\n'}- Monitoramento de espécies.
                  {'\n'}- Relatórios automáticos e personalizados.
                  {'\n'}- Detecção rápida de espécies invasoras.
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}


