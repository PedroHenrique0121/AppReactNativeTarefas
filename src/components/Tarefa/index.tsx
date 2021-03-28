import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import favoritIcon from '../../assets/images/icons/heart-outline.png'
import unfavoritIcon from '../../assets/images/icons/unfavorite.png'
import whatsaapIcon from '../../assets/images/icons/whatsapp.png'
import api from '../../serviços/api'

import styles from './styles'

export interface Tarefa {
  idTarefa: number
  titulo: string
  descricao: string
 
}

interface TarefaProps{
  tarefa : Tarefa
}


const  Tarefas: React.FC< TarefaProps >= ({tarefa})=>{

  const { navigate } = useNavigation()
  function handleNavigateToNewDevPage() {
    navigate('Listagem')
  }
 async  function deletar(id: any){
     
     await api.delete(`/deletarTarefa/${tarefa.idTarefa}`);
     

  }

  return (
    <View style={styles.container1}>
      
     
      <View style={styles.lista}>
            <View>
              
              <Text style={styles.titulo}>{tarefa.titulo}</Text>
              <Text style={styles.descricao}>{tarefa.descricao}</Text>
            </View>

               <View style={styles.grupoBotoes}>
                 <RectButton  style={[styles.botoes,styles.colorEditar]}>
                  <Text>Editar</Text> 
                 </RectButton>
                 <RectButton onPress={deletar} style={styles.botoes}>
                  <Text>Excluir</Text> 
                 </RectButton>
           </View>
            
      </View>

      
    </View>
  )
}


export default Tarefas