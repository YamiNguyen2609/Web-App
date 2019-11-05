const ACTION = 'GET_USER'
const ACTION_SUCCESS = ACTION + '_SUCCESS'
const ACTION_ERROR = ACTION + '_ERROR'

const getUser = () => ({
  type: ACTION
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
  users: [],
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
        users: action.payload
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

export { ACTION, getUser, onFailure, onSuccess }
