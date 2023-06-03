import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import WallpaperSet from '../screens/wallpaperSet'
import View_wallpaper from '../screens/view_wallpaper'

const screens = {
    WallpaperSet:{
        screen: WallpaperSet,
        navigationOptions:{}
    },
    View_wallpaper:{
        screen: View_wallpaper,
        navigationOptions:{}
    }



};

const ViewWallpaper_stack = createStackNavigator(screens);

export default ViewWallpaper_stack;