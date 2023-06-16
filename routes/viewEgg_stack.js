import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import WallpaperSet from '../screens/wallpaperSet'
import {Egg} from '../screens/egg'



const Stack = createNativeStackNavigator();

export default function ViewEgg_stack(){
    <Stack.Navigator>
        <Stack.Navigator>

            <Stack.Sreen name="wallpaper set" component = {WallpaperSet}/>
            <Stack.Sreen name="view egg" component = {Egg}/>
        </Stack.Navigator>
    </Stack.Navigator>
}