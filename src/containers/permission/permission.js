import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPermission } from '../../redux/permission/redux/getPermission'
import { DataTable } from '../../components'
import Form from './components/PermissionForm'
import { onCreate, onRemove } from '../../redux/app/redux/HandleRedux'

export class Permission extends Component {
  componentDidMount() {
    this.props.getPermission()
  }

  state = {
    form: {}
  }

  _onTextChange = evt => {
    this.setState({
      form: { ...this.state.form, [evt.target.name]: evt.target.value }
    })
  }

  _onCreate = () => {
    this.props.onCreate('Permission', this.state.form)
  }

  _onDelete = e => {
    this.props.onRemove('Permission', e.value)
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    console.log('dasd', nextProps.refreshFlag)
    if (this.props.refreshFlag != nextProps.refreshFlag) {
      this.props.getPermission()
    }
  }

  render() {
    const { permissions } = this.props

    return (
      <div className='row'>
        <div className='col-md-5'>
          <Form onTextChange={this._onTextChange} onCreate={this._onCreate} />
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
                          <a
                            className='nav-link'
                            onClick={() => this._onDelete(props)}
                          >
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
  permissions: state.getPermission.permissions,
  result: state.handle.result,
  refreshFlag: state.handle.refreshFlag
})

const mapDispatchToProp = {
  getPermission,
  onCreate,
  onRemove
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Permission)
