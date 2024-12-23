import { View, Text, type TextProps } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/styles/globlal-styles'

interface Props extends TextProps{
  variant?: 'h1' | 'h2'
}

const ThemeText = ({children, variant, ...rest}: Props) => {
  return (
    <View>
      <Text style={[
        {color:'white'},
        variant === 'h1' && GlobalStyles.mainResult,
        variant === 'h2' && GlobalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
      >{children}</Text>
    </View>
  )
}

export default ThemeText