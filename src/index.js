import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Layout from './layout'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/ConfigureStore'

class RootContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Layout />
        </PersistGate>
      </Provider>
    )
  }
}

ReactDOM.render(<RootContainer />, document.getElementById('body'))
