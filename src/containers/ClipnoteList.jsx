import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useClipnotes } from '../store/ClipnoteContext'
import ClipnoteListItem from './ClipnoteListItem'

const ClipnoteList = () => {
  const { clipnotesToShow } = useClipnotes()

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={clipnotesToShow}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ClipnoteListItem {...item} />}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 24 }}
      />
    </View>
  )
}

export default ClipnoteList

const styles = StyleSheet.create({})
