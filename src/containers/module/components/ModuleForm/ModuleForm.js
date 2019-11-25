import React, { Component } from 'react'
import Select from 'react-select'

export default class ModuleForm extends Component {
    render() {
        const { modules } = this.props

        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='form-group'>
                                <label form='title'>Tiêu đề</label>
                                <input className='form-control' name='title' type='text' />
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className='form-group'>
                                <label form='icon'>Icon</label>
                                <input className='form-control' name='icon' type='text' />
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className='form-group'>
                                <label form='link'>Link</label>
                                <input className='form-control' name='link' type='text' />
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className='form-group'>
                                <label form='name'>Danh sách quyền</label>
                                <Select
                                    isMulti
                                    options={modules.map(e => {
                                        return {
                                            value: e.id,
                                            label: e.title
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
