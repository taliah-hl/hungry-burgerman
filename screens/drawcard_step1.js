import { StyleSheet, Image, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import {globalStyles} from '../components/global_style'

export default function Drawcard_step1({ navigation }) {
  return (
    <View style={styles.container}>
    <View style = {styles.uppersection}>
      <View style = {styles.progressBar}></View>
      <View style = {styles.burgermanSpeech}>

      </View>
    </View>
    <View style = {styles.lowersection}>
      <View style={globalStyles.pairGreenBtnsLarge}>
        
        <View style={globalStyles.greenBtnFrameLarge}>
         <Button style = {globalStyles.greenCircleBtnLarge}>
          <Image source = {require('../assets/meal.png')}/>
         </Button>
        <Text style = {globalStyles.greenBtnTextLarge}>吃的</Text>
        </View>
        
        <View style={globalStyles.greenBtnFrameLarge}>
         <Button style = {globalStyles.greenCircleBtnLarge}>
          <Image source = {require('../assets/soda.png')}/>
         </Button>
        <Text style = {globalStyles.greenBtnTextLarge}>吃的</Text>
        </View>
      </View>


    </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingLeft: 31,
    paddingRight: 31,
    paddingTop: 107,
    justifyContent: 'center',
    flexDirection: 'column'

  },
  uppersection:{
    flex:2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  lowersection:{
    flex:3,
    justifyContent: 'center',
    alignItem: 'space-around',
  },
  progressBar:{
    flex:1,

  },
  burgermanSpeech:{
    flex:1,

  },



})