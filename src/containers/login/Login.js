import React, { Component } from 'react'

export default class Login extends Component {
  state = {}
  render() {
    return (
      <div classname='container' id='login'>
        <div classname='row justify-content-center'>
          <div classname='col-md-8'>
            <div classname='card-group'>
              <div classname='card p-4'>
                <div classname='card-body'>
                  <h1>Login</h1>
                  <p classname='text-muted'>Sign In to your account</p>
                  <div classname='input-group mb-3'>
                    <div classname='input-group-prepend'>
                      <span classname='input-group-text'>
                        <i classname='icon-user'></i>
                      </span>
                    </div>
                    <input
                      classname='form-control'
                      type='text'
                      placeholder='Username'
                    />
                  </div>
                  <div classname='input-group mb-4'>
                    <div classname='input-group-prepend'>
                      <span classname='input-group-text'>
                        <i classname='icon-lock'></i>
                      </span>
                    </div>
                    <input
                      classname='form-control'
                      type='password'
                      placeholder='Password'
                    />
                  </div>
                  <div classname='row'>
                    <div classname='col-6'>
                      <button classname='btn btn-primary px-4' type='button'>
                        Login
                      </button>
                    </div>
                    <div classname='col-6 text-right'>
                      <button classname='btn btn-link px-0' type='button'>
                        Forgot password?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                classname='card text-white bg-primary py-5 d-md-down-none'
                style={{ width: '44%' }}
              >
                <div classname='card-body text-center'>
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button
                      classname='btn btn-primary active mt-3'
                      type='button'
                    >
                      Register Now!
                    </button>
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
