import React, { Component } from 'react'

export default class RoleForm extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='form-group'>
                <label>Chi tiết quyền</label>
                <input
                  className='form-control'
                  name='name'
                  type='text'
                  onChange={this.props.onTextChange}
                />
              </div>
            </div>
            <div className='col-sm-12'>
              <div className='form-group'>
                <label>Controller</label>
                <input
                  className='form-control'
                  name='controllerName'
                  type='text'
                  onChange={this.props.onTextChange}
                />
              </div>
            </div>
            <div className='col-sm-12'>
              <div className='float-right'>
                <button className='btn btn-light active mr-2'>
                  <i className='fa fa-remove mr-1'></i>Huỷ bỏ
                </button>
                <button
                  className='btn btn-primary'
                  onClick={this.props.onCreate}
                >
                  <i className='fa fa-plus mr-1'></i>Thêm mới
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
