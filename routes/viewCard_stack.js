import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MyCard from '../screens/myCard'
import View_savedCard from '../screens/view_savedCard'



const Stack = createNativeStackNavigator();



export default function Viewcard_stack(){
    <Stack.Navigator>
        <Stack.Screen name = "My Card" component = { MyCard }/>
        <Stack.Screen name = "view saved card" component = { View_savedCard }/>


    </Stack.Navigator>
}