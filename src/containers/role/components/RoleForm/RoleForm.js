import React, { Component } from 'react'

export default class RoleForm extends Component {
  render() {
    return (
      <div className='card-body'>
        <div class='row'>
          <div class='col-sm-12'>
            <div class='form-group'>
              <label for='name'>Tên quyền</label>
              <input
                class='form-control'
                name='name'
                type='text'
                onClick={this.props.changeText}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
