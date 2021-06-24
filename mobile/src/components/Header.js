import React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';

import Logo from '../../assets/header.svg'
import colors from '../styles/colors';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo
        style={styles.logo}
        width={150}
        height={40}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logo: {
    marginVertical: 12,
  }
});
