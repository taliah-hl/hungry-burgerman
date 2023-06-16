import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {ShopCard} from '../components/shopCard'
import {drawcardStyles} from '../components/drawcard_style'
import {globalStyles} from '../components/global_style'



export default function Drawcard_result() {
  const [pickedCard, setPickedCard]=useState(
    {
      shopId:1,
      shopName: '豬多好室',
      shopPhotoUrl: require('../assets/my_card.jpg'),
      shopAddr: '新竹',
      shopGglstar: 4.7,
      shopGglprice: 2,
  
    }
  )
  console.log("hi")
  console.log(pickedCard);
  return (
    <View style={styles.container}>
     
      <View style={styles.secCard}>
        <View style={{alignSelf: 'center'}}>
          <ShopCard pickedCard = {pickedCard}

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
            onPress={()=> navigation.navigate('Draw card step 2')}>
            <Image source = {require('../assets/icon/tick-icon.png')}
              style={{width: 57, height: '100%', resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <Text style = {globalStyles.btnTextMedium}>好挖</Text>
          </View>
          
          <View style={globalStyles.greenBtnFrameMedium}>
            <TouchableOpacity style = {globalStyles.greenCircleBtnMedium}
               onPress={()=> navigation.navigate('Draw card step 2')}>
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