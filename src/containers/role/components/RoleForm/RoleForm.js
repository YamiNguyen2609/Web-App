import React, { Component } from 'react'
import Select from 'react-select'

export default class RoleForm extends Component {
  render() {
    const { permissions } = this.props

    return (
      <div className='card'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='form-group'>
                <label form='name'>Tên</label>
                <input className='form-control' name='name' type='text' />
              </div>
            </div>
            <div className='col-sm-12'>
              <div className='form-group'>
                <label form='name'>Tên thường dùng</label>
                <input className='form-control' name='name' type='text' />
              </div>
            </div>
            <div className='col-sm-12'>
              <div className='form-group'>
                <label form='name'>Danh sách quyền</label>
                <Select
                  isMulti
                  options={permissions.map(e => {
                    return {
                      value: e.id,
                      label: e.controllerName
                    }
                  })}
                />
              </div>
            </div>
            <div className='col-sm-12'>
              <div className='float-right'>
                <button className='btn btn-light active mr-2'>
                  <i className='fa fa-remove mr-1'></i>Huỷ bỏ
                </button>
                <button className='btn btn-primary '>
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
