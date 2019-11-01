import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import RenderMain from './components/RenderMain'

export default class Main extends Component {
  render() {
    return (
      <main className='main' id='main'>
        <ol className='breadcrumb'>
          <li key={'1'} className='breadcrumb-item'>
            Home
          </li>
          <li key={'2'} className='breadcrumb-item'>
            <a href='#'>Admin</a>
          </li>
          <li key={'3'} className='breadcrumb-item active'>
            Dashboard
          </li>
        </ol>
        <div className='container-fluid' id='main'>
          <Switch>
            <Route path='/'>
              <RenderMain component='Home' name='Trang chủ' />
            </Route>
            <Route path='/Home'>
              <RenderMain component='Home' name='Trang chủ' />
            </Route>
            <Route path='/Login'>
              <RenderMain component='Login' name='Đăng nhập' />
            </Route>
          </Switch>
        </div>
      </main>
    )
  }
}
