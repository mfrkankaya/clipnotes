import React from 'react'
import { View } from 'react-native'

const Container = ({ style = {}, ...props }) => (
  <View style={{ paddingHorizontal: 24, width: '100%', ...style }} {...props} />
)

export default Container
