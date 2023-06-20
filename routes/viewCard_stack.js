import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native-web';


import MyCard from '../screens/myCard'
import View_savedCard from '../screens/view_savedCard'
import Iconicon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

export default function Viewcard_stack({navigation}){
    return (
    <Stack.Navigator>
        <Stack.Screen name = "My Card set" component = { MyCard } options={{ headerShown: false }}/>
        <Stack.Screen name = "view saved card" component = { View_savedCard } 
        options={{
            headerBackVisible:false,
            headerBackVisible:true, headerTransparent: true, headerTitle: "",
            headerLeft:()=>(
              <TouchableOpacity onPress={()=>
              {navigation.navigate("My Card set")
              console.log('back pressed')}}>
                <View style={{width:60, hegiht: 50, position: 'absolute',top: 0, left: 10}}>
                <Iconicon name="chevron-back" size={60} color="#444444"/>
                </View>
              </TouchableOpacity>)
            
          }}/>
    </Stack.Navigator>
    )
}