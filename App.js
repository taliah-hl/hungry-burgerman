import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BottomTab from './shared/bottomTab';
import Homepage from './screens/homepage';
import Drawcard_step1 from './screens/drawcard_step1';
import Drawcard_result from './screens/drawcard_result';
import MyCard from './screens/myCard';
import View_wallpaper from './screens/view_wallpaper';
import Drawcard_stack from './routes/drawcard_stack';
import Viewcard_stack from './routes/viewCard_stack';
import ViewEgg_stack from './routes/viewEgg_stack';
import ViewWallpaper_stack from './routes/viewWallpaper_stack';

//const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
   
    <BottomTab/>
      
    </NavigationContainer>  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
