import React from 'react';
import { Text } from 'react-native';
import {
    SystemMessage,
    Message,
    MessageText,
    Bubble,
} from 'react-native-gifted-chat';

export const renderBubble = (props) => (
    <Bubble
        {...props}
        // renderTime={() => <Text>Time</Text>}
        // renderTicks={() => <Text>Ticks</Text>}
        wrapperStyle={{
            right: {
                backgroundColor: '#212226',
                borderRadius: 10,
                borderBottomRightRadius: 0,
                maxWidth: '60%',
            },
            left: {
                backgroundColor: '#F3F3F3',
                borderRadius: 10,
                borderBottomLeftRadius: 0,
                maxWidth: '60%',
            },
        }}
    />
);

export const renderSystemMessage = (props) => (
    <SystemMessage
        {...props}
        containerStyle={{ backgroundColor: 'pink' }}
        wrapperStyle={{ borderWidth: 10, borderColor: 'white' }}
        textStyle={{ color: 'crimson', fontWeight: '900' }}
    />
);

export const renderMessage = (props) => (
    <Message {...props} renderDay={() => <Text>Date</Text>} />
);

export const renderMessageText = (props) => (
    <MessageText
        {...props}
        textStyle={{
            left: { color: '#212226' },
            right: { color: '#FFFFFF' },
        }}
        customTextStyle={{ fontSize: 13, lineHeight: 20 }}
    />
);
