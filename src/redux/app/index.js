const BREADCRUMB = 'BREADCRUMB'
const CLEAR_BREADCRUMB = 'CLEAR_BREADCRUMB'

const replaceScreen = name => ({
  type: BREADCRUMB,
  name
})

const clearScreen = () => ({
  type: CLEAR_BREADCRUMB
})

const initialState = {
  breadcrumb
}

export default (state = initialState, action) => {
  switch (action.type) {
    case BREADCRUMB:
      break

    default:
      return state
  }
}

export { replaceScreen, clearScreen }
