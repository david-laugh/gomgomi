import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: theme.backgroundColor },
                headerTintColor: theme.headerTintColor,
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: theme.headerBackground,
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;