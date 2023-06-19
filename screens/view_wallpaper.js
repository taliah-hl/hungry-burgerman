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

export default function View_wallpaper({ route, navigation }) {

  const { navigateURL } = route.params;

  console.log(navigateURL);

  return (
    <ImageBackground source={navigateURL} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
    </ImageBackground>
  )
}