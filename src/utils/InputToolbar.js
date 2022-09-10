import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { InputToolbar, Send } from 'react-native-gifted-chat';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';

const SendBox = require('../../assets/SendBox.png');

const ImgSendBox = styled.Image`
`;

export const renderInputToolbar = (props) => (
    <InputToolbar
        {...props}
        containerStyle={{
            backgroundColor: '#F0F0F0',
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
        {props.text ? <ImgSendBox source={SendBox} /> : <View></View>}
        {/* <MaterialIcons
            name="send"
            size={24}
            color={
                props.text
                    ? theme.sendButtonActivate
                    : theme.sendButtonInactivate
            }
        /> */}
    </Send>
);
