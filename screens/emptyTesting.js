import { StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList } from 'react-native'
import React ,{useState, useEffect, useCallback} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShopCard} from '../components/shopCard'
import {drawcardStyles} from '../components/drawcard_style'
import {globalStyles} from '../components/global_style'
import  {setGlobalState, useGlobalState} from '../shared/states'
import * as CardData from '../shared/myCard_data'

const Item = ({name, addr}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}>{addr}</Text>
  </View>
);



export default function EmptyTesting({navigation}) {
    console.log("in test page");
    const [cardlist, setCardlist] = useState([]);
    const [cardPromise, setCardPromise]=useState('');
    const [anotherCardlist, setanotherCardlist] = useState([]);
    const [fstcd, setFstcd]=useState('');
    const [isLoading, setLoading] = useState(true);
    
    // let cards=[];
    // for(k of cardKeys){
    //     cards.push(readCard(k));
    // }

    const getFirstCard = async()=>{
      try{
        const onecard = await AsyncStorage.getItem("ChIJP0riSl2pQjQRE2yfU1bcuPY")
        setCardlist(onecard)
      }catch(err){}
    }

    

    useEffect(()=>{
      setLoading(true);
      //   const cards = async()=>{
      //       const cardKeys = await getAllCardsKeys();
      //       for(k of cardKeys){
      //           const v = await readCard(k);
            
      //           setCardlist(cardlist.push(k))
      //       }
      //     setCardPromise(GetallCards)
            
      //   }
      CardData.readFirstCard(setFstcd);
      CardData.GetallCards(setCardlist);
      setLoading(false)
       },[] )

    console.log(`first card: ${fstcd}`);
    console.log(cardlist);
    //console.log(`cardlist:${JSON.stringify(anotherCardlist)}`)
    //console.log(`one card: ${anotherCardlist[0].name}`)
    //console.log(`card promise: ${cardPromise}`)
    
    

  return (
    <View>
      <Text>emptyTesting</Text>
      <Text> {fstcd.name}</Text>
      <Text> {fstcd.addr}</Text>
      {isLoading? 
        (<></>): (
        <FlatList
          data={cardlist}
          renderItem={({item}) => <Item name={item.name} addr={item.addr} />}
        />
      )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 15,
  },
});