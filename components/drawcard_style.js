import {StyleSheet} from 'react-native';

export const drawcardStyles = StyleSheet.create({
    
      uppersection:{
        flex:2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
      lowersection:{
        flex:3,
        justifyContent: 'center',
        alignItem: 'space-around',
      },
      progressBar:{
        flex:1,
    
      },
      burgermanSpeech:{
        flex:1,
        width: "100%",
    
      },    
      bugermanSpeechImg:{
        width: "100%",
        height: 83,
        resizeMode: 'contain',
        alignSelf: 'center',
      },
      // Lala add
      clickedRecordBar: {
        width: 108,
        height: 46,
        padding: 10,
        position: 'absolute',
        bottom: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
      },
      clickedRecordBar_sub1_drink: {
        width: 45,
        height: 30,
        padding: 10,
        position: 'absolute',
        bottom: 38,
        right: 180,
        resizeMode: 'contain',
        // alignSelf: 'center',
      },
      clickedRecordBar_sub1_food: {
        width: 38,
        height: 25,
        padding: 10,
        position: 'absolute',
        bottom: 38,
        right: 184,
        resizeMode: 'contain',
        // alignSelf: 'center',
      },
      clickedRecordBar_sub2_drive: {
        width: 36,
        height: 25,
        padding: 10,
        position: 'absolute',
        bottom: 40,
        right: 136,
        resizeMode: 'contain',
        // alignSelf: 'center',
      },
      clickedRecordBar_sub2_walk: {
        width: 40,
        height: 25,
        padding: 10,
        position: 'absolute',
        bottom: 37,
        right: 137,
        resizeMode: 'contain',
        // alignSelf: 'center',
      },
      progressBar_top: {
        width: 327,
        height: 10,
        padding: 10,
        position: 'absolute',
        top: 80,
        alignSelf: 'center',
        resizeMode: 'contain',
      }
})