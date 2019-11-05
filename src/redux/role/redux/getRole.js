const ACTION = 'GET_ROLE'
const ACTION_SUCCESS = ACTION + '_SUCCESS'
const ACTION_ERROR = ACTION + '_ERROR'

const getRole = () => ({
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
  roles: [],
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
        roles: action.payload
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

export { ACTION, getRole, onFailure, onSuccess }
