import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { GlobalStyles } from '@/styles/globlal-styles'


interface Props{
    label: string
    color: string
    blackText?: boolean
    onPressed: () => void
}

const CalculatorButton = ({
    label, 
    color = Colors.darkGray, 
    blackText, 
    onPressed}: Props) => {
  return (
    <Pressable style={{...GlobalStyles.button}}
    onPress={onPressed}
    >
        <Text style={{
            ...GlobalStyles.buttonText,
            color : blackText ? 'black' : 'white'
        }
        }
        onPress={onPressed}
        >
            {label}
        </Text>
    </Pressable>
  )
}

export default CalculatorButton