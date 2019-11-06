import React, { Component } from 'react'

export default class RoleForm extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <div class='row'>
            <div class='col-sm-12'>
              <div class='form-group'>
                <label for='name'>Chi tiết quyền</label>
                <input class='form-control' name='name' type='text' />
              </div>
            </div>
            <div class='col-sm-12'>
              <div class='form-group'>
                <label for='name'>Controller</label>
                <input class='form-control' name='name' type='text' />
              </div>
            </div>
            <div class='col-sm-12'>
              <div class='float-right'>
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
