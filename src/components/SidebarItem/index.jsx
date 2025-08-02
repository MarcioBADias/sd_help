import React from 'react'
import {
  StyledSidebarItem,
  SidebarItemHeader,
  SidebarItemTitle,
  SidebarSubmenu,
  StyledChevronRight,
  StyledChevronDown,
} from './style'

const SidebarItem = ({ item, level, navigationState, dispatchNavigation }) => {
  const hasChildren = item.content && item.content.length > 0
  const isExpanded = navigationState.expandedSections.includes(item.id)
  const isSelected = navigationState.selectedItemId === item.id

  const handleItemClick = () => {
    if (navigationState.searchTerm) {
      dispatchNavigation({ type: 'SET_SEARCH_TERM', payload: '' })
    }
    if (hasChildren) {
      dispatchNavigation({ type: 'TOGGLE_SECTION', payload: item.id })
    } else {
      dispatchNavigation({
        type: 'SELECT_ITEM',
        payload: { id: item.id, parentId: item.parentId },
      })
    }
  }
  const levelClass = `level-${level}`

  return (
    <StyledSidebarItem className={levelClass}>
      <SidebarItemHeader onClick={handleItemClick} isSelected={isSelected}>
        {hasChildren &&
          (isExpanded ? <StyledChevronDown /> : <StyledChevronRight />)}
        <SidebarItemTitle>{item.title}</SidebarItemTitle>
      </SidebarItemHeader>
      {hasChildren && isExpanded && (
        <SidebarSubmenu>
          {item.content.map((subItem) => (
            <SidebarItem
              key={subItem.id}
              item={{ ...subItem, parentId: item.id }}
              level={level + 1}
              navigationState={navigationState}
              dispatchNavigation={dispatchNavigation}
            />
          ))}
        </SidebarSubmenu>
      )}
    </StyledSidebarItem>
  )
}

export { SidebarItem }
