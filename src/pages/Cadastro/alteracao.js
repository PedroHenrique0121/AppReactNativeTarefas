import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import { Alert, Image, KeyboardAvoidingView, Text, View } from 'react-native'
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler'

import favoritIcon from '../../assets/images/icons/heart-outline.png'
import unfavoritIcon from '../../assets/images/icons/unfavorite.png'
import whatsaapIcon from '../../assets/images/icons/whatsapp.png'
import PageHeader from '../../components/PageHeader'
import api from '../../serviços/api'

import styles from './styles'

// export interface Tarefa {
//   idTarefa: number
//   titulo: string
//   descricao: string
 
// }

// interface TarefaProps{
//   tarefa : Tarefa
// }


export default function Alteracao({ route, navigation }) {
  const { id,tit,desc } = route.params;
  const [descricao, setDesc] = useState(desc);
  const [titulo, setT] = useState(tit);
  const [idTarefa, setId] = useState(id);
  
  const {navigate} = useNavigation();
  async function RenderzarListagem() {
    
      
    navigate('Listagem',{"titulo":titulo});
  
}

 
  /* 2. Get the param */


  const data= { idTarefa ,titulo, descricao }

  async function alterar(id, body){
         

         try{
          await api.put(`/alterarTarefa/${id}`,body).then(()=>{
            Alert.alert("Tarefa Alterada com sucesso!");
            RenderzarListagem()
          })
        
         }
         catch(error){
          Alert.alert("Houve um erro na tentativa de alteração!")
         }
  }
  return (
    <View style={styles.container}>
    <PageHeader
      title="Edição de Tarefa"
      headerRight={(
        <RectButton
          onPress={RenderzarListagem}
          style={styles.novaTarefaBotao}
        >
          <Text style={styles.novaTrefaText}>
            Listar
          </Text>
        </RectButton>
      )}
    >

      <ScrollView
        style={{
          marginTop: 30,
          marginBottom: 30
        }}
      >
        <KeyboardAvoidingView
          contentContainerStyle={styles.form}
          behavior="position"
          enabled
        >
          <Text style={styles.label}>Identificador</Text>
          <TextInput
            value={JSON.stringify(id)}
            onChangeText={text => setId(text)}

            style={styles.inputID}
            placeholder="Digite um novo titulo"
          />

          <Text style={styles.label}>Titulo</Text>
          <TextInput
            value={titulo}
            onChangeText={text => setT(text)}

            style={styles.input}
            placeholder="Digite um novo titulo"
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            value={descricao}
            onChangeText={text => setDesc(text)}

            style={styles.input}
            placeholder="Descreva uma tarefa..."
          />



          <RectButton
            onPress={()=>{alterar(idTarefa,data)}}
            style={styles.novaTarefaBotao}
          >
            <Text style={styles. novaTrefaText}>
              Alterar Tarefa
          </Text>


          </RectButton>
        </KeyboardAvoidingView>
      </ScrollView>
    </PageHeader>
  </View>
  );
}
