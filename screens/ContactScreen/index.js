import React from 'react'
import {View,Text,FlatList,ImageBackground} from 'react-native'
import styles from './styles'
import users from '../../data/Users'
import ContactItem from '../../components/ContactItem'
import Users from '../../data/Users'


const ContactScreen = props => {
    
    return(
        <View style={styles.container}>
            <FlatList
                data={Users}
                renderItem={({item}) => <ContactItem Contact = {item}/>}
                keyExtractor= {(item) => item.id}
            /> 
        </View>
    )
}

export default ContactScreen