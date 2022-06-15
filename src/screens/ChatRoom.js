import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Animated, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import initialMessages from '../examples/messages';
import { GiftedChat } from 'react-native-gifted-chat';
import { renderInputToolbar, renderSend } from '../utils/InputToolbar';
import {
    renderSystemMessage,
    renderMessageText,
    renderMessage,
    renderBubble,
} from '../components/MessageContainer';
import { UserContext } from '../contexts';
import uuid from 'react-native-uuid';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

const ChatRoom = () => {
    const { chat, chatbot } = useContext(UserContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(initialMessages.reverse());
    }, []);

    const onSend = (newMessages = []) => {
        setMessages((prevMessages) =>
            GiftedChat.append(prevMessages, newMessages)
        );
        chatbot(newMessages[0].text);
        console.log(chat);
        setMessages((prevMessages) => 
            GiftedChat.append(prevMessages, [
                {
                    _id: uuid.v4(),
                    text: chat,
                    createdAt: new Date(Date.UTC(2022, 4, 21, 5, 20, 0)),
                    user: {
                        _id: 2,
                        name: 'Gomgomi',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                }
            ])
        );
    };

    return (
        <Container>
            <GiftedChat
                placeholder="Enter a message..."
                messages={messages}
                showAvatarForEveryMessage={true}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: 1,
                    name: 'Aaron',
                    avatar: 'https://placeimg.com/150/150/any',
                }}
                messagesContainerStyle={{ backgroundColor: '#E5E5E5' }}
                renderBubble={renderBubble}
                renderSystemMessage={renderSystemMessage}
                // renderMessage={renderMessage}
                renderInputToolbar={renderInputToolbar}
                renderSend={renderSend}
            />
        </Container>
    );
};

export default ChatRoom;
