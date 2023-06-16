import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function View_egg_hatching() {
  return (
    <ImageBackground source={require('../assets/egg_hatching.png')} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})