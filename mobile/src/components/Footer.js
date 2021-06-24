import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © 2021  Simetra - Laboratório Veterinário.{'\n'}
        Todos os direitos reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    backgroundColor: colors.gray_footer,
    alignItems: 'center',
    justifyContent: 'center',
    height: 114,
  },
  text: {
    color: '#EBEBEB',
    fontSize: 11,
    textAlign: 'center',
    fontFamily: fonts.text,
  }
});
