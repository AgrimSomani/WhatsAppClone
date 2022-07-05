import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:5,
    },
    imageContainer:{
        flex:0.2,
        marginRight:10,
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:25
    },
    wordContainer:{
        flex:1,
        justifyContent:'space-around',
        borderBottomColor:'lightgrey',
        borderBottomWidth:1.5,
    },
    nameText:{
        fontWeight:'bold'
    },
    lastMessageDateText:{
        color:'grey',
        fontSize:12
    },
    lastMessageText:{
        color:'grey'
    },
    nameAndDateContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
})

export default styles;
  