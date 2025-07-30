import React from 'react'
import { ChevronRight, ChevronDown } from 'react-feather'

const SidebarItem = ({
  item,
  level,
  isExpanded,
  isSelected,
  dispatchNavigation,
}) => {
  const hasChildren = item.content && item.content.length > 0

  const handleItemClick = () => {
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
              isExpanded={
                isExpanded && subItem.id === dispatchNavigation.expandedSections
              }
              isSelected={
                isSelected && subItem.id === dispatchNavigation.selectedItemId
              }
              dispatchNavigation={dispatchNavigation}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export { SidebarItem }
