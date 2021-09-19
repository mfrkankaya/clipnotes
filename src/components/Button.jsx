import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../theme'

const Button = ({ style = {}, children, ...props }) => {
  return (
    <TouchableOpacity style={{ ...styles.root, ...style }} {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.primary.shade(40),
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.text.shade(80),
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})
