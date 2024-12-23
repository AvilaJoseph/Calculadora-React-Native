import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { GlobalStyles } from '@/styles/globlal-styles'
import * as Haptics from 'expo-haptics';


interface Props{
    label: string
    color?: string
    blackText?: boolean
    doubleSize?: boolean
    onPress: () => void
}

const CalculatorButton = ({
    label, 
    color = Colors.darkGray, 
    blackText = false, 
    doubleSize = false,
    onPress
}: Props) => {
  return (
    <Pressable
  style={({ pressed }) => [
    GlobalStyles.button,
    { backgroundColor: color, 
      opacity: pressed ? 0.8 : 1,
      width: doubleSize ? 180 : 80
    },
  ]}
  onPress={() => {
    Haptics.selectionAsync(),
    onPress()
  }}
>
  <Text
    style={[
      GlobalStyles.buttonText,
      { color: blackText ? 'black' : 'white' },
    ]}
  >
    {label}
  </Text>
</Pressable>
  )
}

export default CalculatorButton