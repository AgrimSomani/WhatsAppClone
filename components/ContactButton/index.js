import React from 'react'
import {View,TouchableOpacity, Pressable} from 'react-native'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'


const ContactButton = props => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ContactScreen')
    }

    return(
        <Pressable onPress={onPress} style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name='message-reply-text'
                    size={20}
                    color={'white'}
                />
        </Pressable>
    )
}

export default ContactButton
