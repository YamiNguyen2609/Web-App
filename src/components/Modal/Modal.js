import React, { Component } from 'react'

export default class Modal extends Component {
  state = {
    component: undefined
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps.component) {
      import('../../containers/' + nextProps.component + '/index.js').then(
        component => {
          this.setState({ component: component.default })
        }
      )
    }
  }

  componentDidMount() {
    if (this.props.component) {
      import('../../containers/' + this.props.component + '/index.js').then(
        component => {
          this.setState({ component: component.default })
        }
      )
    }
  }

  render() {
    const { component } = this.state
    const { visible, params, size, title } = this.props
    return (
      <div
        className={'modal fade ' + (visible ? ' show' : '')}
        role='dialog'
        style={{ display: visible ? 'block' : 'none' }}
      >
        <div className={'modal-dialog' + (size ? size : '')} role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>{title}</h4>
              <button
                className='close'
                type='button'
                data-dismiss='modal'
                aria-label='Close'
                onClick={this.props.onClose}
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            {component ? React.createElement(component, this.props) : null}
          </div>
        </div>
      </div>
    )
  }
}
