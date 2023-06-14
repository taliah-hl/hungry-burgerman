import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image, CheckBox, Modal } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: 'card1',
    title: '豬多好事1',
    img: "my_card.jpg"
  },
  {
    id: 'card2',
    title: '豬多好事2',
    img: "my_card.jpg"
  },
  {
    id: 'card3',
    title: '豬多好事3',
    img: "my_card.jpg"
  },
  {
    id: 'card4',
    title: '豬多好事4',
    img: "my_card.jpg"
  },
  {
    id: 'card5',
    title: '豬多好事5',
    img: "my_card.jpg"
  },
  {
    id: 'card6',
    title: '豬多好事6',
    img: "my_card.jpg"
  },
  {
    id: 'card7',
    title: '豬多好事7',
    img: "my_card.jpg"
  }
];

const Item = ({title, img, navigation, selectAll, editMode, setSelectAll}) => (
  <View style={styles.card}>
    <TouchableOpacity
      onPress={()=>{
        navigation.navigate("view saved card", {
          title: title,
          img: img
        });
      }}
      disabled={editMode}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardText}>{title}</Text>
      </View>
      <View style={styles.cardBody}>
        <Image style={styles.cardImg} source={require(`../assets/${img}`)}/>
      </View>
    </TouchableOpacity>

    {
      (editMode) ?
        <CheckBox style={styles.check} value={selectAll} onValueChange={()=>setSelectAll(!selectAll)}></CheckBox>
      :
        null
    }
  </View>
);

export default function MyCard({ navigation }) {
  
  const [SelectOne, setSelectOne] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.page}>

      <View style={styles.header}>
        <Text style={styles.headerText}>{"My card"}</Text>
        {
          (editMode) ?
            <TouchableOpacity style={styles.cancel} onPress={()=>(setEditMode(false) + setSelectAll(false))}>
              <Text style={styles.cancelText}>{"X取消"}</Text>
            </TouchableOpacity>
          :
            <TouchableOpacity style={styles.editbtn} onPress={()=>(setEditMode(true))}>
              <Icon name="pencil" size={25} color="#fff"/>
            </TouchableOpacity>
        }
        {
          (editMode) ?
            <TouchableOpacity style={styles.selectAll} onPress={()=>(setSelectAll(!selectAll))}>
              <Text style={styles.selectAllText}>{(selectAll) ? "取消全選" : "全選"}</Text>
            </TouchableOpacity>
          :
            null
        }
      </View>

      <View style={styles.body}>

        <ScrollView>
          <FlatList
            numColumns={2}
            data={DATA}
            renderItem={({item})=>(
              <Item
                title={item.title}
                img={item.img}
                navigation={navigation}
                selectAll={selectAll}
                editMode={editMode}
                setSelectAll={setSelectAll}
              />
            )}
          />
        </ScrollView>

        {
          (editMode) ?
            <TouchableOpacity style={(selectAll) ? styles.deletebtnRed : styles.deletebtnGray} onPress={()=>(setModalVisible(true))} disabled={!selectAll}>
              <Text style={styles.deletebtnText}>{"刪除"}</Text>
            </TouchableOpacity>
          :
            <TouchableOpacity style={styles.drawbtn} onPress={()=>(console.log(2))}>
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
            <TouchableOpacity style={styles.modalConfirm} onPress={()=>(setEditMode(false) + setSelectAll(false) + setModalVisible(false))}>
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
    padding: 15
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 45,
    textAlign: 'center'
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
    padding: 2
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