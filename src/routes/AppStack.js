import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Listagem from "../pages/Listagem"
import Landing from '../pages/Landing'


import Cadastro from '../pages/Cadastro'
import Alteracao from '../pages/Cadastro/alteracao'

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown:  false}}>
        <Screen name="Landing" component={Landing} />
      
        <Screen name="Listagem" component={Listagem} />
        <Screen name="Tarefas" component={Cadastro} />
        <Screen name="Alterar" component={Alteracao} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack