import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#111',
    padding: 40,
  },

  titleApp: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 55, 
    lineHeight: 70,
    maxWidth: 300,
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  banner: {
    width: '100%',
    resizeMode: 'contain'
  },
  
  title: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80
  },
  titleBold: {
    fontWeight: 'bold'
  },
  buttonsContainer: {
    
    marginTop: 40,
    
  },
  button: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    padding: 24,
    alignItems:"center",
    borderRadius: 45,

  },
  buttonPrimary: {
    backgroundColor: '#ff8c00',

  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  buttonSecondary: {
    backgroundColor: '#04d361',

  },
 
});

export default styles;