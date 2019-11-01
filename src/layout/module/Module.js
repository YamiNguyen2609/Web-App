import React from 'react'
import { Link } from 'react-router-dom'

export default function Module() {
  return (
    <ul className='sidebar'>
      <nav className='sidebar-nav'>
        <ul className='nav'>
          <li className='nav-item'>
            <Link to='/Home' className='nav-link'>
              <i className='nav-icon icon-speedometer'></i> Dashboard
              <span className='badge badge-primary'>NEW</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Login' className='nav-link'>
              <i className='nav-icon icon-speedometer'></i> Dashboard
              <span className='badge badge-primary'>NEW</span>
            </Link>
          </li>
        </ul>
      </nav>
    </ul>
  )
}
