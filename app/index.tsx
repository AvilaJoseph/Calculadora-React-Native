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
        onPress={() => console.log('C')}/>

        <CalculatorButton
        color={Colors.lightGray}
        blackText
        label='+/-' 
        onPress={() => console.log('+/-')}/>

        <CalculatorButton
        color={Colors.lightGray}
        blackText
        label='del' 
        onPress={() => console.log('del')}/>

        <CalculatorButton
        color={Colors.orange}
        label='%' 
        onPress={() => console.log('%')}/>
      </View>

      <View style={GlobalStyles.row}>
        <CalculatorButton
        label='7' 
        onPress={() => console.log('C')}/>

        <CalculatorButton
        label='8' 
        onPress={() => console.log('+/-')}/>

        <CalculatorButton
        label='9' 
        onPress={() => console.log('del')}/>

        <CalculatorButton
        color={Colors.orange}
        label='x' 
        onPress={() => console.log('%')}/>
      </View>

      <View style={GlobalStyles.row}>
        <CalculatorButton
        label='4' 
        onPress={() => console.log('C')}/>

        <CalculatorButton
        label='5' 
        onPress={() => console.log('+/-')}/>

        <CalculatorButton
        label='6' 
        onPress={() => console.log('del')}/>

        <CalculatorButton
        color={Colors.orange}
        label='-' 
        onPress={() => console.log('%')}/>
      </View>

      <View style={GlobalStyles.row}>
        <CalculatorButton
        label='1' 
        onPress={() => console.log('C')}/>

        <CalculatorButton
        label='2' 
        onPress={() => console.log('+/-')}/>

        <CalculatorButton
        label='3' 
        onPress={() => console.log('del')}/>

        <CalculatorButton
        color={Colors.orange}
        label='+' 
        onPress={() => console.log('%')}/>
      </View>

      <View style={GlobalStyles.row}>
        <CalculatorButton
        label='0' 
        doubleSize
        onPress={() => console.log('C')}/>

        <CalculatorButton
        label='.' 
        onPress={() => console.log('+/-')}/>

        <CalculatorButton
        color={Colors.orange}
        label='=' 
        onPress={() => console.log('del')}/>
      </View>

      </View>
    </View>
  )
}

export default index