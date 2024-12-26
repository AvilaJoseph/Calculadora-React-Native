import React from 'react'
import { View, Text } from 'react-native'

import { Colors } from '@/constants/Colors'
import { GlobalStyles } from '@/styles/globlal-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { useCalculator } from '@/hooks/useCalculator'

const index = () => {

  const {
    formula, 
    buildNumber, 
    number, 
    Reset, 
    toggleSign, 
    del,
    previusNumber, 
    addOperation, 
    substrackOperation,
    multiplyOperation,
    divideOperation,
    calculateResult,
    calculareSubResult
  } = useCalculator()

  return (
    <View style={GlobalStyles.CalculatorContainer}>
      <View style={{paddingHorizontal:30,marginBottom:20}}>
      <ThemeText variant='h1'>{formula}</ThemeText>

      {
        formula === previusNumber ? (
          <ThemeText variant='h2'> </ThemeText>
        ) : <ThemeText variant='h2'>{previusNumber}</ThemeText>
      }

      

      {/* Ahora vienen la estructura de los botones*/}

      <View style={GlobalStyles.row}>
        <CalculatorButton
        color={Colors.lightGray}
        blackText
        label='C' 
        onPress={() => Reset()}/>

        <CalculatorButton
        color={Colors.lightGray}
        blackText
        label='+/-' 
        onPress={() => toggleSign()}/>

        <CalculatorButton
        color={Colors.lightGray}
        blackText
        label='del' 
        onPress={() => del()}/>

        <CalculatorButton
        color={Colors.orange}
        label='/' 
        onPress={() => divideOperation()}/>
      </View>

      <View style={GlobalStyles.row}>
        <CalculatorButton
        label='7' 
        onPress={() => buildNumber('7')}/>

        <CalculatorButton
        label='8' 
        onPress={() => buildNumber('8')}/>

        <CalculatorButton
        label='9' 
        onPress={() => buildNumber('9')}/>

        <CalculatorButton
        color={Colors.orange}
        label='x' 
        onPress={() => multiplyOperation()}/>
      </View>

      <View style={GlobalStyles.row}>
        <CalculatorButton
        label='4' 
        onPress={() => buildNumber('4')}/>

        <CalculatorButton
        label='5' 
        onPress={() => buildNumber('5')}/>

        <CalculatorButton
        label='6' 
        onPress={() => buildNumber('6')}/>

        <CalculatorButton
        color={Colors.orange}
        label='-' 
        onPress={() => substrackOperation()}/>
      </View>

      <View style={GlobalStyles.row}>
        <CalculatorButton
        label='1' 
        onPress={() => buildNumber('1')}/>

        <CalculatorButton
        label='2' 
        onPress={() => buildNumber('2')}/>

        <CalculatorButton
        label='3' 
        onPress={() => buildNumber('3')}/>

        <CalculatorButton
        color={Colors.orange}
        label='+' 
        onPress={() => addOperation()}/>
      </View>

      <View style={GlobalStyles.row}>
        <CalculatorButton
        label='0' 
        doubleSize
        onPress={() => buildNumber('0')}/>

        <CalculatorButton
        label='.' 
        onPress={() => buildNumber('.')}/>

        <CalculatorButton
        color={Colors.orange}
        label='=' 
        onPress={() => calculateResult()}/>
      </View>

      </View>
    </View>
  )
}

export default index