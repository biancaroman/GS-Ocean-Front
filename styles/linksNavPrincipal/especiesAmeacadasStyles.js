import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#262250',
      alignItems: 'center',
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
      color: 'white'
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor: 'white'
    },
    searchInput: {
      flex: 1,
      height: 40,
    },
    lista: {
      flex: 1,
    },
    itemContainer: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    nomeEspecie: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    modalImagem: {
      width: '100%',
      height: 200,
      marginBottom: 10,
      borderRadius: 10,
    },
    modalInfo: {
      marginBottom: 10,
    },
    boldText: {
      fontWeight: 'bold',
    },
    fecharModal: {
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      alignSelf: 'center',
      marginTop: 10,
    },
    fecharModalText: {
      textAlign: 'center',
    },
  });
  