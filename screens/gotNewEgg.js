import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, {useState, useEffect}  from 'react'
import  {setGlobalState, useGlobalState} from '../shared/states'

export default function GotNewEgg({navigation, route}) {
  
  const {drawnCard, gglPhoto} = route.params;

  

   
  
  console.log(`in gotNewEgg, eggStatus: ${useGlobalState('eggStatus')[0]}`);
  return (
    <View style={styles.container}>
   
   <TouchableOpacity 
      style={{height: '100%'}}
      onPress={()=>navigation.navigate('Drawn card', {drawnCard: drawnCard, gglPhoto: gglPhoto})}>
        <Image source={require('../assets/got-new-egg-body.png')} style={{width: 270, height: '100%', resizeMode: 'contain'}} />
           
        
      
   </TouchableOpacity>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#D7F8F0",
    height:'100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
})