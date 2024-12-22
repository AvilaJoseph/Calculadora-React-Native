import React from 'react'
import { View, Text } from 'react-native'

import { Colors } from '@/constants/Colors'
import { GlobalStyles } from '@/styles/globlal-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'

const index = () => {
  return (
    <View style={GlobalStyles.CalculatorContainer}>
      <View style={{paddingHorizontal:30,marginBottom:20}}>
      <ThemeText variant='h1'>25x25</ThemeText>
      <ThemeText variant='h2'>2500</ThemeText>

      {/* Ahora vienen la estructura de los botones*/}

      <View style={GlobalStyles.row}>
        <CalculatorButton
        color={Colors.lightGray}
        blackText 
        label='C' 
        onPressed={() => console.log(1)}/>

        <CalculatorButton
        color={Colors.lightGray}
        blackText 
        label='+/-' 
        onPressed={() => console.log('1')}/>

        <CalculatorButton
        color={Colors.lightGray}
        blackText 
        label='del' 
        onPressed={() => console.log(1)}/>

        <CalculatorButton
        color={Colors.lightGray}
        blackText 
        label='%' 
        onPressed={() => console.log(1)}/>

      </View>

      </View>
    </View>
  )
}

export default index