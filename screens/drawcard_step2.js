import { StyleSheet, Image, Text, View, Button, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import {globalStyles} from '../components/global_style'
import {drawcardStyles} from '../components/drawcard_style'

export default function Drawcard_step2({ route, navigation }) {

  const {foodOrDrink} = route.params;
  console.log(foodOrDrink);
  return (
    <ImageBackground source={require('../assets/bg/drawcard-bg.jpg')}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>

    {/* Lala add */}
    <Image source={require('../assets/progressBar-step2.png')}
            style={drawcardStyles.progressBar_top} />
    <Image source={require('../assets/clickedRecordBar.png')}
           style={drawcardStyles.clickedRecordBar} />
    {
      (foodOrDrink==='food')?
      <Image source={require('../assets/icon/food_icon.png')}
            style={drawcardStyles.clickedRecordBar_sub1_food} />
    :
      <Image source={require('../assets/icon/drink_icon.png')}
              style={drawcardStyles.clickedRecordBar_sub1_drink} />
    }

      <View style={styles.container}>
    <View style = {styles.uppersection}>
      <View style = {styles.progressBar}></View>
      <View style = {drawcardStyles.burgermanSpeech}>
        <Image source={require('../assets/conversation/speechAndBurgerman-drawcard-step2.png')}
           style={drawcardStyles.bugermanSpeechImg} />

      </View>
    </View>
    <View style = {styles.lowersection}>
      <View style={globalStyles.pairGreenBtnsLarge}>
        
        <View style={globalStyles.greenBtnFrameLarge}>
         <TouchableOpacity style = {globalStyles.greenCircleBtnLarge}
          onPress={()=> navigation.navigate('Draw card animation', {foodOrDrink: foodOrDrink, walkOrDrive: 'walk'})}>
          <Image source = {require('../assets/icon/walk.png')}
            style={globalStyles.greenCircleBtnIconLarge}
          />
         </TouchableOpacity>
        <Text style = {globalStyles.btnTextMedium}>走路</Text>
        </View>
        
        <View style={globalStyles.greenBtnFrameLarge}>
         <TouchableOpacity style = {globalStyles.greenCircleBtnLarge}
          onPress={()=> navigation.navigate('Draw card animation', {foodOrDrink: foodOrDrink, walkOrDrive: 'drive'})}>
          <Image source = {require('../assets/icon/car.png')}
              style={globalStyles.greenCircleBtnIconLarge}
          />
         </TouchableOpacity>
        <Text style = {globalStyles.btnTextMedium}>騎車/開車</Text>
        </View>
        {/* <Text> food or drink: {foodOrDrink} </Text> */}
      </View>


    </View>
      
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingLeft: 31,
    paddingRight: 31,
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
 


})

