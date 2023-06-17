import { View, Text } from 'react-native'
import React from 'react'

export function getShop_api(cardType) {
    const apiKey= 'AIzaSyBF43lMa8RkSkIm0l4fbaioe-SR5LoiUdc';
    //0: nearby restaurant, 1: far restaurant, 2: nearby drink, 3: far drink
    //nearby: 1.5 km, far: 10km
    const getShopUrl = [
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=24.7961,120.9966&radius=1500&type=restaurant&language=zh-TW&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=24.7961,120.9966&radius=20000&type=restaurant&language=zh-TW&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.0338,121.5646&radius=1500&keyword=飲料&language=zh-TW&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.0338,121.5646&radius=10000&keyword=飲料&language=zh-TW&key=${apiKey}`,
    ]
    
    shop =  axios.get(getShopUrl[cardType]).then(response=>{
                console.log(response.data);
            })
            .catch(error=>console.error('on get shop from ggl error', error))
    console.log(shop)
}


