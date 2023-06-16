import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  {setGlobalState, useGlobalState} from '../shared/states'

export default function GotNewEgg() {

  setGlobalState('eggStatus', 1);
  console.log(useGlobalState('eggStatus'))
  console.log('egg got here');
  return (
    <View>
      <Text>GotNewEgg</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({})