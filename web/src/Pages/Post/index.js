import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import api from '../../services/api'

export function Post() {
  const { id } = useParams()
  const [post, setPost] = useState([])

  async function fetchPost() {
    const { data } = await api.get(`/posts/${id}`)
    setPost(data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.image}</p>
      <p>{post.text}</p>
    </div>
  )
}