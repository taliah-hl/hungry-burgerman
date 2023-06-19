import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useState, useEffect }  from 'react'
import CountDown from 'react-native-countdown-component';
import  {setGlobalState, useGlobalState} from '../shared/states'

export default function View_egg_hatching() {
  const countDownTime = useGlobalState('countDownTime')[0];

  var date = new Date(), timestamp;
  timestamp = date.getTime();
  const countDownTime_time = useGlobalState('countDownTime_time')[0];

  console.log("timestamp", timestamp);
  console.log("countDownTime_time", countDownTime_time);
  const [totalDuration, setTotalDuration] = useState((countDownTime_time - timestamp)/1000);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground source={require('../assets/egg_hatching_ver2.png')} resizeMode="cover" style={styles.image}>
          <Text style={styles.headerText}>距離漢堡蛋孵化還有</Text>
          {/* <Text style={styles.timeText}>4:30:50</Text> */}
          <CountDown style={styles.time}
            size={20} //on Press call
            until={totalDuration}
            //until = {0}
            onFinish={() => alert('Finished')}
            digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
            digitTxtStyle={{color: '#1CC625'}}
            timeLabelStyle={{color: '#1CC625', fontWeight: 'bold'}}
            separatorStyle={{color: '#1CC625'}}
            timeToShow={['H', 'M', 'S']} //duration of countdown in seconds
            timeLabels={{h:'hour' ,m: 'minute', s: 'second'}}
            // showSeparator
          />
        </ImageBackground>
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    position: 'absolute',
    top: 90,
    alignSelf: 'center',
    // color: 'white',
    fontSize: 36,
    fontFamily: 'NotoSansTC-Medium',
    lineHeight: 84,
    // fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000c0',
  },
  timeText: {
    position: 'absolute',
    top: 173,
    alignSelf: 'center',
    fontSize: 60,
    fontFamily: 'lazy-dog',
    lineHeight: 84,
    textAlign: 'center',
  },
  time: {
    position: 'absolute',
    top: 185,
    alignSelf: 'center',
    fontSize: 60,
    fontFamily: 'lazy-dog',
    lineHeight: 84,
    textAlign: 'center',
  },
})