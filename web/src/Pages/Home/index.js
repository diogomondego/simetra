import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

import { Header } from '../../Components/Header'
import { PostsList } from '../../Components/PostsList'
import api from '../../services/api'

export function Home() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(2)

  async function fetchPosts() {
    const { data } = await api.get(`/posts/?limit=6&page=${page}`)
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <Header />
      <main>
        <div>
          <div className={styles.header}>
            <h1>Blog</h1>
            <div className={styles.rectangle} />
          </div>
          <section>
            <PostsList posts={posts} />
          </section>
        </div>
      </main>
    </div>
  )
}
