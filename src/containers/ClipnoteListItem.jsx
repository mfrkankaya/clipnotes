import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  Alert
} from 'react-native'
import { useClipnotes } from '../store/ClipnoteContext'
import { colors } from '../theme'

const ClipnoteListItem = ({ title, text, id }) => {
  const { removeClipnote } = useClipnotes()

  const hnadleCop = () => {
    Clipboard.setString(text)
    ToastAndroid.showWithGravity(
      `${title} copied to clipboard`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    )
  }

  const handleRemove = () => {
    Alert.alert(
      `You're about to remove ${title}!`,
      'Are you sure that you want to continue?',
      [
        { text: 'Continue', onPress: () => removeClipnote(id) },
        {
          text: 'Cancel',
          onPress: () => console.log('Removing cancelled'),
          style: 'cancel'
        }
      ],
      {
        cancelable: true
      }
    )
  }

  return (
    <TouchableOpacity
      onPress={hnadleCop}
      onLongPress={handleRemove}
      style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    marginBottom: 12
  },
  container: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.surface.shade(10),
    borderWidth: 1,
    borderColor: colors.surface.shade(20)
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.shade(90),
    marginBottom: 4
  },
  text: {
    color: colors.text.shade(50)
  }
})

export default ClipnoteListItem
