import React, { Component } from 'react'

export default class Modal extends Component {
  state = {
    component: undefined
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    console.log('modal render', nextProps)
    if (nextProps.component) {
      import('../../containers/' + nextProps.component + '/index.js').then(
        component => {
          this.setState({ component: component.default })
        }
      )
    }
  }

  componentDidMount() {
    console.log('modal', this.props)
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
              <h4 class='modal-title'>{title}</h4>
              <button
                class='close'
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
