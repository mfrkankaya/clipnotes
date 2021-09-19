import React, { createContext, useContext, useEffect, useState } from 'react'
import useLocalState from '../hooks/useLocalState'
import { generateClipnote } from '../utils/clipnotes'

const ClipnoteContext = createContext({
  clipnotes: [],
  clipnotesToShow: [],
  addClipnote: () => null,
  removeClipnote: () => null,
  filterBySearchText: () => null
})

export const ClipnoteProvider = ({ children }) => {
  const [clipnotes, setClipnotes] = useLocalState('CLIPNOTES', [])
  const [clipnotesToShow, setClipnotesToShow] = useState([])

  const addClipnote = ({ title, text, tags }) => {
    const clipnote = generateClipnote({ title, text, tags })
    setClipnotes((current) => [clipnote, ...current])
  }

  const removeClipnote = (id) => {
    const indexToRemove = clipnotes.find((clipnote) => clipnote.id === id)
    const newClipnotes = [...clipnotes]
    newClipnotes.splice(indexToRemove, 1)
    setClipnotes(newClipnotes)
  }

  const filterBySearchText = (sText) => {
    if (!sText) {
      setClipnotesToShow(clipnotes)
      return
    }

    const result = clipnotes.filter((clipnote) => {
      const title = clipnote.title.toLocaleLowerCase()
      const text = clipnote.text.toLocaleLowerCase()
      const searchText = sText.toLocaleLowerCase()

      if (title.includes(searchText) || text.includes(searchText)) return true
      return false
    })

    setClipnotesToShow(result)
  }

  useEffect(() => {
    setClipnotesToShow(clipnotes)
  }, [clipnotes])

  return (
    <ClipnoteContext.Provider
      value={{
        clipnotes,
        clipnotesToShow,
        addClipnote,
        removeClipnote,
        filterBySearchText
      }}>
      {children}
    </ClipnoteContext.Provider>
  )
}

export const useClipnotes = () => useContext(ClipnoteContext)
