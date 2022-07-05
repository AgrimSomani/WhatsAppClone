import { StyleSheet } from "react-native";
import Colors from '../../constants/colors' 

const styles = StyleSheet.create({
    iconContainer:{
        height:40,
        width:40,
        position:'absolute',
        bottom:10,
        right:10,
        borderRadius:20,
        backgroundColor:Colors.light.tint,
        alignItems:'center',
        justifyContent:'center'
    },
    view:{
        borderWidth:1,
        borderColor:'black'
    }
})

export default styles