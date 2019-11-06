import React from 'react'
import Module from '../module'
import Main from '../main'
import { BrowserRouter as Router } from 'react-router-dom'
import { Metrics } from '../../themes'

export default function Body() {
  return (
    <div
      className='app-body'
      style={{
        height: Metrics.windowHeight - 77,
        overflow: 'hidden',
        overflowY: 'auto'
      }}
    >
      <Router>
        <Module />
        <Main />
      </Router>
    </div>
  )
}
