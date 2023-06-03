import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import WallpaperSet from '../screens/wallpaperSet'
import View_egg_hatching from '../screens/view_egg_hatching'



const Stack = createNativeStackNavigator();

export default function ViewEgg_stack(){
    <Stack.Navigator>
        <Stack.Navigator>
            <Stack.Sreen name="wallpaper set" component = {WallpaperSet}/>
            <Stack.Sreen name="view egg hatching" component = {View_egg_hatching}/>
        </Stack.Navigator>


    </Stack.Navigator>
}