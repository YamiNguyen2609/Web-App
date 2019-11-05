import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import RenderMain from './components/RenderMain'
import { Loading } from '../../components'

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
    const { modules, backDropColor } = this.props
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
              <RenderMain component='Home' name='Trang chủ' />
            </Route>
            {modules.map(e => {
              return (
                <Route path={e.link} key={e.id}>
                  <RenderMain component={e.ControllerName} name={e.title} />
                </Route>
              )
            })}
          </Switch>
        </div>
        <Loading visible={isShowLoading} backdropColor={backDropColor} />
      </main>
    )
  }
}

const mapStateToProp = state => ({
  modules: state.getModule.modules,
  isShowLoading: state.app.isShowLoading,
  backDropColor: state.app.backdropColor
})

const mapDispatchToProp = {}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Main)
