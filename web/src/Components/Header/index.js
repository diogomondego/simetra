import React from 'react'
import styles from './styles.module.css'

import logo from '../../assets/header.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/">
          <img src={logo} alt='Simetra' className={styles.logo} />
        </a>
      </nav>
    </header>
  )
}