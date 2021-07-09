import React from 'react'
import { View, StyleSheet } from "react-native";

import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import colors from '../styles/colors';

export function PostsSkeleton() {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <View style={styles.skeleton}>
          <View style={styles.image} />
          <View style={styles.containerInside}>
            <View style={styles.box}>
              <View style={styles.title} />
              <View style={styles.description} />
            </View>
            <View style={styles.boxReadMore}>
              <View style={styles.readMore} />
            </View>
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
  },
  skeleton: {
    flexDirection: "row",
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
  boxReadMore: {
    paddingHorizontal: 30
  },
  readMore: {
    alignSelf: 'flex-end',
    width: 60,
    height: 14,
    borderRadius: 4,
  },
})