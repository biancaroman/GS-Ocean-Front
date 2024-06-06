import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#262250'
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
      color: 'white'
    },
    purpose: {
      marginBottom: 10,
      color: 'white'
    },
    section: {
      marginBottom: 20,
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 20
    },
    subheading: {
      fontWeight: 'bold',
      marginBottom: 15,
      color: 'white'
    },
    listItem: {
      marginLeft: 10,
      marginBottom: 5,
      color: 'rgba(255, 255, 255, 0.8)',
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    button: {
      padding: 5,
      borderRadius: 5,
      borderWidth: 2,
      marginLeft: 9,
      marginBottom: 6
    },
    buttonText: {
      color: 'white',
    },
  });
  