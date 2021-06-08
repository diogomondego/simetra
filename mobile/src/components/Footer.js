import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2021  Simetra - Laboratório Veterinário.</Text>
      <Text style={styles.text}>Todos os direitos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    backgroundColor: '#444444',
    alignItems: 'center',
    justifyContent: 'center',
    height: 114,
  },
  text: {
    color: '#EBEBEB',
    fontSize: 10
  }
});
