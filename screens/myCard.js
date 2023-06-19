import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image, CheckBox, Modal } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as CardData from '../shared/myCard_data'

var cnt = 1;

const CORS_ANYWHERE_HOST = 'https://cors-anywhere.herokuapp.com/';
const apiKey= 'AIzaSyBF43lMa8RkSkIm0l4fbaioe-SR5LoiUdc';
const places_photoUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='; 

var headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');

const handleReset = (selectOne, setSelectOne, setSelectAll, setEditMode, setModalVisible, setDeleteBtnAvailable) => {
  const newSelectOne = selectOne.map((val, idx) => (
    {
      ...selectOne[idx],
      isChecked: false,
      
    }
  ));

  setSelectOne(newSelectOne);
  setSelectAll(false);
  setEditMode(false);
  setModalVisible(false);
  setDeleteBtnAvailable(false);
}

const handleDelete = (selectOne, setSelectOne, setSelectAll, setEditMode, setModalVisible, setDeleteBtnAvailable) => {
  for(var i = 0; i < selectOne.length; i++) {
    if(selectOne[i].isChecked) {
      CardData.RemoveCard(selectOne[i].gglPalceId);
    }
  }

  const newSelectOne = selectOne.filter((item) => {
    return !item.isChecked
  });

  setSelectOne(newSelectOne);
  setSelectAll(false);
  setEditMode(false);
  setModalVisible(false);
  setDeleteBtnAvailable(false);
}

const handleSelectAll = (selectOne, setSelectOne, selectAll, setSelectAll, setDeleteBtnAvailable) => {
  const newSelectOne = selectOne.map((val, idx) => (
    {
      ...selectOne[idx],
      isChecked: (selectAll) ? false : true,
      
    }
  ));

  setSelectOne(newSelectOne);
  setSelectAll(!selectAll);
  setDeleteBtnAvailable((selectAll) ? false : true);
}

const handleOnValueChange = (index, selectOne, setSelectOne) => {
  const newSelectOne = selectOne.map((val, idx) => (
    {
      ...selectOne[idx],
      isChecked: (idx === index) ? !selectOne[idx].isChecked : selectOne[idx].isChecked,
      
    }
  ));

  setSelectOne(newSelectOne);
};

const Item = ({item, index, selectOne, setSelectOne, navigation, editMode}) => (
  <View style={styles.card}>
    <TouchableOpacity
      onPress={()=>{navigation.navigate("view saved card",{card: item}) 
      }}
      disabled={editMode}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardText}>{item.name}</Text>
      </View>
      <View style={styles.cardBody}>
        <Image style={styles.cardImg} source={item.photoUrl}/>
      </View>
    </TouchableOpacity>

    {
      (editMode) ?
        <CheckBox
          style={styles.check}
          value={selectOne[index].isChecked}
          onValueChange={()=>(handleOnValueChange(index, selectOne, setSelectOne))}
        />
      :
        null
    }
  </View>
);

export default function MyCard({ navigation }) {
  const [selectOne, setSelectOne] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteBtnAvailable, setDeleteBtnAvailable] = useState(false);

  (function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();


  const loadImage = async (newList) => {
    try {
      const res = await fetch(
        `${CORS_ANYWHERE_HOST}${places_photoUrl}${item.photoRef}&key=${apiKey}`
      );
      const data = await res.blob();
      console.log(URL.createObjectURL(data))
      let tmp;
      tmp = newList.map((val, idx) => (
        {
          ...newList[idx],
          photoUrl: URL.createObjectURL(data)
          
        }
      ));
        
      
    } catch (error) {
      console.error(`error in photo api: ${error}`);
    }
    return tmp;
  }

  useEffect(() => {
    CardData.ReturnallCards().then((allData) => {
            
      setSelectOne(allData);
    });
  },[]);

  useEffect(() => {
    if(editMode) {
      var newDeleteBtnAvailable = false;
      var newSelectAll = true;
      for(var i = 0; i < selectOne.length; i++) {
        if(selectOne[i].isChecked) {
          newDeleteBtnAvailable = true;
        } else {
          newSelectAll = false;
        }
      }
      setDeleteBtnAvailable(newDeleteBtnAvailable);
      setSelectAll(newSelectAll);
    }
  }, [selectOne]);
  
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
          <FlatList
            numColumns={2}
            data={selectOne}
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
          />
        </ScrollView>

        {
          (editMode) ?
            <TouchableOpacity style={(deleteBtnAvailable) ? styles.deletebtnRed : styles.deletebtnGray} onPress={()=>(setModalVisible(true))} disabled={!deleteBtnAvailable}>
              <Text style={styles.deletebtnText}>{"刪除"}</Text>
            </TouchableOpacity>
          :
            <TouchableOpacity
              style={styles.drawbtn}
              
            >
              <Text style={styles.drawbtnText}>{"從My Card抽卡"}</Text>
            </TouchableOpacity>
        }

      </View>

      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modal}>
          
          <View style={styles.modalBody}>
            <Text style={styles.modalText}>{"確認刪除卡片?"}</Text>
          </View>
          
          <View style={styles.modalFooter}>
            <TouchableOpacity style={styles.modalCancel} onPress={()=>(setModalVisible(false))}>
              <Text style={styles.modalCancelText}>{"取消"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalConfirm} onPress={()=>(handleDelete(selectOne, setSelectOne, setSelectAll, setEditMode, setModalVisible, setDeleteBtnAvailable))}>
              <Text style={styles.modalConfirmText}>{"確認"}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1
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
    fontSize: 45,
    textAlign: 'center',
    fontFamily: 'lazy-dog',
    alignSelf: 'center',
  },
  editbtn: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  cancel: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    backgroundColor: '#E35A5A',
    borderRadius: 5,
    padding: 2,

  },
  cancelText: {
    color: "#FFFFFF",
    fontSize: 17
  },
  selectAll: {
    position: 'absolute',
    bottom: 5,
    left: 10,
    backgroundColor: '#00933B',
    borderRadius: 5,
    padding: 2
  },
  selectAllText: {
    color: "#FFFFFF",
    fontSize: 17
  },

  body: {
    padding: 10,
    backgroundColor: '#D7F8F0',
    flex: 1
  },

  conversationImg: {
    height: 70,
    width: 300,
    alignSelf: 'center',
    marginBottom: 10
  },

  card: {
    margin: 10,
    maxWidth: '43.5%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6C6C6C'
  },
  check: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1
  },
  cardHeader: {
    backgroundColor: '#FDE9C3',
    height: 40,
    margin: 0,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  cardText: {
    
  },
  cardBody: {
    backgroundColor: '#FBF9ED',
    height: 120,
    justifyContent: 'center',
    margin: 0,
    padding: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  cardImg: {
    height: 90,
    width: 130,
    alignSelf: 'center'
  },

  deletebtnRed: {
    position: 'absolute',
    bottom: 5,
    width: 80,
    alignSelf: 'center',
    backgroundColor: '#E35A5A',
    padding: 10,
    borderRadius: 10
  },
  deletebtnGray: {
    position: 'absolute',
    bottom: 5,
    width: 80,
    alignSelf: 'center',
    backgroundColor: '#878787',
    padding: 10,
    borderRadius: 10
  },
  deletebtnText: {
    color: "#FFFFFF",
    fontSize: 20,
    alignSelf: 'center'
  },
  drawbtn: {
    position: 'absolute',
    bottom: 5,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#0F9B68',
    padding: 10,
    borderRadius: 10
  },
  drawbtnText: {
    color: "#FFFFFF",
    fontSize: 20,
    alignSelf: 'center'
  },

  modal: {
    position: 'absolute',
    top: 300,
    alignSelf: 'center',
    backgroundColor: '#FFF59C',
    borderRadius: 10,
    borderColor: '#686868',
    borderWidth: 2,
    width: 200,
    height: 100
  },

  modalBody: {
    margin: 15
  },
  modalText: {
    fontSize: 15,
    alignSelf: 'center'
  },

  modalFooter: {
    flexDirection: 'row',
    flex: 2
  },
  modalCancel: {
    borderBottomLeftRadius: 10,
    borderColor: '#686868',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },
  modalCancelText: {
    fontSize: 15,
    alignSelf: 'center'
  },
  modalConfirm: {
    borderBottomRightRadius: 10,
    borderColor: '#686868',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },
  modalConfirmText: {
    fontSize: 15,
    alignSelf: 'center'
  }
});