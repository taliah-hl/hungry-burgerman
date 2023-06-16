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

import View_egg_hatching from '../screens/view_egg_hatching'

const Stack = createNativeStackNavigator();

export default function ViewWallpaper_stack(){
  return(
    <Stack.Navigator>
        <Stack.Screen name = "wallpaper set" component={ WallpaperSet } options={{headerShown: false}}/>

        {/* view screen */}
        <Stack.Screen name = "view wallpaper 1" component={ View_wallpaper_1_1 } options={{headerShown: false}}/>
        <Stack.Screen name = "view wallpaper 2" component={ View_wallpaper_1_2 } options={{headerShown: false}}/>
        <Stack.Screen name = "view wallpaper 3" component={ View_wallpaper_1_3 } options={{headerShown: false}}/>
        <Stack.Screen name = "view wallpaper 4" component={ View_wallpaper_1_4 } options={{headerShown: false}}/>
        <Stack.Screen name = "view wallpaper 5" component={ View_wallpaper_1_5 } options={{headerShown: false}}/>

        <Stack.Screen name = "view egg hatching" component={ View_egg_hatching } />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})