import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getRole } from '../../redux/role/redux/getRole'
import { getPermission } from '../../redux/permission/redux/getPermission'
import { DataTable } from '../../components'
import Form from './components/RoleForm'

export class Role extends Component {
  componentDidMount() {
    this.props.getRole()
    this.props.getPermission()
  }

  render() {
    const { role, permissions } = this.props

    return (
      <div className='row'>
        <div className='col-md-5'>
          <Form permissions={permissions} />
        </div>
        <div className='col-md-7'>
          <div className='card'>
            <div className='card-body'>
              <DataTable
                data={role}
                columns={[
                  {
                    Header: 'Name',
                    accessor: 'name'
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
        </div>
      </div>
    )
  }
}

const mapStateToProp = state => ({
  role: state.getRole.roles,
  permissions: state.getPermission.permissions
})

const mapDispatchToProp = {
  getRole,
  getPermission
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Role)
