import React from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'

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

  const itemClassName = `sidebar-item level-${level} ${isSelected ? 'selected' : ''} ${hasChildren ? 'has-children' : ''}`

  return (
    <li className={itemClassName}>
      <div className="sidebar-item-header" onClick={handleItemClick}>
        {hasChildren &&
          (isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        <span className="sidebar-item-title">{item.title}</span>
      </div>
      {hasChildren && isExpanded && (
        <ul className="sidebar-submenu">
          {item.content.map((subItem) => (
            <SidebarItem
              key={subItem.id}
              item={{ ...subItem, parentId: item.id }}
              level={level + 1}
              navigationState={navigationState}
              dispatchNavigation={dispatchNavigation}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export { SidebarItem }
