import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import {ShopCard} from '../components/shopCard'

const CARDDATA =   {
    shopId:1,
    shopName: '豬多好室',
    shopPhotoUrl: require('../assets/my_card.jpg'),
    shopAddr: '新竹',
    shopGglstar: 5,
    shopGglPrice: '$$'

  }


export default function Drawcard_result() {
  const [pickedCard, setPickedCard]=useState(
    {
      shopId:1,
      shopName: '豬多好室',
      shopPhotoUrl: require('../assets/my_card.jpg'),
      shopAddr: '新竹',
      shopGglstar: '5',
      shopPrice: '$$'
  
    }
  )
  console.log("hi")
  console.log(pickedCard);
  return (
    <View>
     
      <View style={styles.secCard}>
        <View style={{alignSelf: 'center'}}>
          <ShopCard pickedCard = {pickedCard}

          />
        </View>
      </View>
     
    </View>
  )
  
}


const styles = StyleSheet.create({
  secCard:{
    marginTop: 50,
    
    
  }
})