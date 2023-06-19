import { StyleSheet, Image, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React ,{useState, useEffect, useCallback} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShopCard} from '../components/shopCard'
import {drawcardStyles} from '../components/drawcard_style'
import {globalStyles} from '../components/global_style'
import  {setGlobalState, useGlobalState} from '../shared/states'
import {GetallCards, SaveCard, ClearallCards, readFirstCard} from '../shared/myCard_data'


export default function View_savedCard({ route, navigation }) {
  
  const {card} = route.params;

  const loadImage = async (photo_reference) => {
    try {
      const res = await fetch(
        `${CORS_ANYWHERE_HOST}${places_photoUrl}${photo_reference}&key=${apiKey}`
      );
      const data = await res.blob();
      setDrawncard(drawnCard=> {
        return{
          ...drawnCard,
          photoUrl: URL.createObjectURL(data)
        }
      })

      
    } catch (error) {
      console.error(`error in photo api: ${error}`);
    }
  }


  console.log('in view save card');
  return (
    <View style={styles.container}>
      <View style={{position: 'relative',  top: 120, alignSelf: 'center'}} >

        <ShopCard 
            drawnCard = {card} 
            phtoUrl = {card.photoUrl}
             />
      </View>

      
    </View>
  )
  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#D7F8F0',
    height: '100%'
   
  }
})