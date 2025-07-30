import React from 'react'
import { documentationData } from '../../data/documentationData'
import { SidebarItem } from '../SidebarItem'

const Sidebar = ({ navigationState, dispatchNavigation }) => {
  return (
    <nav className="app-sidebar">
      <ul>
        {documentationData.map((section) => (
          <SidebarItem
            key={section.id}
            item={section}
            level={0}
            navigationState={navigationState}
            dispatchNavigation={dispatchNavigation}
          />
        ))}
      </ul>
    </nav>
  )
}
export { Sidebar }
