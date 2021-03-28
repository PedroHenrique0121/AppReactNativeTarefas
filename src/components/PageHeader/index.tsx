import React, { ReactNode } from 'react'
import { Image, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'

import styles from './styles'

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;

}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Text style={styles.titleLogo}>Tarefas</Text>
      </View>

      <View style={styles.header}>

        <Text style={styles.titleProfs}>{title}</Text>
        {headerRight}
        
      </View>
      {children}
    </View>
  )
}


export default PageHeader