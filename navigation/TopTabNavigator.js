import  React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import Octicons from 'react-native-vector-icons/Octicons'
import colors from '../constants/colors';
import Fontisto from 'react-native-vector-icons/Fontisto'
import ChatScreen from '../screens/ChatScreen';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    const colorScheme = useColorScheme();
    return(
        <Tab.Navigator  
            screenOptions={{
                tabBarItemStyle: {  height:40, },
            }}
            tabBarOptions={{
                activeTintColor:colors[colorScheme].background,
                style :{
                    backgroundColor:colors[colorScheme].tint
                },
                indicatorStyle:{
                    backgroundColor:colors[colorScheme].background
                }
            }}
            initialRouteName='Chats'
          >
            <Tab.Screen
                name={'Camera'}
                component={HomeScreen}
                options={{
                    headerShown:false,
                    tabBarIcon: ({color}) => (
                        <Fontisto 
                            name={"camera"}
                            size={16}
                            color={color}
                        />
                    ),
                    tabBarLabel: () => null
                }} 
            />
            <Tab.Screen
                name={'Chats'}
                component={ChatScreen}
                options={{
                    headerShown:false
                }} 
            />
            <Tab.Screen
                name={'Status'}
                component={HomeScreen}
                options={{
                    headerShown:false
                }} 
            />
            <Tab.Screen
                name={'Calls'}
                component={HomeScreen}
                options={{
                    headerShown:false
                }} 
            />
        </Tab.Navigator>
    )
}

export default TopTabNavigator;