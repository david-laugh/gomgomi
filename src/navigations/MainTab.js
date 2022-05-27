import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, ChatCall, ChatTalk, Profile } from '../screens';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="ChatCall"
                component={ChatCall}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="ChatTalk"
                component={ChatTalk}
                options={{ title: 'Chat Talk' }}
            />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default MainTab;