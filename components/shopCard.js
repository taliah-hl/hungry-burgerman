import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class ShopCard extends Component {

    constructor(props){
        super(props);
    }
  render() {
    return (
      <View style={styles.shopCardBg}>
        <Text>S</Text>
      </View>
    )
  }
}

export default ShopCard

const styles = StyleSheet.create({
    shopCardBg:{
        height: 440,
        width: 350,
        backgroundColor: '#FFF7E4',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        

    }

})