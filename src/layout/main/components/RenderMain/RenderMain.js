import React, { Component } from 'react'

export default class RenderMain extends Component {
  state = {
    component: undefined
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    document.title = nextProps.name
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
