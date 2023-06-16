import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"
import React from 'react';

import Homepage from '../screens/homepage'
import Drawcard_stack from './drawcard_stack'
import ViewCard_stack from './viewCard_stack'
import ViewWallpaper_stack from './viewWallpaper_stack'

const Stack = createNativeStackNavigator();

export default function Home_stack(){
    return(
    <Stack.Navigator>
        <Stack.Screen name = "homepage" component ={Homepage}/>
        <Stack.Screen name = "Draw Card" component = {Drawcard_stack}/>
        <Stack.Screen name = "My Card" component = { ViewCard_stack }/>
        <Stack.Screen name = "ViewWallpaper" component = { ViewWallpaper_stack }/>

    </Stack.Navigator>
    )
}