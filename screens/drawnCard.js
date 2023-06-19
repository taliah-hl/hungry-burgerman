import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React ,{useState, useEffect} from 'react'
import {ShopCard} from '../components/shopCard'
import {drawcardStyles} from '../components/drawcard_style'
import {globalStyles} from '../components/global_style'
import  {setGlobalState, useGlobalState} from '../shared/states'

export default function DrawnCard({route, navigation}) {

  const {drawnCard, gglPhoto} = route.params;


  console.log('in card drawn here');
  return (
    <View style={styles.container}>
      <View style={{position: 'abosolute',  top: 40, alignSelf: 'center'}} >
      <View style={styles.burgermanSpeech}>
          <Image source={require('../assets/conversation/section-burgerman-speech-newCardPicked.png')}
            style={drawcardStyles.bugermanSpeechImg} />
        </View>
        <ShopCard 
            drawnCard = {drawnCard} 
            gglPhoto = {gglPhoto} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#D7F8F0",
    height:'100%',
    width: '100%',

  },
})