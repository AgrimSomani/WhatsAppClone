import React from 'react'
import {View,Text,FlatList,ImageBackground} from 'react-native'
import styles from './styles'
import { useRoute } from '@react-navigation/native'
import ChatMessage from '../../components/ChatMessage'
import chats from '../../data/Chats'
import InputMessage from '../../components/InputMessage'



const ChatRoomScreen = props => {
    const route = useRoute();
    return(
        <ImageBackground source={require('../../data/BG.jpg')} style={{height:'100%',width:'100%'}}>
            <FlatList
                data = {chats.messages}
                renderItem = {({item}) => <ChatMessage message = {item} />}
            />
            <InputMessage/>
        </ImageBackground>
        
    )
}

export default ChatRoomScreen