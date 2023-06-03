import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import WallpaperSet from '../screens/wallpaperSet'
import View_egg_hatching from '../screens/view_egg_hatching'

const screens = {
    WallpaperSet:{
        screen: WallpaperSet,
        navigationOptions:{}
    },
    View_egg_hatching:{
        screen: View_egg_hatching,
        navigationOptions:{}
    }



};

const ViewEgg_stack = createStackNavigator(screens);

export default ViewEgg_stack;