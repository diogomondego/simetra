import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';

import Posts from '../components/Posts'
import Footer from '../components/Footer'

import api from '../services/api'
import colors from '../styles/colors'
import fonts from '../styles/fonts';



export default function Home() {
  const [posts, setPosts] = useState([])

  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)

  async function loadPosts() {
    const { data } = await api.get(`/posts/?limit=4&page=${page}`)

    if (page > 1) {
      setPosts(oldValue => [...oldValue, ...data])
    } else {
      setPosts(data)
    }

    setLoadingMore(false)
  }

  function handleFetchMore(distance) {
    if (distance < 1) {
      return
    }

    setLoadingMore(true)
    setPage(oldValue => oldValue + 1)
    loadPosts()
  }

  useEffect(() => {
    loadPosts()
  }, [])

  function header() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Blog</Text>
        <View style={styles.rectangle} />
      </View>
    )
  }
  function render(item) {
    return (
      <Posts post={item} />
    )
  }
  function footer() {
    return (
      <View>
        {loadingMore &&
          <ActivityIndicator color={colors.green} />}
        <Footer />
      </View>
    )
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      ListHeaderComponent={header}

      data={
        posts
          .sort((a, b) => b.published_at.localeCompare(a.published_at))
      }
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => render(item)}

      // Quando o usuário chegar a 10% do final da List
      onEndReachedThreshold={0.1}
      // O que quero fazer quando o de cima acontecer
      // Vou querer retirar a distante desse Reached
      onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}

      ListFooterComponent={footer}
      ListFooterComponentStyle={styles.footer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    marginTop: 25,
    marginBottom: 10,
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.gray
  },
  rectangle: {
    width: 29,
    transform: [
      { rotateZ: "-1.98deg" }
    ],
    borderWidth: 4,
    borderColor: colors.yellow,
    marginBottom: 25
  },

  // Estilo aplicado no ListFooterComponent
  // para funcionar o flexGrow
  footer: {
    // Crescer o componente
    flexGrow: 1,
    justifyContent: 'flex-end'
  }
});
