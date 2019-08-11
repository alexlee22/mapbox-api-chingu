export const simpleAction = () => dispatch => {
  dispatch({
   type: 'SIMPLE_ACTION',
   payload: 'result_of_simple_action'
  })
}

export const setPureData = (payload) => dispatch => {
  dispatch({
    type: 'SET_PUREDATA',
    payload: payload
  })
}

export const setHideMenu = (payload) => dispatch => {
  dispatch({
    type: 'SET_HIDEMENU',
    payload: payload
  })
}

export const setUpdateSearch = (payload) => dispatch => {
  dispatch({
    type: 'SET_UPDATESEARCH',
    payload: payload
  })
}
