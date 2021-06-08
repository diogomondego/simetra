import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Posts from '../components/Posts'
import Footer from '../components/Footer';

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
    marginTop: 39,
    marginBottom: 18,
    fontFamily: 'TitilliumWeb_700Bold',
    fontSize: 32,
    color: '#666666'
  },
  rectangle: {
    width: 29,
    transform: [
      { rotateZ: "-1.98deg" }
    ],
    borderWidth: 4,
    borderColor: '#FBB03F',
    marginBottom: 31
  }
});
