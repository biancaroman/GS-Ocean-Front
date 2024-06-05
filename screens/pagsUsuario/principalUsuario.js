import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Navbar from '../../components/NavBarPrincipal';
import { styles } from '../../styles/principalApp/principalUsuarioStyles';

export default function PrincipalUsuario() {

    const showLinks = {
        identificarEspecies: true,
        especiesAmeacadas: false,
        geolocalizacao: true,
        administração: false
    };

    return (
        <View style={{flex: 1}}>
            <Navbar logoSource={require('../../assets/logos/Logo2.png')} showLinks={showLinks} />
            <ImageBackground source={require('../../assets/background/backgroundUsuario.jpg')} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>Bem-vindo Usuário</Text>
                    <Text style={styles.paragraph}>
                       O aplicativo Oceano Vivo utiliza inteligência artificial para identificar espécies marinhas automaticamente através de fotos capturadas.
                        Ajude a monitorar a biodiversidade marinha e contribua para a conservação das espécies ameaçadas.
                    </Text>
                    <Text style={styles.paragraph}>
                        Funcionalidades Principais:
                        {'\n'}- Identificação automática de espécies marinhas.
                        {'\n'}- Monitoramento de espécies em risco de extinção.
                        {'\n'}- Detecção rápida de espécies invasoras.
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}

