import React from 'react'

const Header = ({ dispatchTheme }) => {
  return (
    <header className="app-header">
      <h1>SD Help</h1>
      <button
        onClick={() => dispatchTheme({ type: 'TOGGLE_THEME' })}
        className="theme-toggle-button"
      >
        Alternar Tema
      </button>
    </header>
  )
}

export { Header }
