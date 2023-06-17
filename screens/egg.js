import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, {useState, useEffect}  from 'react'
import  {setGlobalState, useGlobalState} from '../shared/states'



//egg status: 0: no egg, 1: hathcing, 2: hatched
export const Egg=(props)=>{

  const [localEggStatus, setLocalEggStatus] = useState(1);
  useEffect(()=>{
    
    setLocalEggStatus(useGlobalState('eggStatus'[0]));
    
    console.log(`in egg, egg status: ${localEggStatus}`);
    

  })
    
    if(useGlobalState('eggStatus'[0])===0){
      return(
        <View style={styles.container}>
          <Text> U HAVE NO EGG</Text>
        </View>
      )
    }else if(useGlobalState('eggStatus'[0])===2){
      <View style={styles.container}>
          <Text> egg hatched !</Text>
        </View>
    }else{
      <View style={styles.container}>
      <Text> egg hatching !</Text>
    </View>
    }
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