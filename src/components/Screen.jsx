import React from 'react'
import { View, StatusBar } from 'react-native'
import { colors } from '../theme'

const Screen = ({ style = {}, ...props }) => (
  <View
    style={{
      backgroundColor: colors.surface.shade(0),
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      ...style
    }}
    {...props}
  />
)

export default Screen
