const initialState = {
  pureData: [],
  filteredData: [],
  search: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PUREDATA':
      //console.log('action',action)
      return { ...state, pureData: action.payload };
    default:
      return state
  }
}