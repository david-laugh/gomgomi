import React, { useState, useEffect } from 'react';
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
import { theme } from '../theme';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(initialMessages.reverse());
    }, []);

    const onSend = (newMessages = []) => {
        setMessages((prevMessages) =>
            GiftedChat.append(prevMessages, newMessages)
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
