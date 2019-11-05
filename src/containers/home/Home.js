import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logout } from '../../redux/user/redux/loginWithEmail'

export class Home extends Component {
  state = {}

  _onLogout = () => {
    this.props.logout()
  }

  render() {
    return <div>Home</div>
  }
}

const mapStateToProp = state => ({})

const mapDispatchToProp = {
  logout
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Home)
