import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        width:'95%',
        margin:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    iconContainer:{
        justifyContent:'center',
    },
    textInputContainer:{
        width:'85%',
        borderWidth:1,
        borderColor:'lightgrey',
        backgroundColor:'white',
        borderRadius:20,
        height:40,
        flexDirection:'row',
        justifyContent:'space-evenly',
        padding:5
    },
    textInput:{
        width:200,
    },
    text:{
        fontSize:14,
        padding:5,
        color:'grey'
    },
    microphoneContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:35,
        height:35,
        borderRadius:35,
        marginLeft:5,
        alignSelf:'center',
        backgroundColor:colors.light.tint
    }
})

export default styles;
  