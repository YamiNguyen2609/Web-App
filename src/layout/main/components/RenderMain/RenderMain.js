import React, { Component } from 'react'

export default class RenderMain extends Component {
  state = {
    component: undefined
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    document.title = nextProps.name
    document.querySelectorAll('nav ul.nav li a.nav-link').forEach(e => {
      e.classList.remove('active')
      if (e.getAttribute('href') === nextProps.link) e.classList.add('active')
    })
    import(
      '../../../../containers/' +
        nextProps.component.toLowerCase() +
        '/index.js'
    ).then(component => {
      this.setState({ component: component.default })
    })
  }

  componentDidMount() {
    document.title = this.props.name
    document.querySelectorAll('nav ul.nav li a.nav-link').forEach(e => {
      e.classList.remove('active')
      if (e.getAttribute('href') === this.props.link) e.classList.add('active')
    })
    import(
      '../../../../containers/' +
        this.props.component.toLowerCase() +
        '/index.js'
    ).then(component => {
      this.setState({ component: component.default })
    })
  }

  render() {
    const { component } = this.state
    return component ? React.createElement(component) : null
  }
}
