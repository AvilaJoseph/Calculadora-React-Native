import React from 'react'
import { View, Text } from 'react-native'

import { Slot } from 'expo-router'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/styles/globlal-styles';


const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if(!loaded){
    return null
  }

  return (
    <View style={GlobalStyles.background}>
      <Text>RootLayout</Text>
      <Slot/>
      <Text>Footer</Text>
      <StatusBar style='light'/>
    </View>
  )
}

export default RootLayout