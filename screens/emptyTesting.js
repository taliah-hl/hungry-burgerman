import { StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList, ScrollView, Pressable } from 'react-native'
import React ,{useState, useEffect, useCallback} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShopCard} from '../components/shopCard'
import {drawcardStyles} from '../components/drawcard_style'
import {globalStyles} from '../components/global_style'
import  {setGlobalState, useGlobalState} from '../shared/states'
import * as CardData from '../shared/myCard_data'
import { Card } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'




export default function EmptyTesting({navigation}) {
    console.log("in test page");
    const [cardlist, setCardlist] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const handleCheckboxChange=(gglid)=>{

      //to do
      console.log('check box changed')
      let tmp = cardlist.map((card)=>{
        if(gglid=== card.gglPalceId) {
          return {...card,  isChecked: !card.isChecke}
        } return card
      })
      setCardlist(tmp);
    };

    const  Item=({item})=>(
      <View style={styles.card}>
        <Pressable onPress={() => handleCheckboxChange(item.gglPalceId)} >
          <MaterialIcon  name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={30} color="#000" />
        </Pressable>
        <TouchableOpacity >
          <View style={styles.cardHeader}>
            <Text style={styles.cardText}>{item.name}</Text>
    
          </View>
          <View style={styles.cardBody}>
            <Image style={styles.cardImg} source={require('../assets/my_card.jpg')}/>
          </View>
          
        </TouchableOpacity>
    
      
      </View>
    );
    
    // let cards=[];
    // for(k of cardKeys){
    //     cards.push(readCard(k));
    // }
 
    useEffect(()=>{
      const getCards = async()=>{
        await CardData.GetallCards(setCardlist);
        setLoading(false)
      }
      getCards();
      
      

    },[])
    
    console.log(cardlist);
    //console.log(`cardlist:${JSON.stringify(anotherCardlist)}`)
    //console.log(`one card: ${anotherCardlist[0].name}`)
    //console.log(`card promise: ${cardPromise}`)
    
    

  return (
    <View style={styles.page}>

      <View style={styles.header}>
        <Text style={styles.headerText}>{"My card"}</Text>
      </View>

      <View style={styles.body}>
        <ScrollView>
          {isLoading? 
          (<></>): (
            <FlatList
              numColumns={2}
              data={cardlist}
              renderItem={({item}) => <Item item={item} 
              keyExtractor={(item) => item.gglPalceId}
              />}
            />
          )
        }
        </ScrollView>
      </View>
    
        
  </View>
    
  )
}


const handleReset = (selectOne, setSelectOne, setSelectAll, setEditMode, setModalVisible, setDeleteBtnAvailable) => {
  const newSelectOne = selectOne.map(() => (
    false
  ));

  setSelectOne(newSelectOne);
  setSelectAll(false);
  setEditMode(false);
  setModalVisible(false);
  setDeleteBtnAvailable(false);
}

const handleSelectAll = (selectOne, setSelectOne, selectAll, setSelectAll, setDeleteBtnAvailable) => {
  const newSelectOne = selectOne.map(() => (
    (selectAll) ? false : true
  ));

  setSelectOne(newSelectOne);
  setSelectAll(!selectAll);
  setDeleteBtnAvailable((selectAll) ? false : true);
}

const handleOnValueChange = (index, selectOne, setSelectOne) => {
  const newSelectOne = selectOne.map((val, idx) => (
    (idx === index) ? !val : val
  ));

  setSelectOne(newSelectOne);
};



const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  
  header: {
    backgroundColor: "#38C097",
    height: 100,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 45,
    textAlign: 'center',
    fontFamily: 'lazy-dog',
    alignSelf: 'center',
  },
  editbtn: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  cancel: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    backgroundColor: '#E35A5A',
    borderRadius: 5,
    padding: 2,

  },
  cancelText: {
    color: "#FFFFFF",
    fontSize: 17
  },
  selectAll: {
    position: 'absolute',
    bottom: 5,
    left: 10,
    backgroundColor: '#00933B',
    borderRadius: 5,
    padding: 2
  },
  selectAllText: {
    color: "#FFFFFF",
    fontSize: 17
  },

  body: {
    padding: 10,
    backgroundColor: '#D7F8F0',
    flex: 1
  },

  conversationImg: {
    height: 70,
    width: 300,
    alignSelf: 'center',
    marginBottom: 10
  },

  card: {
    margin: 10,
    maxWidth: '43.5%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6C6C6C'
  },
  check: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1
  },
  cardHeader: {
    backgroundColor: '#FDE9C3',
    height: 40,
    margin: 0,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  cardText: {
    
  },
  cardBody: {
    backgroundColor: '#FBF9ED',
    height: 120,
    justifyContent: 'center',
    margin: 0,
    padding: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  cardImg: {
    height: 90,
    width: 130,
    alignSelf: 'center'
  },

  deletebtnRed: {
    position: 'absolute',
    bottom: 5,
    width: 80,
    alignSelf: 'center',
    backgroundColor: '#E35A5A',
    padding: 10,
    borderRadius: 10
  },
  deletebtnGray: {
    position: 'absolute',
    bottom: 5,
    width: 80,
    alignSelf: 'center',
    backgroundColor: '#878787',
    padding: 10,
    borderRadius: 10
  },
  deletebtnText: {
    color: "#FFFFFF",
    fontSize: 20,
    alignSelf: 'center'
  },
  drawbtn: {
    position: 'absolute',
    bottom: 5,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#0F9B68',
    padding: 10,
    borderRadius: 10
  },
  drawbtnText: {
    color: "#FFFFFF",
    fontSize: 20,
    alignSelf: 'center'
  },

  modal: {
    position: 'absolute',
    top: 300,
    alignSelf: 'center',
    backgroundColor: '#FFF59C',
    borderRadius: 10,
    borderColor: '#686868',
    borderWidth: 2,
    width: 200,
    height: 100
  },

  modalBody: {
    margin: 15
  },
  modalText: {
    fontSize: 15,
    alignSelf: 'center'
  },

  modalFooter: {
    flexDirection: 'row',
    flex: 2
  },
  modalCancel: {
    borderBottomLeftRadius: 10,
    borderColor: '#686868',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },
  modalCancelText: {
    fontSize: 15,
    alignSelf: 'center'
  },
  modalConfirm: {
    borderBottomRightRadius: 10,
    borderColor: '#686868',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },
  modalConfirmText: {
    fontSize: 15,
    alignSelf: 'center'
  }
});