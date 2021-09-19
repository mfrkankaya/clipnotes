import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useClipnotes } from '../store/ClipnoteContext'
import { colors } from '../theme'
import Input from './Input'

const Searchbar = () => {
  const { clipnotes, filterBySearchText } = useClipnotes()
  const [text, setText] = useState('')
  const reset = () => setText('')

  const filter = () => {
    filterBySearchText(text)
  }

  useEffect(reset, [clipnotes])
  useEffect(filter, [text])

  return (
    <View style={styles.root}>
      <Input
        placeholder="Search clipnotes"
        value={text}
        onChangeText={setText}
        autoCapitalize="none"
      />

      {Boolean(text) && (
        <TouchableOpacity style={styles.button} onPress={reset}>
          <View style={styles.buttonInner} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    justifyContent: 'center',
    height: 48,
    flex: 1
  },

  button: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 12
  },
  buttonInner: {
    width: 16,
    height: 16,
    backgroundColor: colors.text.shade(60),
    borderRadius: 100
  }
})
