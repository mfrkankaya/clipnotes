import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { colors } from '../theme'

const Searchbar = ({
  style = {},
  placeholderTextColor = colors.text.shade(30),
  ...props
}) => {
  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  )
}

export default Searchbar

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface.shade(10),
    color: colors.text.shade(60),
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    height: 48,
    borderWidth: 1,
    borderColor: colors.surface.shade(20)
  }
})
