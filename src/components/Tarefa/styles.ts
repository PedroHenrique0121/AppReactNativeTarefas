import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#333',
    
   
    overflow: 'hidden'
  },
  lista:{
    backgroundColor:"#111",
    borderBottomColor:"#dcdcdc" ,
    borderWidth :2,

    padding: 24,
    
  },
  grupoBotoes:{
    flexDirection:"row",

  },
  botoes:{
    height: 55,
    borderRadius: 8,
    justifyContent:"center",
    alignItems:"center",
    width: 80,
    backgroundColor:"#ff8c00",
    marginRight:15
  },
  titulo:{
    fontSize :20,
    color: "#fff",
    fontWeight:"bold"
  },
   descricao:{
     marginTop: 10,
    fontSize :17,
    color: "#fff",
    marginBottom: 30,
    
   },
   colorEditar:{
    backgroundColor:"#ff8c00",
    color:"#3fff"
  }
  

});

export default styles;