import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'
import React ,{useState, useEffect, useCallback} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShopCard} from '../components/shopCard'
import {drawcardStyles} from '../components/drawcard_style'
import {globalStyles} from '../components/global_style'
import  {setGlobalState, useGlobalState} from '../shared/states'
import {GetallCards, SaveCard, ClearallCards, readFirstCard} from '../shared/myCard_data'



export default function DrawnCard({route, navigation}) {

  const {drawnCard} = route.params;
  const [saveCard, setSaveCard] = useState('');
  const [allCards, setAllCards] = useState({});
  const [clickToggle, setClickToggle]=useState(0);
  const [fstCard, setFstCard] = useState('');

  


 const handleClearCard=()=>{
  React.useCallback(async()=>{
    ClearallCards();
  },[])
 }

 const handleSaveCar=(drawnCard)=>{
  SaveCard(drawnCard);
 }
  
  // useEffect(()=>{
    
  //   //GetallCards(setAllCards)
  //   readFirstCard(setFstCard);
    

  // },[])
  SaveCard(drawnCard);
  

  

  //console.log(JSON.parse(allCards))
  //console.log(allCards.value)
  //console.log(fstCard);

  


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
             />
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