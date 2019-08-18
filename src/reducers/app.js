import { geoJSON } from '../const.js'

const initialState = {
  pureData: geoJSON,
  search: "",
  showMenu: false,
  map: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PUREDATA':
      return { ...state, pureData: action.payload };
    case 'SET_UPDATESEARCH':
      return { ...state, search: action.payload };
    case 'SET_TOGGLEMENU':
      return { ...state, showMenu: !state.showMenu };
    case 'SET_MAPBOX':
      return { ...state, map: action.payload };
    default:
      return state
  }
}

