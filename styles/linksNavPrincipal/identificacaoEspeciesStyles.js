import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#262250'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20, 
      color: 'white'
    },
    buttonContainer: {
      flexDirection: 'column',
      marginBottom: 20
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center'

    },
    identifyButton: {
      backgroundColor: '#28a745',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
      marginBottom: 20
    },
    resultContainer: {
      marginTop: 20,
      backgroundColor: '#f8f9fa',
      padding: 10,
      borderRadius: 5
    },
    resultText: {
      fontSize: 16,
      marginBottom: 5
    },
    recentIdentificationsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 40,
      marginBottom: 40,
      color: 'white'
    },
    recentIdentificationsContainer: {
      width: '100%'
    },
    identificationItem: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 20
    },
    identificationImage: {
      width: 100,
      height: 100,
      borderRadius: 10
    },
    identificationInfo: {
      marginLeft: 10,
      width: '60%',
      
    },
    speciesName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    },
    conservationStatus: {
      fontSize: 14,
      color: 'white'
    }
  });