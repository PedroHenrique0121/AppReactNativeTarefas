import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#111'

  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  titleLogo: {
    fontSize: 16,
    maxWidth: 60,
    fontWeight: 'bold',
    color: '#fff'
  },
  titleProfs: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 25,
  }
  
})


export default styles;