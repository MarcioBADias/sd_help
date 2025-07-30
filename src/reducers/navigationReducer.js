const initialNavigationState = {
  selectedItemId: null,
  expandedSections: [],
}

function navigationReducer(state, action) {
  if (action.type === 'SELECT_ITEM') {
    return {
      ...state,
      selectedItemId: action.payload.id,
      expandedSections: state.expandedSections.includes(action.payload.parentId)
        ? state.expandedSections
        : [...state.expandedSections, action.payload.parentId].filter(Boolean),
    }
  }
  if (action.type === 'TOGGLE_SECTION') {
    const sectionId = action.payload
    const isExpanded = state.expandedSections.includes(sectionId)
    return {
      ...state,
      expandedSections: isExpanded
        ? state.expandedSections.filter((id) => id !== sectionId)
        : [...state.expandedSections, sectionId],
    }
  }
  return state
}

export { initialNavigationState, navigationReducer }
