import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants/layout'
import { colors } from '../theme'

const DIALOG_HEIGHT = SCREEN_HEIGHT * 0.5

const BottomDialog = ({ isActive = false, close = () => null, children }) => {
  return (
    <View
      style={{ ...styles.root, opacity: isActive ? 1 : 0 }}
      pointerEvents={isActive ? 'auto' : 'none'}>
      <TouchableWithoutFeedback onPress={close}>
        <View style={styles.outside} />
      </TouchableWithoutFeedback>

      <View
        style={{
          ...styles.dialog,
          transform: [{ translateY: isActive ? 0 : DIALOG_HEIGHT }]
        }}>
        {children}
      </View>
    </View>
  )
}

export default BottomDialog

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.surface.shade(0, 0.75)
  },
  dialog: {
    width: '100%',
    height: DIALOG_HEIGHT,
    backgroundColor: colors.surface.shade(5),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  outside: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - DIALOG_HEIGHT
  }
})
