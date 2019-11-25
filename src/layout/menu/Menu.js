import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getModule } from '../../redux/module/redux/getModule'

function ModuleTable(props) {
  const data = props.data
  return (
    <ul className='nav' style={{ width: 205 }}>
      <li key='0' className='nav-item'>
        <Link to='/' className='nav-link'>
          <i className='nav-icon mr-1 cui-home'></i>Trang chủ
        </Link>
      </li>
      {SetModuleTable(data)}
    </ul>
  )
}

function SetModuleTable(data, parentId = 0) {
  const items =
    parentId > 0
      ? data.filter(e => {
        return e.parentId === parentId && e.id !== e.parentId
      })
      : data.filter(e => {
        return e.id === e.parentId
      })
  if (items) {
    return items.map(el => {
      const ul =
        data.filter(e => {
          return e.parentId === el.id && e.id !== e.parentId
        }).length > 0
      return (
        <li key={el.id} className={ul ? 'nav-item nav-dropdown' : 'nav-item'}>
          {el.link !== '#' ? (
            <Link
              to={el.link}
              className={ul ? 'nav-dropdown-toggle nav-link' : 'nav-link'}
            >
              <i className={'nav-icon mr-1 ' + el.icon}></i>
              {el.title}
            </Link>
          ) : (
              <a className={ul ? 'nav-dropdown-toggle nav-link' : 'nav-link'}>
                <i className={'nav-icon mr-1 ' + el.icon}></i>
                {el.title}
              </a>
            )}

          {ul ? (
            <ul className='nav-dropdown-items'>
              {SetModuleTable(data, el.id)}
            </ul>
          ) : null}
        </li>
      )
    })
  }
}

export class Menu extends Component {
  state = {}

  componentDidMount() {
    this.props.getModule(1)
  }

  render() {
    const { modules } = this.props
    return (
      <ul className='sidebar'>
        <nav className='sidebar-nav'>
          <ModuleTable data={modules} />
        </nav>
      </ul>
    )
  }
}

const mapStateToProp = state => {
  return {
    modules: state.getModule.modules
  }
}

const mapDispatchToProp = {
  getModule
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Menu)
