import React from 'react'
import Container from '../components/Container'
import HeaderButton from '../components/HeaderButton'
import Searchbar from '../components/Searchbar'
import { useApp } from '../store/AppContext'
import { colors } from '../theme'

const Header = () => {
  const { openCreateDialog } = useApp()

  return (
    <Container
      style={{
        flexDirection: 'row',
        paddingVertical: 16,
        elevation: 10,
        backgroundColor: colors.surface.shade(0)
      }}>
      <Searchbar />
      <HeaderButton onPress={openCreateDialog} />
    </Container>
  )
}

export default Header
