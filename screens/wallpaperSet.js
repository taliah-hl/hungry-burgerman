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

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };  

const logo1 = {
    uri: require('../assets/wallpaper_writer1/wallpaper_1.PNG'),
    width: 64,
    height: 64,
  };  

const logo2 = {
    uri: require('../assets/wallpaper_writer1/wallpaper_2.jpg'),
    width: 64,
    height: 64,
  };  

const logo3 = {
    uri: require('../assets/wallpaper_writer1/wallpaper_3.jpg'),
    width: 64,
    height: 64,
  };  

const logo4 = {
    uri: require('../assets/wallpaper_writer1/wallpaper_4.jpg'),
    width: 64,
    height: 64,
  };  

const logo5 = {
    uri: require('../assets/wallpaper_writer1/wallpaper_5.jpg'),
    width: 64,
    height: 64,
  };  


const data = [
    { key: '1', name: 'item 1' },
    { key: '2', name: 'item 2' },
    { key: '3', name: 'item 3' },
    { key: '4', name: 'item 4' },
    { key: '5', name: 'item 5' },
    { key: '6', name: 'item 6' },
    { key: '7', name: 'item 7' },
    { key: '8', name: 'item 8' },
    { key: '9', name: 'item 9' },
    { key: '10', name: 'item 10' },
    // { key: '11', name: 'item 11' },
    // { key: '12', name: 'item 12' },
];

const DATA_origin = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'co-branding-1',
      img:  logo
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'co-branding-2',
      img: logo
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'co-branding-3',
      img: logo
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'co-branding-4',
      img: logo
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'co-branding-5',
      img: logo
    },
  ];

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'co-branding-1',
    navigateTo: "view wallpaper 1",
    img:  logo1
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'co-branding-2',
    navigateTo: "view wallpaper 2",
    img: logo2
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'co-branding-3',
    navigateTo: "view wallpaper 3",
    img: logo3
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'co-branding-4',
    navigateTo: "view wallpaper 4",
    img: logo4
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'co-branding-5',
    navigateTo:"view wallpaper 5",
    img: logo5
  },
];


const numColumns = 3;
export default function WallpaperSet( {navigation} ) {
    const renderItem = ({ item }) => (
        <View style={{ flex: 1, margin: 10, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' }}>
            <Text>{item.name}</Text>
        </View>
        );
    const onPressFunction = () => {
        navigation.navigate("view egg hatching")
    }
    const onPressFunction2 = () => {
        console.log("hihi2")
    }

    const Item = ({ img, navigation, navigateTo }) => (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate(navigateTo)} >
          <View style={styles.cardBody}>
            <Image style={styles.cardImg} source={img}/>
          </View>
        </TouchableOpacity>
      );

    return (
        <View style={styles.page}>
            {/* ----- header ----- */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Burger Wallpaper</Text>                    
            </View>

            {/* ----- body ----- */}
            <View style={styles.body}>
                <ScrollView style={styles.scrollView}>
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
                      <Image style={{  height: 70, margin: 10, flex:5, resizeMode:'contain'}} source={require('../assets/section_hamburger_speech.png')} />
                      <Text style={{flex:1}} />
                  </View>
                      <View style={styles.drawer}>
                          <Text style={styles.drawerTitle}>2023 March burgerman x 小亣</Text>
                          <FlatList
                              numColumns={3}
                              data={DATA} 
                              renderItem={({item}) => <Item img={item.img} navigation={navigation} navigateTo={item.navigateTo}></Item>}
                          />
                      </View>

                      <View style={styles.drawer}>
                          <Text style={styles.drawerTitle}>2023 February burgerman x 小媄</Text>
                          <FlatList
                              numColumns={3}
                              data={DATA_origin} 
                              renderItem={({item}) => <Item title={item.title} img={item.img} navigation={navigation}></Item>}
                          />
                      </View>
                      
                      <View style={styles.drawer}>
                      <Text style={styles.drawerTitle}>2023 January burgerman x 小莉</Text>
                          <FlatList
                              numColumns={3}
                              data={DATA_origin} 
                              renderItem={({item}) => <Item title={item.title} img={item.img} navigation={navigation}></Item>}
                          />
                      </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    headerText: {
        color: "#FFFFFF",
        fontSize: 40,
        textAlign: 'center'
      },
    probarStyle: {
        width: 162,
        height: 8,
        backgroundColor: "#E0E0E0"
    },
    page: {
        flex: 1
    },    
    header: {
        backgroundColor: "#38C097",
        height: 120,
        padding: 15
    },
    body: {
        padding: 10,
        backgroundColor: "#FFE7D9",
        flex: 1
    },
    cardHeader: {
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
        marginLeft: 30,
    },
    drawerTitle: {
        padding: 10,
        fontSize: 15,
    },
  });