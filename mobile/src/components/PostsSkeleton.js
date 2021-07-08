import React from 'react'
import { View, StyleSheet } from "react-native";

import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import colors from '../styles/colors';

export function PostsSkeleton() {
  return (
    <SkeletonPlaceholder>
      <View style={styles.container} />
    </SkeletonPlaceholder>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    marginVertical: 20,
    borderRadius: 7.5,

    backgroundColor: colors.white_background,
  }
})