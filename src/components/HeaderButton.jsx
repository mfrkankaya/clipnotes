import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { colors } from '../theme'

const HeaderButton = ({ style = {}, ...props }) => {
  return (
    <TouchableOpacity style={{ ...styles.root, ...styles }} {...props}>
      <View style={styles.inner} />
    </TouchableOpacity>
  )
}

export default HeaderButton

const styles = StyleSheet.create({
  root: { marginLeft: 12, height: 48 },
  inner: {
    borderRadius: 12,
    width: 48,
    height: '100%',
    backgroundColor: colors.surface.shade(10),
    borderWidth: 1,
    borderColor: colors.surface.shade(20)
  }
})
