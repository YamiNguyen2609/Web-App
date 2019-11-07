const ACTION = 'HANDLE'
const ACTION_ADD = ACTION + '_ADD'
const ACTION_UPDATE = ACTION + '_UPDATE'
const ACTION_REMOVE = ACTION + '_REMOVE'
const ACTION_SUCCESS = ACTION + '_SUCCESS'
const ACTION_ERROR = ACTION + '_ERROR'
const ACTION_CLEAR = ACTION + '_REFRESH'

const onCreate = (api, params) => ({
  type: ACTION_ADD,
  api,
  params
})

const onRefresh = () => ({
  type: ACTION_CLEAR
})

const onUpdate = (api, params) => ({
  type: ACTION_UPDATE,
  api,
  params
})

const onRemove = (api, id) => ({
  type: ACTION_REMOVE,
  api,
  id
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
  api: undefined,
  params: undefined,
  id: undefined,
  error: '',
  result: undefined,
  refreshFlag: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADD:
      return {
        ...state,
        api: action.api,
        params: action.params
      }

    case ACTION_UPDATE:
      return {
        ...state,
        api: action.api,
        params: action.params
      }

    case ACTION_REMOVE:
      return {
        ...state,
        api: action.api,
        id: action.id
      }

    case ACTION_SUCCESS:
      return {
        ...state,
        result: action.payload,
        api: undefined,
        params: undefined,
        id: undefined
      }

    case ACTION_ERROR:
      return {
        ...state,
        error: action.error,
        api: undefined,
        params: undefined,
        id: undefined
      }
    case ACTION_CLEAR:
      return {
        ...state,
        refreshFlag: state.refreshFlag + 1
      }

    default:
      return state
  }
}

export {
  ACTION_ADD,
  ACTION_UPDATE,
  ACTION_REMOVE,
  onCreate,
  onRemove,
  onUpdate,
  onFailure,
  onSuccess,
  onRefresh
}
