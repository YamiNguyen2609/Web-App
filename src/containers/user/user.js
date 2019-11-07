import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToastsStore } from 'react-toasts'

import { getUser } from '../../redux/user/redux/getUser'
import { DataTable } from '../../components'
import { showModal, hideModal } from '../../redux/app'
import { modalSize } from '../../helpers/Constants'

export class User extends Component {
  componentDidMount() {
    this.props.getUser()
    this.props.hideModal()
  }

  targetForm = () => {
    this.props.showModal(
      'user/components/UserForm',
      {
        test: 'dasdasdsadsadsadsadas'
      },
      'Người dùng'
      // modalSize.LARGE
    )
  }

  targetToast = () => {
    ToastsStore.success('Hey, it worked !')
  }

  render() {
    const { users } = this.props
    return (
      <div className='card'>
        <div className='card-header '>
          Danh sách người dùng
          <button className='btn btn-ghost-primary btn-sm active float-right'>
            <i className='fa fa-plus mr-1'></i>Thêm mới
          </button>
        </div>
        <div className='card-body'>
          <DataTable
            data={users}
            columns={[
              {
                Header: 'Name',
                accessor: 'fullName'
              },
              {
                Header: 'phone',
                accessor: 'phoneNumber',
                className: 'text-right'
              },
              {
                Header: '',
                accessor: 'id',
                Cell: props => (
                  <ul className='nav navbar-nav ml-auto'>
                    <li className='nav-item d-md-down-none btn-edit'>
                      <a className='nav-link' onClick={this.targetForm}>
                        <i className='cui-pencil font-xs'></i>
                      </a>
                    </li>
                    <li className='nav-item d-md-down-none btn-remove'>
                      <a className='nav-link' onClick={this.targetToast}>
                        <i className='cui-trash font-xs'></i>
                      </a>
                    </li>
                  </ul>
                )
              }
            ]}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProp = state => ({
  users: state.getUser.users
})

const mapDispatchToProp = {
  getUser,
  showModal,
  hideModal
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(User)
