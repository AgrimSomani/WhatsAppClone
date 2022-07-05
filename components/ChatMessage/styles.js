import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        padding:5,
    },
    messageBox:{
        borderRadius:5,
        padding:5,
    },
    name:{
        color:colors.light.tint,
        fontWeight:'bold',
    },
    messageAndTimeContainer:{
        flexDirection:'row'
    },
    content:{

    },
    time:{
        fontSize:10,
        color:'grey',
        alignSelf:'flex-end'
    }
})

export default styles;
  