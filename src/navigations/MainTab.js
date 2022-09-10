import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, ChatCall, ChatTalk, Profile } from '../screens';
import { Image } from 'react-native';

const abled_call = require('../../assets/tab/abled/call.png');
const abled_talk = require('../../assets/tab/abled/talk.png');
const abled_home = require('../../assets/tab/abled/home.png');
const abled_profile = require('../../assets/tab/abled/profile.png');
const disabled_call = require('../../assets/tab/disabled/call.png');
const disabled_talk = require('../../assets/tab/disabled/talk.png');
const disabled_home = require('../../assets/tab/disabled/home.png');
const disabled_profile = require('../../assets/tab/disabled/profile.png');

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={focused ? abled_home : disabled_home}
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
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={focused ? abled_call : disabled_call}
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
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={focused ? abled_talk : disabled_talk}
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
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={focused ? abled_profile : disabled_profile}
                        />
                    ),
                    tabBarActiveTintColor: "#000000",
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTab;
