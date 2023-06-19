import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  View,
  Button,
  Pressable,
} from 'react-native';
import {useEffect, useState} from 'react';
import View_wallpaper from './view_wallpaper';
// import 'babel-polyfill';

const size = 72;
const react_logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: size,
  height: size,
};  
const logo = {
    // uri: 'https://reactnative.dev/img/tiny_logo.png',
    uri: require('../assets/not_get.PNG'),
    width: size,
    height: size,
  };  

// writer1
const logo1 = {
    uri: require('../assets/wallpaper_writer1/wallpaper_1.PNG'),
    width: size,
    height: size,
  };  
const logo2 = {
    uri: require('../assets/wallpaper_writer1/wallpaper_2.jpg'),
    width: size,
    height: size,
  };  
const logo3 = {
    uri: require('../assets/wallpaper_writer1/wallpaper_3.jpg'),
    width: size,
    height: size,
  };  
const logo4 = {
    uri: require('../assets/wallpaper_writer1/wallpaper_4.jpg'),
    width: size,
    height: size,
  };  
const logo5 = {
    uri: require('../assets/wallpaper_writer1/wallpaper_5.jpg'),
    width: size,
    height: size,
  };  

// writer2
const logo6 = {
  uri: require('../assets/wallpaper_writer2/sticker1.png'),
  width: size,
  height: size,
};  
const logo7 = {
  uri: require('../assets/wallpaper_writer2/sticker2.png'),
  width: size,
  height: size,
};  
const logo8 = {
  uri: require('../assets/wallpaper_writer2/sticker3.png'),
  width: size,
  height: size,
};  

const DATA_origin = [{
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'co-branding-1',
      navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin1.PNG'),
      hidden: true,
      img:  react_logo
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'co-branding-2',
      navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin1.PNG'),
      hidden: true,
      img: react_logo
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'co-branding-3',
      navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin1.PNG'),
      hidden: true,
      img: react_logo
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'co-branding-4',
      navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin1.PNG'),
      hidden: true,
      img: react_logo
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'co-branding-5',
      navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin1.PNG'),
      hidden: true,
      img: react_logo
    },
  ];

let DATA_writer3 = [{
    id: 'co-branding-1',
    title: 'co-branding-1',
    navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin1.PNG'),
    navigateTo: "view wallpaper 1",
    // hidden: (counter>5) ? true:false,
    hidden: false,
    img:  logo1
  },
  {
    id: 'co-branding-2',
    title: 'co-branding-2',
    navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin2.jpg'),
    navigateTo: "view wallpaper 2",
    hidden: false,
    img: logo2
  },
  {
    id: 'co-branding-3',
    title: 'co-branding-3',
    navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin3.jpg'),
    navigateTo: "view wallpaper 3",
    hidden: false,
    img: logo3
  },
  {
    id: 'co-branding-4',
    title: 'co-branding-4',
    navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin4.jpg'),
    navigateTo: "view wallpaper 4",
    hidden: false,
    img: logo4
  },
  {
    id: 'co-branding-5',
    title: 'co-branding-5',
    navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin5.jpg'),
    navigateTo:"view wallpaper 5",
    hidden: false,
    img: logo5
  },
];

let DATA_writer2 = [{
  id: 'co-branding-1',
  title: 'co-branding-1',
  navigateURL: require('../assets/wallpaper_writer2/sticker_wallpaper.png'),
  navigateTo: "view wallpaper 1",
  // hidden: (counter>5) ? true:false,
  hidden: true,
  img:  logo6
},
{
  id: 'co-branding-2',
  title: 'co-branding-2',
  navigateURL: require('../assets/wallpaper_writer2/sticker_wallpaper.png'),
  navigateTo: "view wallpaper 2",
  hidden: true,
  img: logo7
},
{
  id: 'co-branding-3',
  title: 'co-branding-3',
  navigateURL: require('../assets/wallpaper_writer2/sticker_wallpaper.png'),
  navigateTo: "view wallpaper 3",
  hidden: true,
  img: logo8
},
{ // not change
  id: 'co-branding-4',
  title: 'co-branding-4',
  navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin4.jpg'),
  navigateTo: "view wallpaper 4",
  hidden: false,
  img: logo4
},
{
  id: 'co-branding-5',
  title: 'co-branding-5',
  navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin5.jpg'),
  navigateTo:"view wallpaper 5",
  hidden: false,
  img: logo5
},
];

let DATA_writer1 = [{
  id: 'co-branding-1',
  title: 'co-branding-1',
  navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin1.PNG'),
  navigateTo: "view wallpaper 1",
  // hidden: (counter>5) ? true:false,
  hidden: false,
  img:  logo1
},
{
  id: 'co-branding-2',
  title: 'co-branding-2',
  navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin2.jpg'),
  navigateTo: "view wallpaper 2",
  hidden: false,
  img: logo2
},
{
  id: 'co-branding-3',
  title: 'co-branding-3',
  navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin3.jpg'),
  navigateTo: "view wallpaper 3",
  hidden: false,
  img: logo3
},
{
  id: 'co-branding-4',
  title: 'co-branding-4',
  navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin4.jpg'),
  navigateTo: "view wallpaper 4",
  hidden: false,
  img: logo4
},
{
  id: 'co-branding-5',
  title: 'co-branding-5',
  navigateURL: require('../assets/wallpaper_writer1/wallpaper_origin5.jpg'),
  navigateTo:"view wallpaper 5",
  hidden: false,
  img: logo5
},
];


const numColumns = 3;
export default function WallpaperSet( {navigation} ) {

  const [counter, setCounter] = useState(0);
  
  let counter_new = {...counter};
  useEffect(() => {
    (async () => {
      if(counter >=5) {
        console.log('get first wallpaper!');
        DATA_writer3[0]['hidden'] = true;
      }
      if(counter >=10) {
        console.log('get second wallpaper!');
        DATA_writer3[1]['hidden'] = true;
      }
      if(counter >=15) {
        console.log('get third wallpaper!');
        DATA_writer3[2]['hidden'] = true;
      }
      if(counter >=25) {
        console.log('get fourth wallpaper!');
        DATA_writer3[3]['hidden'] = true;
      }
      if(counter >=40) {
        console.log('get fifth wallpaper!');
        DATA_writer3[4]['hidden'] = true;
      }
    })();
  }, [counter_new]);

  const onPressFunction = () => {
      navigation.navigate("view egg hatching")
  };
  
  const Item = ({ img, hidden, navigation, navigateTo, navigateURL }) => (
    (hidden)?
    // <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate(navigateTo)} >
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('view wallpaper', {navigateURL})} >
      <View style={styles.cardBody}>
        <Image style={styles.cardImg} source={img}/>
      </View>
    </TouchableOpacity>
    :
    <View style={styles.card}>
      <Image style={styles.cardImg} source={logo}/>
    </View>
    );

    // render() {
      return (  
          <View style={styles.page}>
              {/* ----- header ----- */}
              <View style={styles.header}>
                  <Text style={styles.headerText}>Burger Wallpaper</Text>                    
              </View>

              {/* ----- body ----- */}
              <View style={styles.body}>
                  <ScrollView style={styles.scrollView}>
                    <Text style={styles.count}> {counter} </Text>
                    <Text style={styles.time}> time </Text>
                    {/* <Countdown func={time_data}/> */}
                    {/* <Text style={styles.time}> {timeLeft.hours}:{timeLeft.minutes}:{" "}{timeLeft.seconds} </Text> */}

                    <View style={styles.bar}>
                      <Image style={{ height: 70, margin: 10, flex:3, resizeMode:'contain'}} source={require('../assets/acheivementBar_ver2.png')}/>
                      <View style={styles.container}>
                        <Pressable onPress={onPressFunction}>
                          <Image
                              style={{ width: 64, height: 70, flex:1, resizeMode:'contain'}}
                              source={require('../assets/egg_notHatched.png')}/>
                        </Pressable>
                      </View>
                    </View>
                    <View style={styles.speech}>
                      <Image style={{ height: 70, margin: 10, flex:5, resizeMode:'contain'}} source={require('../assets/section_hamburger_speech.png')} />
                      <Text style={{flex:1}} />
                    </View>

                    {/* ----- Test ----- */}
                    <View> 
                      <button style={{ margin: 10}} onClick={() => setCounter(counter + 1)}>Increment</button>
                    </View>
                    {/* ----------------- */}

                    <View style={styles.drawer}>
                      <Text>
                        <Text style={styles.drawerTitle}>2023 Mar. </Text>
                        <Text style={ {fontSize: 20, fontFamily: 'lazy-dog'} } >burgerman</Text>
                        <Text style={ {fontSize: 18, fontFamily: 'NotoSansTC-Regular', fontWeight: 'bold'} } > x </Text>
                        <Text style={ styles.writer1 } >Gummy bear</Text>
                      </Text>
                      
                      <FlatList
                        numColumns={3}
                        data={DATA_writer3} 
                        renderItem={({item}) => <Item img={item.img} hidden={item.hidden} navigation={navigation} navigateTo={item.navigateTo} navigateURL={item.navigateURL}></Item>}
                      />
                    </View>

                    <View style={styles.drawer}>
                      <Text>
                        <Text style={styles.drawerTitle}>2023 Feb. </Text>
                        <Text style={ {fontSize: 20, fontFamily: 'lazy-dog'} } >burgerman</Text>
                        <Text style={ {fontSize: 18, fontFamily: 'NotoSansTC-Regular', fontWeight: 'bold'} } > x </Text>
                        <Text style={ styles.writer2 } >Shan Hung</Text>
                      </Text>
                      <FlatList
                        numColumns={3}
                        data={DATA_writer2} 
                        renderItem={({item}) => <Item title={item.title} hidden={item.hidden} img={item.img} navigation={navigation} navigateURL={item.navigateURL}></Item>}
                      />
                    </View>
                    
                    <View style={styles.drawer}>
                      <Text>
                        <Text style={styles.drawerTitle}>2023 Jan. </Text>
                        <Text style={ {fontSize: 20, fontFamily: 'lazy-dog'} } >burgerman</Text>
                        <Text style={ {fontSize: 18, fontFamily: 'NotoSansTC-Regular', fontWeight: 'bold'} } > x </Text>
                        <Text style={ styles.writer3 } >ALI ( JP ) </Text>
                      </Text>
                      <FlatList
                          numColumns={3}
                          data={DATA_origin} 
                          renderItem={({item}) => <Item title={item.title} hidden={item.hidden} img={item.img} navigation={navigation} navigateURL={item.navigateURL}></Item>}
                      />
                    </View>
                  </ScrollView>
              </View>
          </View>
      );
  // }
}

const styles = StyleSheet.create({
    writer1: {
      fontSize: 12, 
      fontFamily: 'NotoSansTC-Regular', 
      backgroundColor: '#E2C6C4', 
      // padding: (7, 7, 5, 5), 
      paddingTop: 5,
      paddingRight: 10,
      paddingBottom: 5,
      paddingLeft: 10,
      border: 15, 
      borderRadius: 15,
    },
    writer2: {
      fontSize: 12, 
      fontFamily: 'NotoSansTC-Regular', 
      backgroundColor: 'rgba(181, 196, 177, 0.8)',
      paddingTop: 5,
      paddingRight: 10,
      paddingBottom: 5,
      paddingLeft: 10,
      border: 15, 
      borderRadius: 15,
    },
    writer3: {
      fontSize: 12, 
      fontFamily: 'NotoSansTC-Regular', 
      backgroundColor: 'rgba(248, 226, 87, 0.7)',
      paddingTop: 5,
      paddingRight: 10,
      paddingBottom: 5,
      paddingLeft: 10,
      border: 15, 
      borderRadius: 15,
      borderWidth: 2,
      borderColor: 'rgba(241, 173, 95, 0.7)',
    },
    bar: {
      flexDirection: 'row',
    },
    speech: {
      flexDirection: 'row',
      justifyContent: 'left',
    },
    bugercounts_header: {
      fontSize: 24,
    },
    container: {
      flex: 1,
      flexDirection: "row",
    },
    acheivementBar: {
      justifyContent: 'center',
      alignItems: 'center',
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
      fontSize: 40,
      textAlign: 'center',
      fontFamily: 'lazy-dog',
      alignSelf: 'center',
    },
    probarStyle: {
      width: 162,
      height: 8,
      backgroundColor: "#E0E0E0"
    },
    page: {
      flex: 1
    },    
    body: {
      padding: 10,
      backgroundColor: "#FFE7D9",
      flex: 1
    },
    cardHeader: {
      // margin: 10,
      fontSize: 20,
      flexDirection: 'row-reverse',     
    },    
    card: {
      margin: 10,
      maxWidth: '43.5%',
      borderRadius: 13,
      borderWidth: 2,
      borderColor: '#7A8186',
    },
    cardImg: {
      borderRadius: 11,
    },
    progressBar: {
      height: 20,
      width: '100%',
      backgroundColor: 'white',
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 5
    },
    drawer: {
      paddingTop: 10,
      marginLeft: 20,
      // alignItems: 'center',
    },
    drawerTitle: {
      fontFamily: 'NotoSansTC-Regular',
      padding: 10,
      fontSize: 15,
    },
    time: {
      position: 'absolute',
      top: 80,
      right: 30,
      fontSize: 16,
      fontFamily: 'lazy-dog',
    },
    count: {
      position: 'absolute',
      top: 8,
      right: 213,
      fontSize: 24,
      fontFamily: 'lazy-dog',
    },
  });