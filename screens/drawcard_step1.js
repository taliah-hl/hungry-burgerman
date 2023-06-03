import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function Drawcard_step1({ navigation }) {
  return (
    <View>
      <Text>drawcard_step1</Text>
      <Button title='Eat' onPress={()=>navigation.navigate("Draw card step 2") }/>
    </View>
  )
}

const styles = StyleSheet.create({})