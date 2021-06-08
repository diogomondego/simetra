import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import api from '../services/api'

export default function Posts({ navigation }) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const res = await api.get('/posts')
      setPosts(res.data)
    }
    loadPosts()
  }, [])

  return posts
    .sort((a, b) => b.id - a.id)
    .map(post => {
      return (
        <TouchableOpacity
          style={styles.container}
          key={post.id}
          onPress={() => navigation.navigate('Post', { id: post.id })}
        >
          <Image
            style={styles.image}
            source={{ uri: `${post.image}` }}
          />
          <View style={styles.containerInside} >
            <View style={styles.box} >
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.description}>{post.description}</Text>
            </View>
            <Text style={styles.readMore}>LER MAIS</Text>
          </View>
        </TouchableOpacity>
      )
    })
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 21,
    borderRadius: 6.5,
    borderWidth: 0.5,
    // padding: 5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.00,
    // elevation: 5,
  },
  image: {
    width: 108,
    height: 118,
    resizeMode: 'cover',
    borderTopLeftRadius: 6.5,
    borderBottomLeftRadius: 6.5
  },
  containerInside: {
    flex: 1,
  },
  box: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'TitilliumWeb_700Bold',
    fontSize: 13,
    color: '#0DADAE',
  },
  description: {
    fontFamily: 'TitilliumWeb_400Regular',
    fontSize: 12,
    color: '#666666'
  },
  readMore: {
    fontFamily: 'TitilliumWeb_700Bold',
    fontSize: 9.8,
    color: '#0DADAE',
    textAlign: 'right',
    paddingRight: 30,
    paddingBottom: 10,
    letterSpacing: 0.1
  },
});
