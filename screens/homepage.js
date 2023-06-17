import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React ,{useState, useEffect} from 'react'


import { globalStyles } from '../components/global_style'

export default function Homepage({navigation}) {

  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const [imagePlace, setImage] = useState(""); // initialize it to an empty string
  const [isLoadImage, setLoadImage] = useState(true);


  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');

  (function() {
      var cors_api_host = 'cors-anywhere.herokuapp.com';
      var cors_api_url = 'https://' + cors_api_host + '/';
      var slice = [].slice;
      var origin = window.location.protocol + '//' + window.location.host;
      var open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function() {
          var args = slice.call(arguments);
          var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
          if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
              targetOrigin[1] !== cors_api_host) {
              args[1] = cors_api_url + args[1];
          }
          return open.apply(this, args);
      };
  })();
  const CORS_ANYWHERE_HOST = 'https://cors-anywhere.herokuapp.com/';

  const apiKey= 'AIzaSyBF43lMa8RkSkIm0l4fbaioe-SR5LoiUdc';
  const userLocation = '24.80,120.99';

  useEffect(() => {
    setLoading(false);
    fetch(
      `${CORS_ANYWHERE_HOST}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation}&radius=1500&keyword=餐廳&language=zh-TW&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        setInfo(json);
        console.log(json)
        console.log(json?.results[0]?.photos[0].photo_reference);
        loadImage(json?.results[0]?.photos[0].photo_reference);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(true));
  }, []);

  const loadImage = async (photo_reference) => {
    try {
      const res = await fetch(
        `${CORS_ANYWHERE_HOST}https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photo_reference=${photo_reference}&key=${apiKey}`
      );
      const data = await res.blob();
      setImage(URL.createObjectURL(data));
    } catch (error) {
      console.error(error);
    }
  }


  
console.log('in home page')




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
          <TouchableOpacity style = {styles.homepageBtn}
              onPress={()=> navigation.navigate("Draw Card")}>
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
        {imagePlace ? (
            <Image source={{ uri: imagePlace }} style={{ width: 200, height: 200 }} />
          ) : (
            <></>
          )}
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