import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, ChatCall, ChatTalk, Profile, ChatRoom, EditProfile, ChatCallRoom } from '../screens';
import MainTab from './MainTab';

const Stack = createStackNavigator();

const MainStack = () => {
    const theme = useContext(ThemeContext);

    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: theme.headerTintColor,
                cardStyle: { backgroundColor: theme.backgroundColor },
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen
                name="Main"
                component={MainTab}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ChatCall" component={ChatCall} />
            <Stack.Screen name="ChatTalk" component={ChatTalk} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoom}
                options={{ 
                    title: 'Chat Talk',
                }}
            />
            <Stack.Screen
                name="ChatCallRoom"
                component={ChatCallRoom}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default MainStack;
