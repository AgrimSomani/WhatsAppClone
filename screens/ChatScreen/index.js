import React from 'react'
import {View,Text,FlatList,TouchableOpacity} from 'react-native'
import ChatListItem from '../../components/ChatList'
import styles from './styles'
import ChatRooms from '../../data/ChatRooms'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ContactButton from '../../components/ContactButton'


const ChatScreen = props => {

    return(
        <View style={styles.container}>
           <FlatList
                data={ChatRooms}
                renderItem={({item}) => <ChatListItem ChatRoom = {item}/>}
                keyExtractor= {(item) => item.id}
           /> 
           <ContactButton/> 
        </View>
    )
}

export default ChatScreen