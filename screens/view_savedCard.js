import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function View_savedCard({ navigation }) {
  return (
    <View>
      <Text>View saved card</Text>
      <Button title='back' onPress={()=>navigation.navigate("My Card set") }/>
    </View>
  )
}

const styles = StyleSheet.create({})