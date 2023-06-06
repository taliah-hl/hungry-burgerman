import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function PairBtnGreen(props) {
    return (
      <View style={styles.sectionFoodOrDrink}>
        <View style={styles.sectionBtn}>
          {props.children}
                    
        </View>

        <View style={styles.sectionBtn}>
          {props.children}                    
        </View>
      </View>

    );
  }

  const styles = StyleSheet.create({
    sectionFoodOrDrink:{
        height: 192,
        width: 328,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 36,
    },
    sectionBtn: {
        height: 192,
        width: 146,
        alignItem:  'space-between',
        justifyContent: 'center',
    },
    // greenBtnText: { 
    //     textAlign: center,
    //     color: '#4a4848',
    // },
    // greenBtnbg:{
    //     borderRadius: 100,
    //     height: 145,
    //     width: 145,
    //     backgroundColor: '#52c69c',

    // }


  })
