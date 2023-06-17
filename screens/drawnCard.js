import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ShopCard} from '../components/shopCard'
import  {setGlobalState, useGlobalState} from '../shared/states'

export default function DrawnCard({navigation}) {
  console.log('card drawn here');
  return (
    <View>
     <Text>Picked Card here</Text> 
    
    </View>
  )
}

const styles = StyleSheet.create({})