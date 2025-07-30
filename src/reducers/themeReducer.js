const initialThemeState = {
  theme: 'light',
};

const themeReducer = (state, action) => {
    if(action.type === 'TOGGLE_THEME'){
        return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    }
    
    return state
}

export { initialThemeState, themeReducer };