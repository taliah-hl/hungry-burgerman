import { StyleSheet, Image, Text, View, Button, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import {globalStyles} from '../components/global_style'
import {drawcardStyles} from '../components/drawcard_style'

export default function Drawcard_step2({ navigation }) {
  return (
    <ImageBackground source={require('../assets/drawcard-bg.jpg')}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
    <View style={styles.container}>
    <View style = {styles.uppersection}>
      <View style = {styles.progressBar}></View>
      <View style = {drawcardStyles.burgermanSpeech}>
        <Image source={require('../assets/speechAndBurgerman-drawcard-step2.png')}
           style={drawcardStyles.bugermanSpeechImg} />

      </View>
    </View>
    <View style = {styles.lowersection}>
      <View style={globalStyles.pairGreenBtnsLarge}>
        
        <View style={globalStyles.greenBtnFrameLarge}>
         <TouchableOpacity style = {globalStyles.greenCircleBtnLarge}
          onPress={()=> navigation.navigate('Draw card animation')}>
          <Image source = {require('../assets/walk.png')}
            style={globalStyles.greenCircleBtnIconLarge}
          />
         </TouchableOpacity>
        <Text style = {globalStyles.btnTextMedium}>走路</Text>
        </View>
        
        <View style={globalStyles.greenBtnFrameLarge}>
         <TouchableOpacity style = {globalStyles.greenCircleBtnLarge}
          onPress={()=> navigation.navigate('Draw card animation')}>
          <Image source = {require('../assets/car.png')}
              style={globalStyles.greenCircleBtnIconLarge}
          />
         </TouchableOpacity>
        <Text style = {globalStyles.btnTextMedium}>騎車/開車</Text>
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

