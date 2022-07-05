import React,{useState} from 'react';
import {Text,View,Avatar,Image,Pressable, TouchableOpacity} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const InputMessage = props => {  

    const [message,setMessage] = useState("")
    
    const isMessageNull = () => {
        return (message==='')
    }

    const onPressMicrophone = () => {
        console.warn('Microphone Pressed')
    }

    const onPressSend = () => {
        console.warn(`Sending this Message:${message}`)
        setMessage('')
    }
    
    const onPress = () => {
        if (isMessageNull()){
            onPressMicrophone()
        }
        else {
            onPressSend()
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <View style={styles.iconContainer}>
                    <Fontisto name='smiley' size={18} color="grey"/>
                </View>
                <View style={styles.textInput}>
                    <TextInput placeholder='Type a message' style={styles.text} multiline value={message} onChangeText={(text) => setMessage(text)}></TextInput>
                </View>
                <View style={styles.iconContainer}>
                    <FontAwesome name='paperclip' size={18} color="grey"/>
                </View>
                <View style={styles.iconContainer}>
                    {isMessageNull() &&<Fontisto name='camera' size={18} color="grey"/>}
                </View>
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.microphoneContainer}>
                    {isMessageNull()? <MaterialCommunityIcons name ='microphone' size={18} color='white'/> : <MaterialIcons name ='send' size={18} color='white'/>}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputMessage