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

export default function View_wallpaper_1_4() {
  return (
    <ImageBackground source={require('../assets/wallpaper_writer1/wallpaper_origin4.jpg')} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
      {/* <Text>View_wallpaper</Text>  */}
    </ImageBackground>
  )
}