import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from 'react-toasts'

import Header from './header'
import Body from './body'
import Footer from './footer'
import { getInfo } from '../redux/user/redux/loginWithEmail'

import Login from '../containers/login'

export class index extends Component {
  componentDidMount() {
    this.props.getInfo()
    if (this.props.user) {
      document.getElementsByTagName('body')[0].className =
        'app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show'
    } else {
      document.getElementsByTagName('body')[0].className =
        'app flex-row align-items-center'
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      document.getElementsByTagName('body')[0].className =
        'app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show'
    } else {
      document.getElementsByTagName('body')[0].className =
        'app flex-row align-items-center'
    }
  }

  render() {
    const { user } = this.props

    return user ? (
      <div id='root'>
        <Header />
        <Body />
        <Footer />
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_RIGHT}
        />
      </div>
    ) : (
      <Login />
    )
  }
}

const mapStateToProp = state => ({
  user: state.loginWithEmail.user
})

const mapDispatchToProp = {
  getInfo
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(index)
