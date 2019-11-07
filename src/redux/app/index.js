const BREADCRUMB = 'BREADCRUMB'
const CLEAR_BREADCRUMB = 'CLEAR_BREADCRUMB'

const SHOW_LOADING = 'SHOW_LOADING'
const HIDE_LOADING = 'HIDE_LOADING'

const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'

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

const showModal = (components, params, title, size) => ({
  type: SHOW_MODAL,
  components,
  params,
  title,
  size
})

const hideModal = () => ({
  type: HIDE_MODAL
})

const clearScreen = () => ({
  type: CLEAR_BREADCRUMB
})

const initialState = {
  breadcrumb: '',
  isShowLoading: false,
  backdropColor: '',
  isShowModal: false,
  components: undefined,
  params: undefined,
  modalSize: '',
  title: undefined
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

    case SHOW_MODAL:
      return {
        ...state,
        isShowModal: true,
        components: action.components,
        params: action.params,
        modalSize: action.size,
        title: action.title
      }

    case HIDE_MODAL:
      return {
        ...state,
        isShowModal: false,
        components: undefined,
        params: undefined,
        modalSize: undefined,
        title: undefined
      }

    default:
      return state
  }
}

export { showModal, hideModal, clearScreen, showLoading, hideLoading }
