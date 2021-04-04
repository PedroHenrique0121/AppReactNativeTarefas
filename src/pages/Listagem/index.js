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
import Item from '../../components/Tarefa'

export default function Listagem({ route, navigation }) {


  const { titulo } = route.params;;
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
      console.log(response.data)
    })
  }, [titulo]);

  // if (loading) {
  //   return (
  //     <View style={styles.carregamento} >
  //       <ActivityIndicator   size="large" color="f1c40f" />

        
  //       <Text >Carregando...</Text>
  //     </View>)
  // } else {
    return (

      <View

        style={styles.container}>
        <PageHeader
          title="Sua lista de tarefas"
          headerRight={(
            <RectButton
              onPress={renderizarCadastro}
              style={styles.botao}
            >
              <Text style={styles.text}>
                add +
              </Text>
            </RectButton>
          )}
        />

        <Item titulo={titulo}></Item>

      </View>
    )
  }

