import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import NavbarSimples from '../../components/NavBarSimples';

export default function PerfilUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [notificacoes, setNotificacoes] = useState(false);
  const [privacidade, setPrivacidade] = useState(false);


  return (
    <View style={{flex: 1}}>
    <NavbarSimples logoSource={require('../../assets/logos/Logo2.png')} />
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Notificações</Text>
          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Privacidade</Text>
          <Switch
            value={privacidade}
            onValueChange={setPrivacidade}
          />
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
