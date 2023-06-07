import { StyleSheet, Image, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg';
import {globalStyles} from '../components/global_style'
import SpeechBubble_2line_toRight from '../components/speechBubble_2line_toRight'

export default function Drawcard_step1({ navigation }) {
  return (
    <ImageBackground source={require('../assets/drawcard-bg.jpg')}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
    <View style={styles.container}>
    <View style = {styles.uppersection}>
      <View style = {styles.progressBar}></View>
      <View style = {styles.burgermanSpeech}>
        <View style={styles.speechBubble}>
          <SpeechBubble_2line_toRight/>
        </View>
        <View style={styles.bugermanSmall}>
          <Image source={require('../assets/burgerman.png')}
           style={styles.bugermanpic} />
        </View>

      {/* <SvgUri width="100%" jeight="100%"
        source={require('../assets/speech_bubble-2line-toright.svg')}
      /> */}

      
      </View>
    </View>
    <View style = {styles.lowersection}>
      <View style={globalStyles.pairGreenBtnsLarge}>
        
        <View style={globalStyles.greenBtnFrameLarge}>
         <TouchableOpacity style = {globalStyles.greenCircleBtnLarge}
          onPress={()=> navigation.navigate('Draw card step 2')}>
          <Image source = {require('../assets/meal.png')}
            style={globalStyles.greenCircleBtnIconLarge}
          />
         </TouchableOpacity>
        <Text style = {globalStyles.greenBtnTextLarge}>吃的</Text>
        </View>
        
        <View style={globalStyles.greenBtnFrameLarge}>
         <TouchableOpacity style = {globalStyles.greenCircleBtnLarge}
          onPress={()=> navigation.navigate('Draw card step 2')}>
          <Image source = {require('../assets/soda.png')}
              style={globalStyles.greenCircleBtnIconLarge}
          />
         </TouchableOpacity>
        <Text style = {globalStyles.greenBtnTextLarge}>喝的</Text>
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
    borderWidth: 2,
    borderColor: 'red',
  },
  lowersection:{
    flex:3,
    justifyContent: 'center',
    alignItem: 'flex-start',
    borderWidth: 2,
    borderColor: 'red',
  },
  progressBar:{
    flex:1,
    

  },
  burgermanSpeech:{
    flex:1,
    flexDirection: 'row',
  
  },
  speechBubble:{
    flex: 4,
    borderWidth: 2,
    borderColor: 'green',
  },
  bugermanSmall:{
    flex: 1,
  },
  bugermanpic:{
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    transform:[{rotate: '8.36deg'}],
  }



})