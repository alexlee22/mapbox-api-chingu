const initialState = {
  pureData: null,
  search: "",
  showMenu: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PUREDATA':
      return { ...state, pureData: action.payload };
    case 'SET_UPDATESEARCH':
      return { ...state, search: action.payload };
    case 'SET_TOGGLEMENU':
      return { ...state, showMenu: !state.showMenu };
    default:
      return state
  }
}

