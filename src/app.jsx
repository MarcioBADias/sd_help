import React, { useReducer, useEffect } from 'react';
import { initialThemeState, themeReducer } from './reducers/themeReducer';
import './App.css';
import './styles/global.css';

const Header = ({ dispatch }) => {
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <header className="app-header">
      <h1>SD Help</h1>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Alternar Tema
      </button>
    </header>
  );
};

const Sidebar = () => {
  return (
    <nav className="app-sidebar">
      <ul>
        [cite_start]<li><a href="#">Instalação do SD Super SERVIDOR</a></li> {/* [cite: 1] */}
        [cite_start]<li><a href="#">Instalação de SDSuper Retaguarda</a></li> {/* [cite: 9] */}
        [cite_start]<li><a href="#">Preparação Windows para o SDPdv</a></li> {/* [cite: 14] */}
        [cite_start]<li><a href="#">Instalação do SDPdv</a></li> {/* [cite: 19] */}
        [cite_start]<li><a href="#">SDPdv e suas funções</a></li> {/* [cite: 27] */}
      </ul>
    </nav>
  );
};

const Content = () => {
  return (
    <main className="app-content">
      <h2>Bem-vindo ao SD Help!</h2>
      <p>Navegue pelas seções à esquerda para encontrar informações sobre as rotinas do sistema SD Informática.</p>
    </main>
  );
};

function App() {
  const [themeState, dispatch] = useReducer(themeReducer, initialThemeState);

  useEffect(() => {
    document.body.className = themeState.theme;
  }, [themeState.theme]);

  return (
    <div className="app-container">
      <Header dispatch={dispatch} />
      <div className="main-layout">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export { App };