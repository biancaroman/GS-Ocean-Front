import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 80
    },
    logo: {
      width: 300,
      height: 300,
    },
    text: {
      fontSize: 18,
      fontWeight: '700',
      color: 'white',
      textAlign: 'center'
    },
    button: {
    backgroundColor: '#104477', 
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  });
  