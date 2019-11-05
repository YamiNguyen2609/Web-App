import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToastsStore } from 'react-toasts'

import { getUser } from '../../redux/user/redux/getUser'
import { DataTable, Modal } from '../../components'

export class User extends Component {
  state = {
    visible: false,
    component: ''
  }

  componentDidMount() {
    this.props.getUser()
  }

  targetForm = () => {
    this.setState({ visible: true, component: 'user/components/UserForm' })
  }

  targetToast = () => {
    ToastsStore.success('Hey, it worked !')
  }

  render() {
    const { users } = this.props
    const { visible, component } = this.state
    return (
      <div className='card'>
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
        {visible ? (
          <Modal component={component} test='dsadvagdyahdvgadbhas' />
        ) : null}
      </div>
    )
  }
}

const mapStateToProp = state => ({
  users: state.getUser.users,
  test1: state.getData.test1,
  test2: state.getData.test2
})

const mapDispatchToProp = {
  getUser
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(User)
