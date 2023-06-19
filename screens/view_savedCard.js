import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import {ShopCard} from '../components/shopCard'

export default function View_savedCard({ route }) {
  const {card, shown} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ShopCard drawnCard={card}/>
        {
          (shown) ?
            <Image style={styles.conversationImg} source={require(`../assets/conversation/section-burgerman-speech-drawFromMyCard-result.png`)}/>
          :
            null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D7F8F0',
    flex: 1
  },
  content: {
    position: 'relative',
    top: 120,
    alignSelf: 'center'
  },
  conversationImg: {
    height: 70,
    width: 300,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 15
  }
});