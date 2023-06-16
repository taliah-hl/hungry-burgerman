import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {ShopCard} from '../components/shopCard'
import {drawcardStyles} from '../components/drawcard_style'
import {globalStyles} from '../components/global_style'
import  {setGlobalState, useGlobalState} from '../shared/states'


const CardsCandidate =[
  {
    shopId:0,
    shopName: '豬多好室',
    shopPhotoUrl: require('../assets/my_card.jpg'),
    shopAddr: '新竹',
    shopGglstar: 4.7,
    shopGglprice: 2,

  },
  {
    shopId:1,
    shopName: '八曜和荼',
    shopPhotoUrl: require('../assets/my_card.jpg'),
    shopAddr: '八曜和荼addr',
    shopGglstar: 3.5,
    shopGglprice: 1,

  },
  {
    shopId:2,
    shopName: '很遠的餐廳',
    shopPhotoUrl: require('../assets/my_card.jpg'),
    shopAddr: '很遠的餐廳addr',
    shopGglstar: 3.5,
    shopGglprice: 1,

  },
  {
    shopId:3,
    shopName: '很遠的飲料',
    shopPhotoUrl: require('../assets/my_card.jpg'),
    shopAddr: '很遠的飲料addr',
    shopGglstar: 3.5,
    shopGglprice: 1,

  },



]


export default function Drawcard_result({ route, navigation }) {
 
  const {foodOrDrink, walkOrDrive} = route.params;
  const cardType = ((foodOrDrink==='food'? 0:1)<<1) + (walkOrDrive==='walk'? 0:1);
  console.log("cardType");
  console.log(cardType)
  const eggCurStatus = useGlobalState('eggStatus')[0];
  
  console.log("Egg status")
  console.log(eggCurStatus);

  const [pickedCard, setPickedCard]=useState( CardsCandidate[cardType] )

  const handleGotNewEgg=(eggCurStatus)=>{
    
    console.log('press handler got');
    console.log(eggCurStatus);
    eggCurStatus?   navigation.navigate('Drawn card') : navigation.navigate('Got new egg');
    
  
  }
  const handleCardPickedNoEggGot=()=>{
  navigation.navigate('Drawn card');
  }
  
  const handleRedrawBtn=()=>{
  navigation.navigate('Draw card animation')
  }

 
  return (
    <View style={styles.container}>
      <Text>egg status: {eggCurStatus}</Text>
      <View style={styles.secCard}>
        <View style={{alignSelf: 'center'}}>
          <ShopCard 
            pickedCard = {pickedCard}
            cardtype={cardType}
          />
        </View>
      </View>
      <View style={styles.lowerSec}>
        <View style={styles.burgermanSpeech}>
          <Image source={require('../assets/conversation/speechAndBurgerman-drawcard-result.png')}
            style={drawcardStyles.bugermanSpeechImg} />
        </View>
        <View style={[globalStyles.pairGreenBtnsMedium, styles.secActionBtn]}>
          <View style={globalStyles.greenBtnFrameMedium}>
          <TouchableOpacity style = {globalStyles.greenCircleBtnMedium}
              onPress={ ()=>handleGotNewEgg(eggCurStatus) }
            
            >
            <Image source = {require('../assets/icon/tick-icon.png')}
              style={{width: 57, height: '100%', resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <Text style = {globalStyles.btnTextMedium}>好挖</Text>
          </View>
          
          <View style={globalStyles.greenBtnFrameMedium}>
            <TouchableOpacity style = {globalStyles.greenCircleBtnMedium}
               onPress={handleRedrawBtn}>
              <Image source = {require('../assets/icon/redraw-icon.png')}
                style={{width: 65, height: '100%', resizeMode: 'contain'}}
                  />
            </TouchableOpacity>
            <Text style = {[globalStyles.btnTextMedium]}>不要,再抽一間</Text>
          </View>

        </View>
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
  secCard:{
    marginTop: 50,
   
  },
  lowerSec:{
    
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  burgermanSpeech:{
    
    
  },
  secActionBtn:{
    
    
  },

})