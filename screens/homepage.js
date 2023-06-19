import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React ,{useState, useEffect} from 'react'
import { CommonActions } from '@react-navigation/native'

import { globalStyles } from '../components/global_style'

export default function Homepage({navigation}) {
  


  return (
    <ImageBackground source={require('../assets/bg/homepage-bg.jpg')}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
    
       <View style = {styles.uppersection}>
       
       <Image source={require('../assets/icon/burgerman.png')}
           style={styles.bugermanpic} />

      </View>
      
        <View style = {styles.appTitle}>
        <Image source={require('../assets/appname.png')}
            style={{width: 270, height: 110, alignSelf: 'center', resizeMode: 'contain'}}
        />

        </View>
        <View style = {styles.btnsection}>
        
          <TouchableOpacity style = {styles.homepageBtn}onPress={()=>navigation.navigate("Draw Card")}>
            <Text style={globalStyles.btnYellowTitle} >Draw Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.homepageBtn}
              onPress={()=> navigation.navigate("My Card")}>
            <Text style={globalStyles.btnYellowTitle}>My Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.homepageBtn}
              onPress={()=> navigation.navigate("Burger Wallpaper")}>
            <Text style={styles.wallpaperBtn}>Burger Wallpaper</Text>
          </TouchableOpacity>
        </View>
       
      </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
    
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    
    
  },
  uppersection:{
    flex: 3,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    alignSelf: 'center',
    
  },
  bugermanpic:{
    width: 230, 
    height: '70%', 
    alignSelf: 'center', 
    margin: 30, 
    transform:[{rotate: '-7.52deg'}],
    resizeMode: 'contain',
  },
  lowersection:{
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    
  },
  appTitle:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    
    
  },
  btnsection:{
    flex: 2,
    
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    alignSelf: 'center',
   
    
    
  },
  homepageBtn:{
    backgroundColor: '#F5BE7D',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 231,
    height: 51,
    alignSelf: 'center',
    marginVertical: 5,
  },
  wallpaperBtn:{
    textAlign: 'center',
        color: '#FDFCED',
        fontFamily: 'lazy-dog',
        fontSize: 33,
  }


})