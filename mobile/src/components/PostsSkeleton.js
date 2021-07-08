import React from 'react'
import { View, StyleSheet } from "react-native";

import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export function PostsSkeleton() {
  return (
    <SkeletonPlaceholder>
      <View style={styles.container}>
        <View style={styles.image} />
        <View style={styles.containerInside}>
          <View style={styles.box}>
            <View style={styles.title} />
            <View style={styles.description} />
          </View>
          <View style={styles.readMore} />
        </View>
      </View>
    </SkeletonPlaceholder>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 20,
    flex: 1
  },
  image: {
    width: 110,
    height: 120,
    borderTopLeftRadius: 7.5,
    borderBottomLeftRadius: 7.5,
  },
  containerInside: {
    flex: 1,
    height: 100,
    paddingVertical: 10,
    marginTop: 15,
    marginLeft: 20,
  },
  box: {
    flex: 1
  },
  title: {
    width: 120,
    height: 14,
    borderRadius: 4
  },
  description: {
    width: 150,
    height: 13,
    marginTop: 8,
    borderRadius: 4,
  },
  readMore: {
    paddingRight: 30,
    alignSelf: 'flex-end',
    width: 60,
    height: 14,
    borderRadius: 4,
  },
})