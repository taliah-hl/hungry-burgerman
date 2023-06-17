import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    headerText:{
        color: '#FDFCED',
        // fontFamily: 'lazy-dog'
    },
    btnTitle:{},

    pairGreenBtnsLarge:{
        height: 192,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 36,
    },
    greenBtnFrameLarge: {
        height: 192,
        width: 146,
        flex: 1,
        alignItem:  'space-between',
        justifyContent: 'space-between',
    },
    pairGreenBtnsMedium:{
        height: 120,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    greenBtnFrameMedium: {
        height: 120,
        width: 120,
        flex: 1,
        alignItem:  'space-between',
        justifyContent: 'space-between',
    
    },

    greenCircleBtnLarge:{
        borderRadius: 100,
        height: 145,
        width: 145,
        backgroundColor: '#52c69c',
        padding: 24,
        alignSelf: 'center',

    },

    greenCircleBtnMedium:{
        borderRadius: 100,
        height: 102,
        width: 102,
        backgroundColor: '#52c69c',
        padding: 20,
        alignSelf: 'center',

    },
    btnTextMedium: { 
        textAlign: 'center',
        color: '#4a4848',
        fontSize: 20,
        fontFamily: 'NotoSansTC-Regular',
        margin: 5,

    },
    contentText:{
        textAlign: 'flex-start',
        color: '#000000',
        fontSize: 20,
        fontFamily: 'NotoSansTC-Regular',
        lineHeight: 18,
        justifyContent: 'space-around',
    },
    btnYellowTitle:{
        textAlign: 'center',
        color: '#FDFCED',
        fontFamily: 'lazy-dog',
        fontSize: 38,
    },
    greenCircleBtnIconLarge:{
        width: 93,
        height: 93,
        resizeMode: 'contain',
    },
    greenCircleBtnIconMedium:{
        width: 93,
        height: 93,
        resizeMode: 'contain',
    },
    contentIcon:{
        height: 30,
        width:'100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },



})

//to be export to everypage for global style

