import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#1A183F',
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 25,
  },
  logo: {
    width: 150,
    height: 45,
  },
  menuModalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuModal: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    height: '100%',
    width: '75%',
  },
  menuItem: {
    color: '#595683',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  logoModal:{
    marginLeft: 40,
    marginTop: 80,
    width: 160,
    height: 105,
  }, 
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  links: {
    marginTop: 50,
    alignItems: 'baseline'
  },
  sairApp: {
    color: 'black',
    fontSize: 18, 
    marginTop: 100
  },
  bellIcon: {
    position: 'absolute',
    right: 2,
  }
  
});