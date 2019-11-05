import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getRole } from '../../redux/role/redux/getRole'
import { DataTable } from '../../components'

export class Role extends Component {
  componentDidMount() {
    this.props.getRole()
  }

  render() {
    const { role } = this.props

    return (
      <div className='card'>
        <div className='col-md-5'></div>
        <div className='col-md-7'>
          <div className='card-body'>
            <DataTable
              data={role}
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
      </div>
    )
  }
}

const mapStateToProp = state => ({
  role: state.getRole.roles
})

const mapDispatchToProp = {
  getRole
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Role)
