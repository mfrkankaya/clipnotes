import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useLocalState = (key, initialState) => {
  const [state, setState] = useState(initialState)

  const initialize = () => {
    AsyncStorage.getItem(key)
      .then((item) => item && setState(JSON.parse(item)))
      .catch(console.error)
  }

  const sync = () => {
    AsyncStorage.setItem(key, JSON.stringify(state)).catch(console.error)
  }

  useEffect(initialize, [])
  useEffect(sync, [state])

  return [state, setState]
}

export default useLocalState
