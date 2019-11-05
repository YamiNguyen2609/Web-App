import React, { Component } from 'react'

export default class RenderMain extends Component {
  state = {
    component: undefined
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    console.log(2)
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
    console.log(1)
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
