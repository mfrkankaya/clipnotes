import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Button from '../components/Button'
import Container from '../components/Container'
import Input from '../components/Input'
import { useClipnotes } from '../store/ClipnoteContext'

const INITIAL_STATE = { title: '', text: '' }
const CreateForm = () => {
  const { addClipnote } = useClipnotes()
  const [clipnote, setClipnote] = useState(INITIAL_STATE)
  const reset = () => setClipnote(INITIAL_STATE)
  const handleChange = (field) => (value) =>
    setClipnote((clipnote) => ({ ...clipnote, [field]: value }))

  const handleCreate = () => {
    if (!clipnote.title || !clipnote.text) return

    addClipnote(clipnote)
    reset()
  }

  return (
    <Container style={styles.root}>
      <Input
        placeholder="Title"
        style={styles.input}
        value={clipnote.title}
        onChangeText={handleChange('title')}
      />
      <Input
        placeholder="Text"
        style={styles.input}
        value={clipnote.text}
        onChangeText={handleChange('text')}
      />
      <Button onPress={handleCreate} style={{ marginTop: 12 }}>
        CREATE
      </Button>
    </Container>
  )
}

export default CreateForm

const styles = StyleSheet.create({
  root: {
    paddingTop: 24
  },
  input: { marginBottom: 12 }
})
