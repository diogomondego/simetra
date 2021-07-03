import React from 'react'
import styles from './styles.module.css'

export function PostsList({ posts }) {
  return posts.map(post => {

    return (
      <article key={post.id} className={styles.article}>
        <aside className={styles.aside}>
          <img src={post.image} alt="Capa" />
        </aside>
        <div className={styles.content}>
          <div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
          <a href="/">LEIA MAIS</a>
        </div>
      </article>
    )
  })
}