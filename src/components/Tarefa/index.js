import React, { useEffect, useState } from 'react'
import { Text, View} from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { useNavigation, useFocusEffect, useIsFocused, useRoute } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import DevItem from '../../components/Tarefa'

import styles from './styles'
import Tarefas, { Tarefa } from '../../components/Tarefa'
import api from '../../serviços/api'
import { Alert } from 'react-native'
import { ActivityIndicator } from 'react-native'

export default function Item({ti}) {


const titulo  = ti;
  function verificar() {
    // await api.get("/tarefas").then(response => {
    //   setTarefa(response.data);
    //   console.log(response.data)

    // })

    Alert.alert(data)
  }

  // verificar()
  const { navigate } = useNavigation()
  const [tarefas, setTarefa] = useState([]);
  const [tit, setTit] = useState("")
  const [loading, setLoading] = useState(true)
  async function deletar(id) {

    await api.delete(`/deletarTarefa/${id}`);
    await api.get("/tarefas").then(response => {
      setTarefa(response.data);
      Alert.alert("Excluido com sucesso!")

    })

  }
  function renderizarCadastro() {
    navigate('Tarefas')
  }


  useEffect(() => {
    api.get("/tarefas").then(response => {
      setTit(titulo)
      setTarefa(response.data);
      setLoading(false)
      
    })
  }, [tit]);

  if (loading) {
    return (
        <View style={styles.carregamento}>
        <ActivityIndicator   size="large" color="#ff8c00" />

        <Text style={styles.textCarregamento} > Aguardando resposta do servidor...</Text>
        </View>
      )

  
  } 
  if (tarefas.length===0) {
    return (
        <View style={styles.vazio}>
      

        <Text style={styles.textVazio} >Nenhuma tarefa cadastrada !</Text>
        </View>
      )

  
  }
  
  else {
    return (

           <ScrollView >
          {



            tarefas.map((tarefa) => {




              return (<View style={styles.container1}>


                <View style={styles.lista}>
                  <View>

                    <Text style={styles.titulo}>{tarefa.titulo}</Text>
                    <Text style={styles.descricao}>{tarefa.descricao}</Text>
                  </View>

                  <View style={styles.grupoBotoes}>
                    <RectButton onPress={() =>{setLoading(false), navigate('Alterar', { "id": tarefa.idTarefa, "desc": tarefa.descricao, "tit": tarefa.titulo }) }} style={[styles.botoes, styles.colorEditar]}>
                      <Text>Editar</Text>
                    </RectButton>
                    <RectButton onPress={() => deletar(tarefa.idTarefa)} style={styles.botoes}>
                      <Text>Excluir</Text>
                    </RectButton>
                  </View>

                </View>
                {/* navegar('Detalhes', { itemId:   86, outroParam:   "qualquer coisa que você quiser aqui", }); */}

              </View>)
            })

          }

        </ScrollView>

     
    )
  }

}

