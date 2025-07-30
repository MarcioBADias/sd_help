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
