import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    headerText:{
        color: '#FDFCED',
        // fontFamily: 'lazy-dog'
    },
    btnTitle:{},

    pairGreenBtnsLarge:{
        height: 192,
        width: 328,
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
        justifyContent: 'center',
    },

    greenCircleBtnLarge:{
        borderRadius: 100,
        height: 145,
        width: 145,
        backgroundColor: '#52c69c',
        padding: 24,

    },
    greenBtnTextLarge: { 
        textAlign: 'center',
        color: '#4a4848',
    },



})

//to be export to everypage for global style