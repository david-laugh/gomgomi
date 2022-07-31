import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, ChatCall, ChatTalk, Profile } from '../screens';
import { Image } from 'react-native';

const call = require('../../assets/tab/call.png');
const chat = require('../../assets/tab/chat.png');
const home = require('../../assets/tab/home.png');
const profile = require('../../assets/tab/profile.png');

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Image
                            source={home}
                        />
                    ),
                    tabBarActiveTintColor: "#000000",
                }}
            />
            <Tab.Screen
                name="ChatCall"
                component={ChatCall}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Image
                            source={call}
                        />
                    ),
                    tabBarActiveTintColor: "#000000",
                }}
            />
            <Tab.Screen
                name="ChatTalk"
                component={ChatTalk}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Image
                            source={chat}
                        />
                    ),
                    tabBarActiveTintColor: "#000000",
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Image
                            source={profile}
                        />
                    ),
                    tabBarActiveTintColor: "#000000",
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTab;
