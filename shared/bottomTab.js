import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../screens/homepage';
import Drawcard_step1 from '../screens/drawcard_step1';
import Drawcard_result from '../screens/drawcard_result';
import MyCard from '../screens/myCard';
import Drawcard_stack from '../routes/drawcard_stack';
import Viewcard_stack from '../routes/viewCard_stack';
import ViewEgg_stack from '../routes/viewEgg_stack';
import ViewWallpaper_stack from '../routes/viewWallpaper_stack';

const Tab = createBottomTabNavigator();

const BottomTab=() =>{
    return(
    <Tab.Navigator>

        <Tab.Screen name="Home" component={Homepage} options={{headerShown: false}}/>
        <Tab.Screen name="Draw Card" component={Drawcard_stack} options={{headerShown: false}}/>
        <Tab.Screen name="My Card" component={Viewcard_stack} options={{headerShown: false}}/>
        <Tab.Screen name="Burger Wallpaper" component={ViewWallpaper_stack} options={{headerShown: false}}/> 

    </Tab.Navigator>
    )

}
export default BottomTab

const styles = StyleSheet.create({})