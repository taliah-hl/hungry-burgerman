import { StyleSheet, Image, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg';
import {globalStyles} from '../components/global_style'
import {drawcardStyles} from '../components/drawcard_style'
import {BtnTextMedium} from '../components/typography'


export default function Drawcard_step1({ navigation }) {
  return (
    <ImageBackground source={require('../assets/bg/drawcard-bg.jpg')}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
    <View style={styles.container}>
    <View style = {styles.uppersection}>
      <View style = {styles.progressBar}></View>
      <View style = {drawcardStyles.burgermanSpeech}>
       
          <Image source={require('../assets/conversation/speechAndBurgerman-drawcard-step1.png')}
           style={drawcardStyles.bugermanSpeechImg} />
        
      
      </View>
    </View>
    <View style = {styles.lowersection}>
      <View style={globalStyles.pairGreenBtnsLarge}>
        
        <View style={globalStyles.greenBtnFrameLarge}>
         <TouchableOpacity style = {globalStyles.greenCircleBtnLarge}
          onPress={()=> navigation.navigate('Draw card step 2',  {foodOrDrink: 'food'})}>
          <Image source = {require('../assets/icon/meal.png')}
            style={globalStyles.greenCircleBtnIconLarge}
          />
         </TouchableOpacity>
        <Text style = {globalStyles.btnTextMedium}>吃的</Text>
        </View>
        
        <View style={globalStyles.greenBtnFrameLarge}>
         <TouchableOpacity style = {globalStyles.greenCircleBtnLarge}
          onPress={()=> navigation.navigate('Draw card step 2', {foodOrDrink: 'drink'})}>
          <Image source = {require('../assets/icon/soda.png')}
              style={globalStyles.greenCircleBtnIconLarge}
          />
         </TouchableOpacity>
        <Text style = {globalStyles.btnTextMedium}>喝的</Text>
        </View>
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
    flexDirection: 'column',
    

  },
  uppersection:{
    flex:2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // borderWidth: 2,
    // borderColor: 'red',
  },
  lowersection:{
    flex:3,
    justifyContent: 'center',
    alignItem: 'flex-start',
    // borderWidth: 2,
    // borderColor: 'red',
  },
  progressBar:{
    flex:1,
    

  },

})