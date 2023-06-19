import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import WallpaperSet from '../screens/wallpaperSet'

// view screen
import View_wallpaper_1_1 from '../screens/view_wallpaper_1_1'
import View_wallpaper_1_2 from '../screens/view_wallpaper_1_2'
import View_wallpaper_1_3 from '../screens/view_wallpaper_1_3'
import View_wallpaper_1_4 from '../screens/view_wallpaper_1_4'
import View_wallpaper_1_5 from '../screens/view_wallpaper_1_5'
import View_wallpaper from '../screens/view_wallpaper'

import View_egg_hatching from '../screens/egg_hatching'
import {Egg} from '../screens/egg'
import { TouchableOpacity } from 'react-native-web';
import Iconicon from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();

export default function ViewWallpaper_stack({navigation}){
  return(
    <Stack.Navigator>
        <Stack.Screen name = "wallpaper set" component={ WallpaperSet } options={{headerBackVisible:true, headerTransparent: true, headerTitle: "", unmountOnBlur: true}}/>

        <Stack.Screen name = "view wallpaper 1" component={ View_wallpaper_1_1 } options={{headerBackVisible:true, headerTransparent: true, headerTitle: ""}}/>
        <Stack.Screen name = "view wallpaper 2" component={ View_wallpaper_1_2 } options={{headerBackVisible:true, headerTransparent: true, headerTitle: ""}}/>
        <Stack.Screen name = "view wallpaper 3" component={ View_wallpaper_1_3 } options={{headerBackVisible:true, headerTransparent: true, headerTitle: ""}}/>
        <Stack.Screen name = "view wallpaper 4" component={ View_wallpaper_1_4 } options={{headerBackVisible:true, headerTransparent: true, headerTitle: ""}}/>
        <Stack.Screen name = "view wallpaper 5" component={ View_wallpaper_1_5 } options={{headerBackVisible:true, headerTransparent: true, headerTitle: ""}}/>
        <Stack.Screen name = "view wallpaper" component={ View_wallpaper } 
          options={{
            headerBackVisible:false,
            headerBackVisible:true, headerTransparent: true, headerTitle: "",
            headerLeft:()=>(
              <TouchableOpacity onPress={()=>
              {navigation.navigate("wallpaper set")
              console.log('back pressed')}}>
                <View style={{width:60, hegiht: 50, position: 'absolute',top: 0, left: 10}}>
                <Iconicon name="chevron-back" size={60} color="#444444"/>
                </View>
              </TouchableOpacity>)
            
          }}/>

        <Stack.Screen name = "view egg hatching" component={ View_egg_hatching } options={{headerBackVisible:true, headerTransparent: true, headerTitle: ""}}/>

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})