import {StyleSheet, Text} from 'react-native';
import React, { Component, useCallback  } from 'react';
import { useFonts } from 'expo-font';

//this is not in use

export class BtnTextMedium extends Component{
   
    render(){
        return(
            <Text  {...this.props}
                style={[styles.btnTextMedium]}>
                    {this.props.children}
                </Text>
        )

    }

}

export function BtnTextSmall(){

}

const styles=StyleSheet.create({
    btnTextMedium:{ 
        textAlign: 'center',
        color: '#4a4848',
        fontSize: 24,
        fontFamily: 'NotoSansTC-Regular',
        margin: 5,

    },
    btnTextSmall:{ 
        textAlign: 'center',
        color: '#4a4848',
        fontSize: 20,
        fontFamily: 'NotoSansTC-Regular',
        margin: 5,

    },
    headerText:{
        textAlign: 'center',
        color: '#FDFCED',
        fontFamily: 'lazy-dog',

    },
    btnYellowTitle:{
        textAlign: 'center',
        color: '#FDFCED',
        fontFamily: 'lazy-dog',
        fontSize: 40,
    }
})