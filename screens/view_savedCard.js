import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

export default function View_savedCard({ route, navigation }) {
  const { title, img } = route.params;
  return (
    <View>
      <Text>{title}</Text>
      <Image source={require(`../assets/${img}`)}/>
      <Button title='back' onPress={()=>navigation.navigate("My Card set") }/>
    </View>
  )
}

const styles = StyleSheet.create({})