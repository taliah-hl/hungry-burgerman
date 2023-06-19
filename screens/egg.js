import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, {useState, useEffect}  from 'react'
import  {setGlobalState, useGlobalState} from '../shared/states'



//egg status: 0: no egg, 1: hathcing, 2: hatched
export const Egg=()=>{

  const [localEggStatus, setLocalEggStatus] = useState(1);
  const globalEggStatus = useGlobalState('eggStatus')[0];
  useEffect(()=>{
    setLocalEggStatus(globalEggStatus);
    console.log(`in egg, egg status: ${localEggStatus}`);
  },[])
    
    if(localEggStatus===0){
      return(
        <View style={styles.container}>
          <Text> U HAVE NO EGG</Text>
        </View>
      )
    }else if(localEggStatus===2){
      return(
      <View style={styles.container}>
          <Text> egg hatched !</Text>
        </View>
      )
    }else{
      return(
      <View style={styles.container}>
      <Text> egg hatching !</Text>
    </View>
    )
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