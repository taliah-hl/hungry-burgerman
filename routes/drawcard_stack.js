import { createStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"
import React from 'react';

import Drawcard_step1 from '../screens/drawcard_step1';
import Drawcard_step2 from '../screens/drawcard_step2';
import Drawcard_animation from '../screens/drawcard_animation';

// const screens = {


//     Drawcard_step1:{
//         screen: Drawcard_step1,
//         navigationOptions:{}
//     },
//     Drawcard_step2:{
//         screen: Drawcard_step2,
//         navigationOptions:{}
//     },
//     Drawcard_animation:{
//         screen: Drawcard_animation,
//         navigationOptions:{}
//     }



// };

const Stack = createStackNavigator();

export default function Drawcard_stack(){
    return(
      
         <Stack.Navigator>
            <Stack.Screen name="Draw card step 1" component = {Drawcard_step1}/>
            <Stack.Screen name="Draw card step 2" component = {Drawcard_step2}/>
            <Stack.Screen name="Draw card animation" component = {Drawcard_animation}/>
        </Stack.Navigator>
       
    )
}

