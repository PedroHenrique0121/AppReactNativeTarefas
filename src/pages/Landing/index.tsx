import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList, RectButton } from 'react-native-gesture-handler'


import styles from './styles'

// import LandingIMG from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'


function Landing() {
  const { navigate } = useNavigation();

 
  function navegarParaCadastro() {
    navigate('Tarefas')
  }
  return (
    <View style={styles.container}>

     
       


        {/* <Image source={LandingIMG} style={styles.banner} /> */}
        <Text style={styles.titleApp}>Cadastro de Tarefas</Text>

        <Text style={styles.title}>
          Seja bem-vindo! {'\n'}
          <Text style={styles.titleBold}>Vamos cadastrar uma nova tarefa?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={navegarParaCadastro}
            style={[
              styles.button,
              styles.buttonPrimary
            ]}
          >


            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>




        </View>
      
    </View>
  );
}

export default Landing;