import React from 'react'
import {
  HeaderContainer,
  AppTitle,
  SearchBar,
  SearchIcon,
  SearchInput,
  ThemeToggleButton,
} from './style'

const Header = ({ dispatchTheme, dispatchNavigation, searchTerm }) => {
  const handleSearchChange = (event) => {
    dispatchNavigation({ type: 'SET_SEARCH_TERM', payload: event.target.value })
  }

  return (
    <HeaderContainer>
      <AppTitle>SD Help</AppTitle>
      <SearchBar>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </SearchBar>
      <ThemeToggleButton
        onClick={() => dispatchTheme({ type: 'TOGGLE_THEME' })}
      >
        Alternar Tema
      </ThemeToggleButton>
    </HeaderContainer>
  )
}

export { Header }
