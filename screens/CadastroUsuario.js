import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/telas/cadastrouserStyles.js';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function CadastroUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigation = useNavigation();

  const api = axios.create({
    baseURL: "https://oceanovivo-41843-default-rtdb.firebaseio.com"
  })
  

  const realizarCadastro = async () => {
    if (!validarEmail(email)) {
      ToastAndroid.show('Por favor, insira um email válido.', ToastAndroid.SHORT);
      return;
    }
    if (!validarSenha(senha)) {
      ToastAndroid.show('A senha deve ter pelo menos 8 caracteres e conter pelo menos 1 número.', ToastAndroid.SHORT);
      return;
    }
    if (!validarTelefone(telefone)) {
      ToastAndroid.show('Por favor, insira um telefone no formato (DDD)XXXXX-XXXX.', ToastAndroid.SHORT);
      return;
    }

    try {
      await api.post('/usuarios.json', {
        nome,
        email,
        telefone,
        senha, 
        tipo: 'usuario_comum' 
      });
      
      ToastAndroid.show('Usuário cadastrado com sucesso!', ToastAndroid.SHORT);
      navigation.navigate('Login');
    } catch (error) {
      ToastAndroid.show('Erro ao realizar cadastro', ToastAndroid.SHORT);
      console.error(error);
    }
  };

  const validarEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validarSenha = (senha) => {
    const senhaRegex = /^(?=.*[0-9]).{8,}$/;
    return senhaRegex.test(senha);
  };

  const validarTelefone = (telefone) => {
    const telefoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    return telefoneRegex.test(telefone);
  };

  const formatarTelefone = (texto) => {
    const limpo = texto.replace(/\D/g, '');
    let formatado = limpo;

    if (limpo.length > 2) {
      formatado = `(${limpo.slice(0, 2)})${limpo.slice(2)}`;
    }
    if (limpo.length > 7) {
      formatado = `(${limpo.slice(0, 2)})${limpo.slice(2, 7)}-${limpo.slice(7, 11)}`;
    }
    setTelefone(formatado);
  };

  return (
    <ImageBackground source={require('../assets/background/cadastroUsuarios.jpg')} style={styles.backgroundImage}>
       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Realizar Cadastro</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={setNome}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
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
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="(DDD)XXXXX-XXXX"
              value={telefone}
              onChangeText={formatarTelefone}
              keyboardType="phone-pad"
              maxLength={14}
            />
            <Text style={styles.texto}>Recomendamos fortemente adicionar um número de telefone. Isso ajudará a verificar sua conta e mantê-la segura. </Text>
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
          <TouchableOpacity style={styles.loginButton} onPress={realizarCadastro}>
            <Text style={styles.loginButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
