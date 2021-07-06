import React from 'react'
import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © 2021  Simetra - Laboratório Veterinário.{'\n'}
        Todos os direitos reservados.
      </p>
    </footer>
  )
}