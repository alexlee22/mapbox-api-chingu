const initialState = {
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return { result: action.payload }
    
    default:
      return state
  }
}