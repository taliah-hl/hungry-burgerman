import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React ,{useState, useEffect} from 'react'
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
    drawFromGgl: true,

  },
  {
    shopId:1,
    shopName: '八曜和荼',
    shopPhotoUrl: require('../assets/my_card.jpg'),
    shopAddr: '八曜和荼addr',
    shopGglstar: 3.5,
    shopGglprice: 1,
    drawFromGgl: true,

  },
  {
    shopId:2,
    shopName: '很遠的餐廳',
    shopPhotoUrl: require('../assets/my_card.jpg'),
    shopAddr: '很遠的餐廳addr',
    shopGglstar: 3.5,
    shopGglprice: 1,
    drawFromGgl: true,

  },
  {
    shopId:3,
    shopName: '很遠的飲料',
    shopPhotoUrl: require('../assets/my_card.jpg'),
    shopAddr: '很遠的飲料addr',
    shopGglstar: 3.5,
    shopGglprice: 1,
    drawFromGgl: true,

  },



]


export default function Drawcard_result({ route, navigation }) {
 
  const {foodOrDrink, walkOrDrive} = route.params;
  const loadingText = 'Loading... :)';
  
  const eggCurStatus = useGlobalState('eggStatus')[0];
  
  console.log(`Egg status: ${eggCurStatus}`)
  console.log(`user choice: ${foodOrDrink}, ${walkOrDrive}`)

  const cardType = ((foodOrDrink==='food'? 0:1)<<1) + (walkOrDrive==='walk'? 0:1);
  console.log(`cardType=${cardType}`);
  
  const [drawnCard, setDrawncard]=useState( 
    {
      cardId: 0,
      name: '',
      photoUrl: '',
      addr: '',
      gglStar: 0,
      gglPrice: 0,
      drawFromGgl: true,
      gglPalceId: '',

    }
  );
  
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const [gglPhoto, setGglPhoto] = useState(""); // initialize it to an empty string
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
  const drawShopUrls = [
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation}&radius=1500&keyword=餐廳&language=zh-TW&key=${apiKey}`,
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation}&radius=20000&keyword=餐廳&language=zh-TW&key=${apiKey}`,
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation}&radius=1500&keyword=飲料&language=zh-TW&key=${apiKey}`,
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation}&radius=10000&keyword=飲料&language=zh-TW&key=${apiKey}`,
    ]
  const places_photoUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='; 

  useEffect(() => {
    setLoading(true);
    let randNum = Math.floor(Math.random() * 19);
    fetch(
      `${CORS_ANYWHERE_HOST}${drawShopUrls[cardType]}`
    )
      .then((response) => response.json())
      .then((json) => {
        setInfo(json?.results[randNum]);
        setDrawncard({
          cardId: 0,
          name: json?.results[randNum]?.name,
          photoUrl: '',
          addr: json?.results[randNum]?.vicinity,
          gglStar: json?.results[randNum]?.rating,
          gglPrice: (json?.results[randNum]?.price_level)? (json?.results[randNum]?.price_level): 0,
          drawFromGgl: true,
          gglPalceId: json?.results[randNum]?.place_id,
    
        });
        console.log(`shop photo reference: ${json?.results[randNum]?.photos[0].photo_reference}`);
        loadImage(json?.results[randNum]?.photos[0].photo_reference);
      })
      .catch((error) => console.error(`error in places api: ${error}`))
      .finally(() => setLoading(false));
  }, []);

  const loadImage = async (photo_reference) => {
    try {
      const res = await fetch(
        `${CORS_ANYWHERE_HOST}${places_photoUrl}${photo_reference}&key=${apiKey}`
      );
      const data = await res.blob();
      setGglPhoto(URL.createObjectURL(data));

      
    } catch (error) {
      console.error(`error in photo api: ${error}`);
    }
  }

  const loadDrawnCard=(info)=>{
    console.log('loaddrawnCard is excuted');
    let updateVal = {
      cardId: 0,
      name: info.name,
      photoUrl: gglPhoto,
      addr: info.vicinity,
      gglStar: rating,
      gglPrice: info.price_level? info.price_level: 0,
      drawFromGgl: true,
      gglPalceId: info.place_id,

    };
    setDrawncard({
      cardId: 0,
      name: info.name,
      photoUrl: gglPhoto,
      addr: info.vicinity,
      gglStar: rating,
      gglPrice: info.price_level? info.price_level: 0,
      drawFromGgl: true,
      gglPalceId: info.place_id,

    });

  }
  console.log(drawnCard);
  

  const handleGotNewEgg=(eggCurStatus)=>{
    
    console.log(`in drawcard, egg status: ${eggCurStatus}`);
    
    eggCurStatus?   navigation.navigate('Drawn card', {drawnCard: drawnCard, gglPhoto: gglPhoto})
      : 
      navigation.reset({
        index: 0,
        routes:[{
          name: "Got new egg",
          params: {drawnCard: drawnCard, gglPhoto: gglPhoto}
        }
        ]
      })

      //navigation.navigate('Got new egg', {drawnCard: drawnCard, gglPhoto: gglPhoto} );
    
  
  }
  const handleCardPickedNoEggGot=()=>{
  navigation.navigate('Drawn card');
  }
  
  const handleRedrawBtn=()=>{
  navigation.navigate('Draw card animation', {foodOrDrink: foodOrDrink, walkOrDrive: walkOrDrive})
  }

 
  return (


    <View style={styles.container}>
    
      
      <View style={styles.secCard}>
        <View style={{alignSelf: 'center'}}>
          {isLoading? (<View style={{height: 380, justifyContent: 'center'}}>
            <Text style={{fontSize: 30, fontFamily: 'NotoSansTC-Regular',color: '#4a4848'}}> {loadingText} </Text>
          </View>)
          
          :(<ShopCard 
              drawnCard = {drawnCard} 
              gglPhoto = {gglPhoto} /> )
          }
        </View>
      </View>
      {isLoading? 
        (<></>)
        :( <View style={styles.lowerSec}>
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
      
      )}
     
     
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
    marginTop: 30,
   
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