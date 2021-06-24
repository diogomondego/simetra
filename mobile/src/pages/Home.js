import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Posts from '../components/Posts'
import Footer from '../components/Footer'

import colors from '../styles/colors'
import fonts from '../styles/fonts';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scroll} >
      <View style={styles.container}>
        <Text style={styles.title}>Blog</Text>
        <View style={styles.rectangle} />
        <Posts navigation={navigation} />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-between'
  },
  container: {
    paddingHorizontal: 30
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
  }
});
