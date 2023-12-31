import { StyleSheet, Image, Text, View, Button, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import {globalStyles} from '../components/global_style'
import {drawcardStyles} from '../components/drawcard_style'

export default function Drawcard_animation({route, navigation}) {

  const {foodOrDrink, walkOrDrive} = route.params;

  return (
    <ImageBackground source={require('../assets/bg/drawcard-bg.jpg')}
      resizeMode="cover"

      style={{flex: 1, justifyContent: 'center'}}>
      {/* Lala add */}
      <Image source={require('../assets/progressBar-step3.png')}
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
      {
        (walkOrDrive==='walk')?
        <Image source={require('../assets/icon/walk_icon.png')}
              style={drawcardStyles.clickedRecordBar_sub2_walk} />
      :
        <Image source={require('../assets/icon/drive_icon.png')}
                style={drawcardStyles.clickedRecordBar_sub2_drive} />
      }
      <View style={styles.container}>
      <View style = {styles.uppersection}>
      <View style = {styles.progressBar}></View>
        <View style = {drawcardStyles.burgermanSpeech}>
          <Image source={require('../assets/conversation/speechAndBurgerman-drawcard-animation.png')}
           style={drawcardStyles.bugermanSpeechImg} />

        </View>

      </View>

      
      <View style = {styles.lowersection}>
        <TouchableOpacity 
        onPress={()=> navigation.navigate("Draw card result", {foodOrDrink: foodOrDrink, walkOrDrive: walkOrDrive}) }
        style={styles.tmpPickCardBtn}
        >
          <Text style={{alignSelf: 'center'}}>click here</Text>
          <Image source={require('../assets/tarots-4pcs.png')}
            style={styles.tarotsImg}
          />
        </TouchableOpacity>
      </View>
      {/* <Text> {userChoice('foodOrDrink')} {userChoice('walkOrDrive')} </Text> */}
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
  tmpPickCardBtn:{
    
    justifyContent: 'center',
    alignItem: 'center',
  },
  tarotsImg:{
      width: "100%",
      height: 150,
      resizeMode: 'contain',
      alignSelf: 'center',
  }



})
  
