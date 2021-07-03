import React from 'react';
import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';
import { TitilliumWeb_400Regular, TitilliumWeb_700Bold, useFonts } from '@expo-google-fonts/titillium-web';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Header from './src/components/Header'
import Home from './src/pages/Home'
import Post from './src/pages/Post'

const Stack = createStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    TitilliumWeb_400Regular,
    TitilliumWeb_700Bold,
  })
  // App só será carregado após carregamento das fontes
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Header />
      {/* Criar navegação passando as telas */}
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Post' component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
