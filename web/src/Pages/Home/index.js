import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'

import api from '../../services/api'

export function Home() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(2)

  async function fetchPosts() {
    const { data } = await api.get(`/posts/?limit=7&page=${page}`)
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const latestPost = posts.slice(0, 1)
  const allPosts = posts.slice(1, posts.length)

  return (
    <div className={styles.home}>
      <Header />
      <main>
        <div>
          <div className={styles.header}>
            <h1 className={styles.title}>Blog</h1>
            <div className={styles.rectangle} />
          </div>
          <section className={styles.latestPost}>
            {latestPost.map(post => {
              return (
                <article key={post.id} className={styles.article}>
                  <aside className={styles.aside}>
                    <img src={post.image} alt="Capa" />
                  </aside>
                  <div className={styles.container}>
                    <div className={styles.content}>
                      <h2 className={styles.title}>{post.title}</h2>
                      <p className={styles.description}>{post.description}</p>
                    </div>
                    <div className={styles.readMore}>
                      <a href="/">LEIA MAIS</a>
                    </div>
                  </div>
                </article>
              )
            })}
          </section>
          <section className={styles.allPosts}>
            {allPosts.map(post => {
              return (
                <article key={post.id} className={styles.article}>
                  <aside className={styles.aside}>
                    <img src={post.image} alt="Capa" />
                  </aside>
                  <div className={styles.container}>
                    <div className={styles.content}>
                      <h2 className={styles.title}>{post.title}</h2>
                      <p className={styles.description}>{post.description}</p>
                    </div>
                    <div className={styles.readMore}>
                      <a href="/">LEIA MAIS</a>
                    </div>
                  </div>
                </article>
              )
            })}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
