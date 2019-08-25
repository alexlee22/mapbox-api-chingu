// Set geoJSON on load
export const setPureData = (payload) => dispatch => {
  dispatch({
    type: 'SET_PUREDATA',
    payload: payload
  })
}

// Hide/Show menu component
export const setToggleMenu = (payload) => dispatch => {
  dispatch({
    type: 'SET_TOGGLEMENU',
    payload: payload
  })
}

// Update search string in store
export const setUpdateSearch = (payload) => dispatch => {
  dispatch({
    type: 'SET_UPDATESEARCH',
    payload: payload
  })
}

// Set map DOM for components to use
export const setMap = (payload) => dispatch => {
  dispatch({
    type: 'SET_MAPBOX',
    payload: payload
  })
}
