const BREADCRUMB = 'BREADCRUMB'
const CLEAR_BREADCRUMB = 'CLEAR_BREADCRUMB'

const SHOW_LOADING = 'SHOW_LOADING'
const HIDE_LOADING = 'HIDE_LOADING'

const replaceScreen = name => ({
  type: BREADCRUMB,
  name
})

const showLoading = backdropColor => ({
  type: SHOW_LOADING,
  backdropColor
})

const hideLoading = () => ({
  type: HIDE_LOADING
})

const clearScreen = () => ({
  type: CLEAR_BREADCRUMB
})

const initialState = {
  breadcrumb: '',
  isShowLoading: false,
  backdropColor: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case BREADCRUMB:
      break

    case SHOW_LOADING:
      return {
        ...state,
        isShowLoading: true,
        backdropColor: action.backdropColor
      }

    case HIDE_LOADING:
      return {
        ...state,
        isShowLoading: false,
        backdropColor: ''
      }

    default:
      return state
  }
}

export { replaceScreen, clearScreen, showLoading, hideLoading }
