import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import RenderMain from './components/RenderMain'
import { Loading, Modal } from '../../components'
import { Metrics } from '../../themes'
import { hideModal } from '../../redux/app'

export class Main extends Component {
  state = {
    isShowLoading: false
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (this.props.isShowLoading != nextProps.isShowLoading) {
      this.setState({ isShowLoading: nextProps.isShowLoading })
    }
  }

  render() {
    const {
      modules,
      backDropColor,
      component,
      isShowModal,
      params,
      size,
      title
    } = this.props
    const { isShowLoading } = this.state

    return (
      <main className='main' id='main'>
        {/* <ol className='breadcrumb'>
          <li key={'1'} className='breadcrumb-item'>
            Home
          </li>
          <li key={'2'} className='breadcrumb-item'>
            <a href='#'>Admin</a>
          </li>x
          <li key={'3'} className='breadcrumb-item active'>
            Dashboard
          </li>
        </ol> */}
        <div className='container-fluid' id='main' style={{ padding: '30px' }}>
          <Switch>
            <Route exact path='/'>
              <RenderMain component='Home' link='/' name='Trang chủ' />
            </Route>
            {modules.map(e => {
              return (
                <Route path={e.link} key={e.id}>
                  <RenderMain
                    component={e.ControllerName}
                    link={e.link}
                    name={e.title}
                  />
                </Route>
              )
            })}
          </Switch>
        </div>
        <Loading visible={isShowLoading} backdropColor={backDropColor} />
        <Modal
          component={component}
          size={size}
          visible={isShowModal}
          params={params}
          title={title}
          onClose={this.props.hideModal}
        />
      </main>
    )
  }
}

const mapStateToProp = state => ({
  modules: state.getModule.modules,
  isShowLoading: state.app.isShowLoading,
  backDropColor: state.app.backdropColor,
  isShowModal: state.app.isShowModal,
  component: state.app.components,
  params: state.app.params,
  size: state.app.modalSize,
  title: state.app.title
})

const mapDispatchToProp = { hideModal }

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Main)
