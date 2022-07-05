import React from 'react';
import {Text,View,Image,Pressable} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



const ContactItem = props => {
    const {Contact} = props;
    const navigation = useNavigation();

    const onClickChatRoom = () => {
      console.warn('Contact Clicked')
    }

    return(
      <Pressable onPress={onClickChatRoom}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{uri:Contact.imageUri}} style={styles.avatar}/>
          </View>
          <View style={styles.wordContainer}>
            <View>
                <Text style={styles.nameText}>{Contact.name}</Text>
                <Text style={styles.statusText}>{Contact.status}</Text>
            </View>
          </View>
        </View>
      </Pressable>
      
    )
}

export default ContactItem