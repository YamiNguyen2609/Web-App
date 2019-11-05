import React, { Component } from 'react'

export default class Modal extends Component {
  state = {
    component: undefined
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps) {
      import('../../containers/' + nextProps.component + '/index.js').then(
        component => {
          this.setState({ component: component.default })
        }
      )
    }
  }

  componentDidMount() {
    import('../../containers/' + this.props.component + '/index.js').then(
      component => {
        this.setState({ component: component.default })
      }
    )
  }

  render() {
    const { component } = this.state
    return (
      <div
        className='modal fade show'
        role='dialog'
        style={{ display: 'block' }}
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            {component ? React.createElement(component, this.props) : null}
          </div>
        </div>
      </div>
    )
  }
}
