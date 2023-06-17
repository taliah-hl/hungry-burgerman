import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import ReactStars from 'react-stars'

import {globalStyles} from '../components/global_style'

const textGglmap= "在google map查看>>";

const GenerateStars = (props)=>{
    const starCnt = props.starcnt;
    return(
      <ReactStars
        count={5}
        value = {starCnt}
        edit={false}
        color1={'#595959'}
        color2={'#f7c143'}
        size={20}
      />
    );
  
}

const GeneratePriceSymb = (props)=>{
  const priceCnt = props.pricecnt;
  return(
    <ReactStars
      count={priceCnt}
      value = {priceCnt}
      char={'$'}
      edit={false}
      color1={'black'}
      color2={'black'}
      size={18}

    />
  );

}

export const ShopCard=(props)=>{
  const drawnCard = props.drawnCard;
  const gglPhoto = props.gglPhoto;
  const gglmapLink = `http://maps.google.com/maps?z=12&t=m&q=place_id:${drawnCard.gglPalceId}`

  const [isLoading, setLoading] = useState(true);
  

  const [imagePlace, setImage] = useState([]);
  const [isLoadImage, setLoadImage] = useState(true);


  //start api

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

  // const apiKey= 'AIzaSyBF43lMa8RkSkIm0l4fbaioe-SR5LoiUdc';
  // const userLocation = '24.80,120.99';

  // const getShopUrl = [
  // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation}&radius=1500&keyword=餐廳&language=zh-TW&key=${apiKey}`,
  // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation}&radius=20000&keyword=餐廳&language=zh-TW&key=${apiKey}`,
  // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation}&radius=1500&keyword=飲料&language=zh-TW&key=${apiKey}`,
  // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation}&radius=10000&keyword=飲料&language=zh-TW&key=${apiKey}`,
  // ]
  // const places_photoUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='; 

  const OpenURLButton = ({url, children}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} 
      style={[globalStyles.contentText, styles.gglmapText]}  />;
  };




   

    return (
      <View style={styles.shopCardBg}>
        <View style={styles.cardBody}>
          <View style={styles.googleInfoRow}>
            
            <View style={styles.googleInfoGrid}>
              <Text style={[ globalStyles.contentText, styles.googleStarText]}> {drawnCard.gglStar} </Text>
              <GenerateStars starcnt={drawnCard.gglstar}/>
              <GeneratePriceSymb pricecnt={drawnCard.gglPrice}/>
            </View>
            
            
            

          </View>
          <View style={styles.shopPhoto}>
            <Image source={gglPhoto} style={{width: 300, height: '100%', resizeMode:'contain'}} ></Image>

          </View>
          <View style={styles.shopInfoRow}>
            <View style={styles.shopInfoIcon}>  <Image source={require('../assets/icon/card_home_icon.png')} style={globalStyles.contentIcon}></Image> </View>
            <View style={styles.shopInfoText}>
              <Text style={[globalStyles.contentText, styles.shopcardContentText]}> {drawnCard.name}</Text>
            </View>
          </View>

          <View style={styles.shopInfoRow}>
            <View style={styles.shopInfoIcon}> <Image source={require('../assets/icon/card_locat_icon.png')} style={globalStyles.contentIcon} ></Image> </View>
            <View style={styles.shopInfoText}>
              <Text style={[globalStyles.contentText, styles.shopcardContentText]}>{drawnCard.addr}</Text>
            </View>
          </View>
          
              <OpenURLButton url={gglmapLink}>{textGglmap}</OpenURLButton>
              

          
        </View>
      </View>
    )
  
}

//<Text style={[globalStyles.contentText, styles.gglmapText]}> {textGglmap} </Text>





const styles = StyleSheet.create({
    shopCardBg:{
        height: 380,
        width: 310,
        backgroundColor: '#FFF7E4',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        shadowColor:'#000000',
        shadowOffset:{width: 2, height: 2},
        shadowOpacity:0.15,
        shadowRadius: 20,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'column',
        

    },
    cardBody:{
      justifyContent: 'center',
      alignItems:'center',
      alignContent: 'stretch',
      flexDirection:'column',

      flex: 1,
      gap: 5,
      height: '100%',
      width: '100%',
      paddingHorizontal: 28,
      paddingBottom: 16,
      paddingTop: 6,


    },
    googleInfoRow:{

      flex:1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignSelft: 'flex-end',
      width: '100%',

    },
    googleStarText:{
      fontSize: 16,
      textAlign: 'flex-end',
      alignSelf: 'flex-end',
    },
    googleInfoGrid:{
      flex: 1,
      alignSelf: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignSelft: 'flex-end',

    },

    shopPhoto:{
      flex:6,
      
    },
    shopInfoRow:{
      flex: 2,
      marginTop: 10,
      justifyContent: 'center',
      alignContent: 'stretch',
      flexDirection:'row',
      width: '100%',

    },
    shopInfoIcon:{
      flex: 2,
      borderColor: '#000000',

    },
    shopInfoText:{
      flex: 12,
      borderColor: '#000000',
    },

    secGooglemap:{
      flex: 2,
      
     paddingBottom: 2,
      

    },
    gglmapText:{
      textAlignVertical: 'bottom',
      color: '#0637B5',
      textDecorationLine:'underline',
      
      marginVertical: 5,

    }
    



})