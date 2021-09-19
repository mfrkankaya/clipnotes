import React, { useEffect } from 'react'
import { LayoutAnimation, UIManager } from 'react-native'
import BottomDialog from './src/components/BottomDialog'
import Screen from './src/components/Screen'
import ClipnoteList from './src/containers/ClipnoteList'
import CreateForm from './src/containers/CreateForm'
import Header from './src/containers/Header'
import { AppContext } from './src/store/AppContext'
import ContextCombiner from './src/utils/ContextCombiner'

const App = () => {
  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
    LayoutAnimation.spring()
  })

  return (
    <ContextCombiner>
      <AppContext.Consumer>
        {({ createDialogActive, closeCreateDialog }) => {
          return (
            <Screen>
              <Header />
              <ClipnoteList />
              <BottomDialog
                isActive={createDialogActive}
                close={closeCreateDialog}>
                <CreateForm />
              </BottomDialog>
            </Screen>
          )
        }}
      </AppContext.Consumer>
    </ContextCombiner>
  )
}

export default App
