import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Posts({ post }) {

  const navigation = useNavigation()
  return (
    <RectButton
      style={styles.container}
      key={post.id}
      // Passar dado 'id' pela navigation
      onPress={() => navigation.navigate('Post', { id: post.id })}
    >
      <Image
        style={styles.image}
        source={{ uri: `${post.image}` }}
      />
      <View style={styles.rectangle} />
      <View style={styles.containerInside} >
        <View style={styles.box} >
          <Text
            style={styles.title}
            numberOfLines={1}
          >
            {post.title}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={2}
          >
            {post.description}
          </Text>
        </View>
        <Text style={styles.readMore}>LER MAIS</Text>
      </View>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    borderRadius: 7.5,

    // Para funcionar o box shadow necessita de:
    backgroundColor: colors.white_background,

    // Box shadow iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    // Box shadow Android
    elevation: 6,
    marginHorizontal: 30
  },
  image: {
    width: 110,
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 7.5,
    borderBottomLeftRadius: 7.5,
  },
  rectangle: {
    position: 'absolute',
    left: 96,
    bottom: 16,
    width: 30,
    borderWidth: 1.5,
    borderColor: colors.yellow,
    backgroundColor: colors.yellow,
    transform: [
      { rotateZ: "1.2deg" }
    ],
  },
  containerInside: {
    flex: 1,
    paddingVertical: 10,
  },
  box: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 14,
    color: colors.green,
  },
  description: {
    fontFamily: fonts.text,
    fontSize: 13,
    color: colors.gray,
  },
  readMore: {
    fontFamily: fonts.heading,
    fontSize: 11,
    color: colors.green,
    textAlign: 'right',
    paddingRight: 30,
    letterSpacing: 1,
  },
});
