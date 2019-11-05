import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getModule } from '../../redux/module/redux/getModule'

var content = ''

function ModuleTable(props) {
  const data = props.data
  content =
    "<li key='0' class='nav-item'><a href='/' class='nav-link'><i class='nav-icon cui-home'></i>Trang chủ</a></li>"
  SetModuleTable(data, 0)
  return (
    <ul
      className='nav'
      style={{ width: 205 }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
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
    items.forEach(el => {
      const ul =
        data.filter(e => {
          return e.parentId === el.id && e.id !== e.parentId
        }).length > 0
          ? '<ul class="nav-dropdown-items">'
          : ''
      content +=
        "<li key='" +
        el.id +
        "' class='nav-item " +
        (ul ? 'nav-dropdown' : '') +
        "'><a " +
        (el.link !== '#' ? "href='" + el.link + "'" : '') +
        "class='nav-link " +
        (ul ? 'nav-dropdown-toggle' : '') +
        "'><i class='nav-icon " +
        el.icon +
        "'></i>" +
        el.title +
        '</a>' +
        ul
      SetModuleTable(data, el.id)
      content += (ul ? '</ul>' : '') + '</li>'
    })
  }
}

export class Module extends Component {
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
)(Module)
