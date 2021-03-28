import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  },
  form: {
    marginBottom: 24
  },
  label: {
    color: '#fff'
  },
  inputID: {
    height: 54,
    backgroundColor: '#B3E5FC',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },
  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },
  novaTarefaBotao: {
    backgroundColor: '#ff8c00',
    flex: 1,
    height: 58,
    borderRadius: 115,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 1,
    marginTop: 15,
  },
  novaTrefaText: {
    justifyContent: "center",
    color: '#fff',
    fontWeight: 'bold',
  },

  botaoCadastrar:{
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 9,
  }
})

export default styles;