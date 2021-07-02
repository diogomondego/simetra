import React from 'react'
import './styles.css'

import logo from '../../assets/header.svg'

export function Header() {
  return (
    <header>
      <nav className='container'>
        <a href="/">
          <img src={logo} className='logo' />
        </a>
      </nav>
    </header>
  )
}