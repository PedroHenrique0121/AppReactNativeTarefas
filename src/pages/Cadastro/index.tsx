import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"

import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Button, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'

import styles from './styles'
import api from '../../serviços/api'

function Cadastro() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const { navigate } = useNavigation();

  async function cadastrar(data: any) {

      
    await api.post("/cadastrar", data);

    Alert.alert("Tarefa cadastrada!")
    RenderzarListagem()
  }
  function RenderzarListagem() {
    navigate('Listagem')
  }
  const data = { titulo, descricao }


  

  return (
    <View style={styles.container}>
      <PageHeader
        title="Cadastre uma nova Tarefa!"
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
            <Text style={styles.label}>Titulo</Text>
            <TextInput
              value={titulo}
              onChangeText={text => setTitulo(text)}

              style={styles.input}
              placeholder="Digite um novo titulo"
            />
             
            <Text style={styles.label}>Descrição</Text>
            <TextInput
               value={descricao}
              onChangeText={text => setDescricao(text)}

              style={styles.input}
              placeholder="Descreva uma tarefa..."
            />



            <RectButton
              onPress={()=>{
                if(data.descricao==="" || data.titulo===""){
                    Alert.alert("Existem alguns campos que não foram preeenchidos!")
                }else{
                  cadastrar(data)
                }
                }}
              style={styles.novaTarefaBotao}
            >
              <Text style={styles.novaTrefaText}>
                Add nova Tarefa
            </Text>


            </RectButton>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageHeader>
    </View>
  )


}

export default Cadastro