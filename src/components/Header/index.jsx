import React from 'react'
import { Search } from 'react-feather'

const Header = ({ dispatchTheme, dispatchNavigation, searchTerm }) => {
  const toggleTheme = () => {
    dispatchTheme({ type: 'TOGGLE_THEME' })
  }

  const handleSearchChange = (event) => {
    dispatchNavigation({ type: 'SET_SEARCH_TERM', payload: event.target.value })
  }

  return (
    <header className="app-header">
      <h1 className="app-title">SD Help</h1>
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Alternar Tema
      </button>
    </header>
  )
}
export { Header }
