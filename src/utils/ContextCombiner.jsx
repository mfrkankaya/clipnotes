import React from 'react'
import { AppProvider } from '../store/AppContext'
import { ClipnoteProvider } from '../store/ClipnoteContext'

const ContextCombiner = ({ children }) => {
  return (
    <AppProvider>
      <ClipnoteProvider>{children}</ClipnoteProvider>
    </AppProvider>
  )
}

export default ContextCombiner
