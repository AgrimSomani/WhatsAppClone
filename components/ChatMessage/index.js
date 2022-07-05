import React from 'react';
import {Text,View,Avatar,Image,Pressable} from 'react-native';
import styles from './styles';
import moment from 'moment'

const ChatMessage = props => {  
    const {message} = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return(
        <View style={styles.container}>
            <View style={[
                styles.messageBox,
                {
                    backgroundColor: isMyMessage() ? '#DCF8C5': '#e5e5e5',
                    marginLeft: isMyMessage() ? 50 :0,
                    marginRight: isMyMessage() ? 0: 50,
                }
                ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.content}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).format('LT')}</Text>
            </View>
        </View>
    )
}

export default ChatMessage