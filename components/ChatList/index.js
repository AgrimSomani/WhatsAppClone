import React from 'react';
import {Text,View,Avatar,Image,Pressable} from 'react-native';
import { ChatRoom } from '../../types';
import styles from './styles';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';



const ChatListItem = props => {
    const {ChatRoom} = props;
    const navigation = useNavigation();

    const user = ChatRoom.users[1];

    const onClickChatRoom = () => {
      navigation.navigate('ChatRoomScreen',{chatRoom:ChatRoom})
    }

    return(
      <Pressable onPress={onClickChatRoom}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{uri:user.imageUri}} style={styles.avatar}/>
          </View>
          <View style={styles.wordContainer}>
            <View style ={styles.nameAndDateContainer}>
              <View>
                <Text style={styles.nameText}>{user.name}</Text>
              </View>
              <View>
                <Text  style={styles.lastMessageDateText}>{moment(ChatRoom.lastMessage.createdAt).format('l')}</Text>
              </View>
            </View>
            <View style={styles.lastMessageContainer}>
              <Text style={styles.lastMessageText}>{ChatRoom.lastMessage.content}</Text>
            </View>
          </View>
        </View>
      </Pressable>
      
    )
}

export default ChatListItem