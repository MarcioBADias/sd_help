import React, { useReducer, useEffect } from 'react'
import { initialThemeState, themeReducer } from './reducers/themeReducer'
import {
  initialNavigationState,
  navigationReducer,
} from './reducers/navigationReducer'
import { documentationData } from './data/documentationData'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Content } from './components/Content'
import './app.css'
import './styles/global.css'

// Define os objetos de tema (light e dark)
const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  headerBackground: '#f0f0f0',
  headerText: '#333',
  sidebarBackground: '#f8f8f8',
  sidebarBorder: '#eee',
  contentBackground: '#fff',
  link: '#007bff',
  linkHover: '#0056b3',
  codeBackground: '#f8f8f8',
  borderColor: '#eee',
  highlightBackground: 'yellow',
  highlightText: '#333',
  sidebarItemHover: '#e0e0e0', // Nova propriedade para hover
  sidebarItemSelectedBg: '#007bff', // Nova propriedade para item selecionado
  sidebarItemSelectedText: 'white', // Nova propriedade
}

const darkTheme = {
  background: '#282c34',
  text: '#f0f0f0',
  headerBackground: '#20232a',
  headerText: '#f0f0f0',
  sidebarBackground: '#22252a',
  sidebarBorder: '#3a3f45',
  contentBackground: '#363a40',
  link: '#61dafb',
  linkHover: '#21a1f1',
  codeBackground: '#2f343a',
  borderColor: '#3a3f45',
  highlightBackground: '#61dafb',
  highlightText: '#282c34',
  sidebarItemHover: '#3a3f45',
  sidebarItemSelectedBg: '#61dafb',
  sidebarItemSelectedText: '#282c34',
}

const App = () => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState,
  )
  const [navigationState, dispatchNavigation] = useReducer(
    navigationReducer,
    initialNavigationState,
  )

  useEffect(() => {
    document.body.className = themeState.theme
  }, [themeState.theme])

  useEffect(() => {
    if (
      !navigationState.selectedItemId &&
      !navigationState.searchTerm &&
      documentationData.length > 0
    ) {
      if (
        documentationData[0].content &&
        documentationData[0].content.length > 0
      ) {
        dispatchNavigation({
          type: 'SELECT_ITEM',
          payload: {
            id: documentationData[0].content[0].id,
            parentId: documentationData[0].id,
          },
        })
      } else {
        dispatchNavigation({
          type: 'SELECT_ITEM',
          payload: { id: documentationData[0].id, parentId: null },
        })
      }
    }
  }, [navigationState.selectedItemId, navigationState.searchTerm])

  return (
    <div className="app-container">
      <Header
        dispatchTheme={dispatchTheme}
        dispatchNavigation={dispatchNavigation}
        searchTerm={navigationState.searchTerm}
      />
      <div className="main-layout">
        <Sidebar
          navigationState={navigationState}
          dispatchNavigation={dispatchNavigation}
        />
        <Content
          selectedItemId={navigationState.selectedItemId}
          searchTerm={navigationState.searchTerm}
          data={documentationData}
        />
      </div>
    </div>
  )
}

export { App }
