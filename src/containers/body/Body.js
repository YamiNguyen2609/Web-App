import React from 'react'
import Module from '../module'
import Main from '../main'
import { BrowserRouter as Router } from 'react-router-dom'

export default function Body() {
  return (
    <div className='app-body'>
      <Router>
        <Module />
        <Main />
      </Router>
    </div>
  )
}
