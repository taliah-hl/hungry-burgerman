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
import emptyTesting from '../screens/emptyTesting';
import Home_stack from '../routes/home_stack';
import TestingCard from '../screens/testing';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ImageBackground } from 'react-native-web';

const Tab = createBottomTabNavigator();

const BottomTab=() =>{
    return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused,  size, color}) => {
            let iconName;

            // Set the appropriate icon based on the route name
            if (route.name === 'Home') {
                iconName = "home-variant";
            } else if (route.name === 'Draw Card') {
                iconName = "cards";
            }else if(route.name==='My Card'){
                iconName =  "view-grid";
            }else if(route.name==='Burger Wallpaper'){
                iconName = "hamburger";
            }
            if(focused) color="#337755"
            else color="#878787"
            
            // Return the icon component
            return <MaterialComIcon name={iconName} size ={25} color={color} />;
        },
        tabBarActiveTintColor: "#337755",
        tabBarInactiveTintColor: "#878787",
        tabBarLabelStyle: {
            "fontSize": 12,
           
     
        },
        tabBarStyle:{
            backgroundColor: "#fff",
        }
        })}
        >
        <Tab.Screen name="Home" component={Homepage} options={{headerShown: false}}/>
        <Tab.Screen name="Draw Card" component={Drawcard_stack} options={{headerShown: false, unmountOnBlur: true}}/>
        <Tab.Screen name="My Card" component={Viewcard_stack} 
            options={{headerBackVisible:true, 
            headerTransparent: true, headerTitle: "",
             unmountOnBlur: true,
             screenOptions:{tabBarStyle:{ backgroundColor: "transparent", }}
             }}
            
            />
        <Tab.Screen name="Burger Wallpaper" component={ViewWallpaper_stack} options={{headerBackVisible:true, headerTransparent: true, headerTitle: "", unmountOnBlur: true}}/> 
        {/* <Tab.Screen name = "empty test"  component={emptyTesting} options={{unmountOnBlur: true}}/> */}

    </Tab.Navigator>
    )

}
export default BottomTab

const styles = StyleSheet.create({})