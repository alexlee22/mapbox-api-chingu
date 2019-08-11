const initialState = {
  pureData: [],
  filteredData: [],
  search: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    
    case 'SET_PUREDATA':
      return { ...state, pureData: action.payload };
    
    case 'SET_UPDATESEARCH':
      return { ...state, search: action.payload };
    
    default:
      return state
  }
}