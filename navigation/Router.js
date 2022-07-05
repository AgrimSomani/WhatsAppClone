import  React from 'react';
import { View, Text, Pressable ,Image} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigator from './TopTabNavigator';
import constants from '../constants/colors'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import colors from '../constants/colors';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor:constants.light.tint,
                    },
                    headerTitleAlign: 'left',
                    headerTintColor:colors.light.background,
                    headerShadowVisible:false,
                }}
            >
                <Stack.Screen 
                    name="WhatsApp" 
                    component={TopTabNavigator} 
                    options={{
                        headerRight:() => (
                            <View style={{
                                flexDirection:'row',
                                width:60,
                                justifyContent:'space-between',
                            }}>
                                <Pressable>
                                    <Octicons
                                        name={'search'}
                                        size={20}
                                        color={'white'}
                                    />
                                </Pressable>
                                <Pressable>
                                    <MaterialCommunityIcons
                                        name={'dots-vertical'}
                                        size={20}
                                        color={'white'}
                                    />
                                </Pressable>
                            </View>
                        )
                    }}  
                />
                <Stack.Screen
                    name="ChatRoomScreen"
                    component={ChatRoomScreen}
                    options={({route}) => ({
                        title:route.params.chatRoom.users[1].name,
                        headerRight:() => (
                            <View style={{
                                flexDirection:'row',
                                width:120,
                                justifyContent:'space-between',
                            }}>
                                <Pressable>
                                    <MaterialIcons
                                        name={'call'}
                                        size={22}
                                        color={'white'}
                                    />
                                </Pressable>
                                <Pressable>
                                    <FontAwesome5
                                        name={'video'}
                                        size={22}
                                        color={'white'}
                                    />
                                </Pressable>
                                <Pressable>
                                    <MaterialCommunityIcons
                                        name={'dots-vertical'}
                                        size={22}
                                        color={'white'}
                                    />
                                </Pressable>
                            </View>
                        )
                    })}
                />
                <Stack.Screen
                    name="ContactScreen"
                    component={ContactScreen}
                    options={{
                        title:'Contacts'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router