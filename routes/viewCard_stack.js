import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import MyCard from '../screens/myCard'
import View_savedCard from '../screens/view_savedCard'

const screens = {
    MyCard:{
        screen: MyCard,
        navigationOptions:{}
    },
    View_savedCard:{
        screen: View_savedCard,
        navigationOptions:{}
    }



};

const Viewcard_stack = createStackNavigator(screens);

export default Viewcard_stack;