import React from 'react';
import { InputToolbar, Send } from 'react-native-gifted-chat';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';

export const renderInputToolbar = (props) => (
    <InputToolbar
        {...props}
        containerStyle={{
            backgroundColor: '#CED2D9',
        }}
        primaryStyle={{ alignItems: 'center' }}
    />
);

export const renderSend = (props) => (
    <Send
        {...props}
        disabled={!props.text}
        containerStyle={{
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 4,
        }}
    >
        <MaterialIcons
            name="send"
            size={24}
            color={
                props.text
                    ? theme.sendButtonActivate
                    : theme.sendButtonInactivate
            }
        />
    </Send>
);
