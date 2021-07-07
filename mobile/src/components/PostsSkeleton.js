import React from 'react'
import { View, StyleSheet } from "react-native";

import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import colors from '../styles/colors';

export function PostsSkeleton() {
  return (
    <SkeletonPlaceholder>
      <View style={{
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
        // marginHorizontal: 30,
        width: '100%',
        height: 120,
      }}>
      </View>
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