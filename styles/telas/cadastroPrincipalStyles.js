
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center'
    },
    card: {
      width: 400,
      height: 220,
      marginBottom: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      overflow: 'hidden',
    },
    imageBackground: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    cardText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      padding: 10,
      borderRadius: 5,
    },
  });
  