import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import Footer from '../components/Footer';
import api from '../services/api'

export default function Post({ route, navigation }) {
  const id = route.params.id
  const [post, setPost] = useState([])

  useEffect(() => {
    async function loadPost() {
      const res = await api.get(`/posts/${id}`)
      setPost(res.data)
    }
    loadPost()
  }, [])

  return (
    post.map(item => {
      return (
        <ScrollView contentContainerStyle={styles.scroll} key={item.id}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.homeText}>Início <Text style={styles.iconRight}> > </Text> Blog</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
            <Image
              style={styles.image}
              source={{ uri: `${item.image}` }}
            />
            <Text style={styles.text}>{item.text}</Text>
            <View style={styles.rectangle} />
          </View>
          <Footer />
        </ScrollView>
      )
    })
  )
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-between'
  },
  container: {
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  homeButton: {
    marginTop: 18,
    alignSelf: 'flex-start'
  },
  homeText: {
    fontFamily: 'TitilliumWeb_400Regular',
    fontSize: 16,
    color: '#0DADAE',
  },
  iconRight: {
    color: '#666666',
  },
  title: {
    marginTop: 18,
    marginBottom: 14,
    fontFamily: 'TitilliumWeb_700Bold',
    fontSize: 32,
    color: '#666666',
    alignSelf: 'flex-start'
  },
  image: {
    width: 319,
    height: 137,
    resizeMode: 'cover',
    marginVertical: 28
  },
  text: {
    fontFamily: 'TitilliumWeb_400Regular',
    fontSize: 18,
    color: '#666666',
    alignSelf: 'flex-start'
  },
  rectangle: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginTop: 40
  }
});
