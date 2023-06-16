import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';


import BottomTab from './shared/bottomTab';
import Homepage from './screens/homepage';
import Drawcard_step1 from './screens/drawcard_step1';
import Drawcard_result from './screens/drawcard_result';
import MyCard from './screens/myCard';
import Drawcard_stack from './routes/drawcard_stack';
import Viewcard_stack from './routes/viewCard_stack';
import ViewEgg_stack from './routes/viewEgg_stack';
import ViewWallpaper_stack from './routes/viewWallpaper_stack';

SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

let customFonts = {
  'lazy-dog': require('./assets/fonts/lazy_dog.ttf'),
    'NotoSansTC-Medium': require('./assets/fonts/NotoSansTC-Medium.otf'),
    'NotoSansTC-Regular': require('./assets/fonts/NotoSansTC-Regular.otf'),

};
export default function App() {
  const [fontsLoaded] = useFonts(customFonts);
  if(!fontsLoaded){
    return (
      <AppLoading/>

    )
  }

  // const [eggStatus, setEggStatus] = useState('none');

  // const GlobalState ={
  //   eggStatus, setEggStatus
  // }
  const handleCardPicked = ()=>{


  }
  return (
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
