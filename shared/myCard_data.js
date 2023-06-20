import AsyncStorage from '@react-native-async-storage/async-storage';
import React ,{useState, useEffect, useCallback} from 'react'

export const GetallCards = async (toSet) => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      let allData = [];
      
      for(let k of keys)
      {
        
        const res = await AsyncStorage.getItem(k);
        try{
          if( typeof JSON.parse(res).name !== 'undefined') allData.push((JSON.parse(res)));
        }catch(err){
          //pass
          console.error(err)
        }finally{
          

        }
        toSet(allData)
      
      
      
    } 
  }catch (error) {
    console.error(error)
  }
}

export const ReturnallCards = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    let allData = [];
    
    for(let k of keys)
    {
      
      const res = await AsyncStorage.getItem(k);
      try{
        if( typeof JSON.parse(res).name !== 'undefined') allData.push((JSON.parse(res)));
      }catch(err){
        //pass
        console.error(err)
      }finally{
        // console.log(allData)
        

      }
    
    
    
  } 
  return allData
}catch (error) {
  console.error(error)
}

}

export const RemoveCard =  async (item_id)=>{
    try{
        await AsyncStorage.removeItem(item_id);
    }catch(error){
        console.error(error)
    }
}

export  const clearData = async ()=>{
    try{
      const keys = await AsyncStorage.getAllKeys();
      for(let k of keys)
      {
        await AsyncStorage.removeItem(k);
      }
      console.log('all cards clear')
    } catch(error){
      console.error(error)
    }
  }

  export const SaveCard = async (card) => {
    try {
      await AsyncStorage.setItem(card.gglPalceId, JSON.stringify(card))
      console.log('Data successfully saved')
    } catch (e) {
      console.error(e)
    }
  }

  export const ClearallCards = async ()=>{
    try{
        await AsyncStorage.clear();
      console.log('all cards clear')
    } catch(error){
      console.error(error)
    }
  }

  export const getAllCardsKeys=async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      let allData = [];
      for(let k of keys)
      {
        allData.push(keys);
      }
      
  
      return allData;
    } catch (error) {
      console.error(error)
    }
  }

  export const readCard =  async(item_id)=> {
    const v = await AsyncStorage.getItem(item_id);
    return v;
  }

  export const readFirstCard = async(toSet)=>{
    try {
      const keys = await AsyncStorage.getAllKeys();
      
    
     
      const res = await AsyncStorage.getItem(keys[0]);
        
        
      
      if(keys[0]) toSet((res))
      else toSet('');
      
    } catch (error) {
      console.error(error)
    }
  }