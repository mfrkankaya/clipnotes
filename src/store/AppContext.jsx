import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext({
  createDialogActive: false,
  toggleCreateDialog: () => null,
  openCreateDialog: () => null,
  closeCreateDialog: () => null
})

export const AppProvider = ({ children }) => {
  const [createDialogActive, setCreateDialogActive] = useState(false)

  const toggleCreateDialog = () => setCreateDialogActive((current) => !current)
  const openCreateDialog = () => setCreateDialogActive(true)
  const closeCreateDialog = () => setCreateDialogActive(false)

  return (
    <AppContext.Provider
      value={{
        createDialogActive,
        toggleCreateDialog,
        openCreateDialog,
        closeCreateDialog
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
