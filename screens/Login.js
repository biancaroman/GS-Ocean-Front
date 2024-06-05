import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Switch, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/telas/loginStyles';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrarSenha, setLembrarSenha] = useState(false);
    const navigation = useNavigation();

    const api = axios.create({
        baseURL: "https://oceanovivo-41843-default-rtdb.firebaseio.com"
      })

    const realizarLogin = async () => {
        try {
            const response = await api.get(`/usuarios.json?orderBy="email"&equalTo="${email}"&limitToFirst=1`);
            const data = response.data;
            if (!data) {
                Alert.alert('Usuário não cadastrado');
                return;
            }
            const userId = Object.keys(data)[0];
            const userData = data[userId];
            const tipoUsuario = userData.tipo;
    
            if (tipoUsuario === 'usuario_comum') {
                navigation.navigate('PrincipalUsuario');
            } else if (tipoUsuario === 'ong') {
                navigation.navigate('PrincipalOngs');
            } else {
                Alert.alert('Usuário não cadastrado');
            }
        } catch (error) {
            Alert.alert('Erro ao realizar login');
            console.error(error);
        }
    };

    const handleCadastro = () => {
        navigation.navigate('Cadastro');
    };

    const esqueceuSenha = () => {
        navigation.navigate('Senha');
    };

    const validarEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Por favor, insira um email válido.'); 
            return;
        }
        realizarLogin();
    };

    const validarSenha = (senha) => {
        const senhaRegex = /^(?=.*[0-9]).{8,}$/;
        return senhaRegex.test(senha);
    };

    return (
        <ImageBackground source={require('../assets/background/backgroundLogin.jpg')} style={styles.backgroundImage}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email ou número de telefone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={validarEmail}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Switch
                            value={lembrarSenha}
                            onValueChange={(novoValor) => setLembrarSenha(novoValor)}
                            style={styles.switch}
                        />
                        <Text style={styles.checkbox}>Lembrar senha</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={esqueceuSenha}>
                            <Text style={styles.link}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleCadastro} style={styles.signupLink}>
                            <Text style={styles.signupText}>Não tem uma conta? Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
