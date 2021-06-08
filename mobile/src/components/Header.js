import React from 'react';
import { StyleSheet, View } from 'react-native';

import Logo from '../../assets/header.svg'

export default function Header() {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0DADAE',
    alignItems: 'center',
    paddingTop: 30,
  },
  logo: {
    marginVertical: 12,
  }
});
