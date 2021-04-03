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

  if (loading) {
    return (
      <View style={styles.carregamento} >
        <ActivityIndicator   size="large" color="f1c40f" />

        
        <Text >Carregando...</Text>
      </View>)
  } else {
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

        <ScrollView

          onTouchStart={() => {

            api.get("/tarefas").then(response => {
              setTarefa(response.data);

            })
          }}

        >
          {



            tarefas.map((tarefa) => {




              return (<View style={styles.container1}>


                <View style={styles.lista}>
                  <View>

                    <Text style={styles.titulo}>{tarefa.titulo}</Text>
                    <Text style={styles.descricao}>{tarefa.descricao}</Text>
                  </View>

                  <View style={styles.grupoBotoes}>
                    <RectButton onPress={() => navigate('Alterar', { "id": tarefa.idTarefa, "desc": tarefa.descricao, "tit": tarefa.titulo })} style={[styles.botoes, styles.colorEditar]}>
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

      </View>
    )
  }

}

