import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginWithEmail } from '../../redux/user/redux/loginWithEmail'

export class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  _onChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  _onPressLogin = () => {
    const { username, password } = this.state
    this.props.loginWithEmail(username, password)
  }

  render() {
    const { username, password } = this.state

    return (
      <div className='container' id='login'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card-group'>
              <div className='card p-4'>
                <div className='card-body'>
                  <h1>Login</h1>
                  <p className='text-muted'>Sign In to your account</p>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>
                        <i className='icon-user'></i>
                      </span>
                    </div>
                    <input
                      className='form-control'
                      type='text'
                      name='username'
                      onChange={this._onChange}
                      placeholder='Username'
                    />
                  </div>
                  <div className='input-group mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>
                        <i className='icon-lock'></i>
                      </span>
                    </div>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Password'
                      name='password'
                      onChange={this._onChange}
                    />
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <button
                        className='btn btn-primary px-4'
                        type='button'
                        onClick={this._onPressLogin}
                      >
                        Login
                      </button>
                    </div>
                    <div className='col-6 text-right'>
                      <button className='btn btn-link px-0' type='button'>
                        Forgot password?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProp = state => ({})

const mapDispatchToProp = {
  loginWithEmail
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Login)
