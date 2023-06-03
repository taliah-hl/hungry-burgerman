import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import WallpaperSet from '../screens/wallpaperSet'
import View_wallpaper from '../screens/view_wallpaper'



const Stack = createNativeStackNavigator();

export default function ViewWallpaper_stack(){
    <Stack.Navigator>
        <Stack.Screen name = "wallpaper set" component={ WallpaperSet }/>
        <Stack.Screen name = "view wallpaper" component={ View_wallpaper }/>
    </Stack.Navigator>
}