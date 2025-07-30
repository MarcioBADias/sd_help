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
            isExpanded={navigationState.expandedSections.includes(section.id)}
            isSelected={
              navigationState.selectedItemId === section.id ||
              (section.content &&
                section.content.some(
                  (subItem) =>
                    subItem.id === navigationState.selectedItemId ||
                    (subItem.content &&
                      subItem.content.some(
                        (subSubItem) =>
                          subSubItem.id === navigationState.selectedItemId,
                      )),
                ))
            }
            dispatchNavigation={dispatchNavigation}
          />
        ))}
      </ul>
    </nav>
  )
}

export { Sidebar }
