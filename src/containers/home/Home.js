import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logout } from '../../redux/user/redux/loginWithEmail'

export class Home extends Component {
  state = {}

  _onLogout = () => {
    this.props.logout()
  }

  render() {
    return (
      <button
        className='btn btn-link px-0'
        type='button'
        onClick={this._onLogout}
      >
        Đăng xuất
      </button>
    )
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
