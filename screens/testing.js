import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'
import React ,{useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image, CheckBox, Modal } from 'react-native'

import {ShopCard} from '../components/shopCard'
import {GetallCards, SaveCard, ClearallCards} from '../shared/myCard_data'
import * as CardData from '../shared/myCard_data'

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
  
  const Item = ({item, index, selectOne, setSelectOne, navigation, editMode}) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate("view saved card", );
        }}
        disabled={editMode}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
        <View style={styles.cardBody}>
          <Image style={styles.cardImg} source={require(`../assets/${item.img}`)}/>
        </View>
      </TouchableOpacity>
  
      {
        (editMode) ?
          <CheckBox
            style={styles.check}
            value={selectOne[index]}
            onValueChange={()=>(handleOnValueChange(index, selectOne, setSelectOne))}
          />
        :
          null
      }
    </View>
  );
  
  
  
  export default function TestingCard({ navigation }) {
    
    const [selectOne, setSelectOne] = useState(new Array(100).fill(false));
    const [selectAll, setSelectAll] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteBtnAvailable, setDeleteBtnAvailable] = useState(false);
    const [cardslist, setCardslist] = useState(GetallCards);
    const [cardlist, setCardlist] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(()=>{
      setLoading(true);
      CardData.GetallCards(setCardlist);
      setLoading(false)

    },[])

    if(!isLoading)
    {
      useEffect(() => {
      
      CardData.GetallCards(setCardlist);
      var newDeleteBtnAvailable = false;
      var newSelectAll = true;


      for(var i = 0; i < cardslist.length; i++) {
        if(selectOne[i] === true) {
          newDeleteBtnAvailable = true;
        } else {
          newSelectAll = false;
        }
      }
      setDeleteBtnAvailable(newDeleteBtnAvailable);
      setSelectAll(newSelectAll);
    }, [selectOne]);
  }
  console.log(cardlist)
    
    return (
      <View style={styles.page}>
  
        <View style={styles.header}>
          <Text style={styles.headerText}>{"My card"}</Text>
          {
            (editMode) ?
              <TouchableOpacity style={styles.cancel} onPress={()=>(handleReset(selectOne, setSelectOne, setSelectAll, setEditMode, setModalVisible, setDeleteBtnAvailable))}>
                <Text style={styles.cancelText}>{"X取消"}</Text>
              </TouchableOpacity>
            :
              <TouchableOpacity style={styles.editbtn} onPress={()=>(setEditMode(true))}>
                <Icon name="pencil" size={25} color="#fff"/>
              </TouchableOpacity>
          }
          {
            (editMode) ?
              <TouchableOpacity style={styles.selectAll} onPress={()=>(handleSelectAll(selectOne, setSelectOne, selectAll, setSelectAll, setDeleteBtnAvailable))}>
                <Text style={styles.selectAllText}>{(selectAll) ? "取消全選" : "全選"}</Text>
              </TouchableOpacity>
            :
              null
          }
        </View>
  
        <View style={styles.body}>
  
          {
            (editMode) ?
              <Image style={styles.conversationImg} source={require(`../assets/conversation/section_hamburger_speech-select-to-delete.png`)}/>
            :
              null
          }
  
          <ScrollView>
          {isLoading? 
            (<Text> Loading... </Text>)
              :
            (<FlatList
              numColumns={2}
              data={cardslist}
              renderItem={({item, index})=>(
                <Item
                  item={item}
                  index={index}
                  selectOne={selectOne}
                  setSelectOne={setSelectOne}
                  navigation={navigation}
                  editMode={editMode}
                />
              )}
            />)
          }
            
          </ScrollView>
  
          {
            (editMode) ?
              <TouchableOpacity style={(deleteBtnAvailable) ? styles.deletebtnRed : styles.deletebtnGray} onPress={()=>(setModalVisible(true))} disabled={!deleteBtnAvailable}>
                <Text style={styles.deletebtnText}>{"刪除"}</Text>
              </TouchableOpacity>
            :
              <TouchableOpacity style={styles.drawbtn} onPress={()=>(console.log(2))}>
                <Text style={styles.drawbtnText}>{"從My Card抽卡"}</Text>
              </TouchableOpacity>
          }
  
        </View>
  
       
  
      </View>
    )
  }
  