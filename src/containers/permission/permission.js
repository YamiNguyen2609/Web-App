import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPermission } from '../../redux/permission/redux/getPermission'
import { DataTable } from '../../components'
import Form from './components/PermissionForm'

export class Permission extends Component {
  componentDidMount() {
    this.props.getPermission()
  }

  render() {
    const { permissions } = this.props

    return (
      <div className='row'>
        <div className='col-md-5'>
          <Form />
        </div>
        <div className='col-md-7'>
          <div className='card'>
            <div className='card-body'>
              <DataTable
                data={permissions}
                columns={[
                  {
                    Header: 'Chi tiết quyền',
                    accessor: 'name'
                  },
                  {
                    Header: 'Tên controller',
                    accessor: 'controllerName'
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
  permissions: state.getPermission.permissions
})

const mapDispatchToProp = {
  getPermission
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Permission)
