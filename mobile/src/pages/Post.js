import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/core'
import { AntDesign } from '@expo/vector-icons'

import Footer from '../components/Footer';

import api from '../services/api'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

// route busca dados passados na navigation
export default function Post({ route }) {
  const [post, setPost] = useState([])

  const id = route.params.id
  const navigation = useNavigation()

  async function loadPost() {
    const { data } = await api.get(`/posts/${id}`)
    setPost(data)
  }

  useEffect(() => {
    loadPost()
  }, [])

  while (post.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={colors.green} />
      </View>
    )
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}

      // Persistir o scrollIndicator na borda 0 (zero) a direita
      scrollIndicatorInsets={
        { left: 1 }
      }
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.homeText}>
            Início <AntDesign name='right' style={styles.iconRight} /> Blog
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>{post.title}</Text>

        <Image
          style={styles.image}
          source={{ uri: `${post.image}` }}
        />
        <Text style={styles.text}>{post.text}</Text>
        <View style={styles.rectangle} />
      </View>
      <Footer />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: colors.white_background,
    justifyContent: 'space-between'
  },
  container: {
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  homeButton: {
    marginTop: 24,
    alignSelf: 'flex-start'
  },
  homeText: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.green,
  },
  iconRight: {
    color: '#C4C4C4'
  },
  title: {
    marginTop: 24,
    marginBottom: 16,
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.gray,
    alignSelf: 'flex-start',
    lineHeight: 40,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width * 0.4,
    resizeMode: 'cover',
    marginVertical: 24,
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 18,
    color: colors.gray,
    alignSelf: 'flex-start'
  },
  rectangle: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginTop: 48
  }
});
