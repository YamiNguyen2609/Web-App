const ACTION = 'GET_MODULE'
const ACTION_SUCCESS = ACTION + '_SUCCESS'
const ACTION_ERROR = ACTION + '_ERROR'

const getModule = userId => ({
  type: ACTION,
  userId
})

const onSuccess = payload => ({
  type: ACTION_SUCCESS,
  payload
})

const onFailure = error => ({
  type: ACTION_ERROR,
  error
})

const initialState = {
  modules: [],
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state
      }

    case ACTION_SUCCESS:
      return {
        ...state,
        modules: action.payload
      }

    case ACTION_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}

export { ACTION, getModule, onFailure, onSuccess }
