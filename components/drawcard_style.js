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


})