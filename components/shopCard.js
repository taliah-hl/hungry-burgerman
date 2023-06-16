import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
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
        color2={'#FEF400'}
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
      size={20}

    />
  );

}

export const ShopCard=(props)=>{
  const drwanCard = props.pickedCard;
   

    return (
      <View style={styles.shopCardBg}>
        <View style={styles.cardBody}>
          <View style={styles.googleInfoRow}>
            {/* <Text style={[globalStyles.contentText,styles.googleStar]}> {drwanCard.shopGglstar} {drwanCard.shopGglprice} </Text> */}
            <View style={styles.googleInfoGrid}>
              <Text style={[ globalStyles.contentText, styles.googleStarText]}> {drwanCard.shopGglstar} </Text>
              <GenerateStars starcnt={drwanCard.shopGglstar}/>
              <GeneratePriceSymb pricecnt={drwanCard.shopGglprice}/>
            </View>
            
            
            

          </View>
          <View style={styles.shopPhoto}>
            <Image source={drwanCard.shopPhotoUrl} style={{width: 290, height:'100%', resizeMode:'contain'}} ></Image>

          </View>
          <View style={styles.shopInfoRow}>
            <View style={styles.shopInfoIcon}>  <Image source={require('../assets/icon/card_home_icon.png')} style={globalStyles.contentIcon}></Image> </View>
            <View style={styles.shopInfoText}>
              <Text style={[globalStyles.contentText, styles.shopcardContentText]}> {drwanCard.shopName}</Text>
            </View>
          </View>

          <View style={styles.shopInfoRow}>
            <View style={styles.shopInfoIcon}> <Image source={require('../assets/icon/card_locat_icon.png')} style={globalStyles.contentIcon} ></Image> </View>
            <View style={styles.shopInfoText}>
              <Text style={[globalStyles.contentText, styles.shopcardContentText]}>{drwanCard.shopAddr}</Text>
            </View>
          </View>
          
            
              <Text style={[globalStyles.contentText, styles.gglmapText]}> {textGglmap} </Text>
              
          
            
         
          
        </View>
      </View>
    )
  
}





const styles = StyleSheet.create({
    shopCardBg:{
        height: 440,
        width: 350,
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
      backgroundColor:'#eab676',
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
      flex:5,
      backgroundColor:'#76b5c5',
    },
    shopInfoRow:{
      flex: 2,
      backgroundColor:'#abdbe3',
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
      backgroundColor:'#eab676',

      borderBottomWidth: 2,
      borderBottomColor: '#0637B5',
      paddingBottom: 2,
      

    },
    gglmapText:{
      textAlignVertical: 'bottom',
      color: '#0637B5',
      textDecorationLine:'underline',
      backgroundColor: '#ffffff',
      marginVertical: 5,

    }
    



})