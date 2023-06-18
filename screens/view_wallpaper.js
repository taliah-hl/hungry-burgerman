import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  ImageBackground,
} from 'react-native';

const styles = StyleSheet.create({})

export default function View_wallpaper(imgSource) {
  return (
    <ImageBackground source={imgSource} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
    </ImageBackground>
  )
}