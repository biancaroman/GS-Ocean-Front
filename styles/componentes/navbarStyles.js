import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  menuButton: {
    paddingHorizontal: 20,
    marginTop: 40
  },
  logo: {
    width: 140,
    height: 100,
    marginLeft: 10,
    marginTop:30
  },
  loginButton: {
    marginRight: 10,
    borderWidth: 2,
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 30
  },
  loginButtonText: {
    fontSize: 14,
    fontWeight: '300',
    color: 'black',
  },
  menuModalBackground: {
    flex: 1,
    flexDirection: 'row',
  },
  menuModal: {
    backgroundColor: 'white',
    padding: 50,
    width: '80%',
    height: '100%',
  },
  menuItem: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 10,
  },
  linkHome: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 10,
    marginTop: 110
  },
  closeButton: {
    position: 'absolute',
    top: 100,
    right: 20,
    zIndex: 1,
  },
});
