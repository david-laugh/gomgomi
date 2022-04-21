import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import initialMessages from '../examples/messages';
import { GiftedChat } from 'react-native-gifted-chat';
import {
    renderInputToolbar,
    renderActions,
    renderComposer,
    renderSend,
} from '../utils/InputToolbar';
import {
    renderAvatar,
    renderBubble,
    renderSystemMessage,
    renderMessage,
    renderMessageText,
    renderCustomView,
} from '../components/MessageContainer';

const user = {
    _id: 1,
    name: 'Aaron',
    avatar: 'https://placeimg.com/150/150/any',
};

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

const ChatRoom = () => {
    const [text, setText] = useState('');
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
                messages={messages}
                text={text}
                onInputTextChanged={setText}
                onSend={onSend}
                user={{
                    _id: 1,
                    name: 'Aaron',
                    avatar: 'https://placeimg.com/150/150/any',
                }}
                alignTop
                alwaysShowSend
                scrollToBottom
                // showUserAvatar
                renderAvatarOnTop
                renderUsernameOnMessage
                bottomOffset={26}
                onPressAvatar={console.log}
                renderInputToolbar={renderInputToolbar}
                renderActions={renderActions}
                renderComposer={renderComposer}
                renderSend={renderSend}
                renderAvatar={renderAvatar}
                renderBubble={renderBubble}
                renderSystemMessage={renderSystemMessage}
                renderMessage={renderMessage}
                renderMessageText={renderMessageText}
                // renderMessageImage
                renderCustomView={renderCustomView}
                isCustomViewBottom
                messagesContainerStyle={{ backgroundColor: 'indigo' }}
                parsePatterns={(linkStyle) => [
                    {
                        pattern: /#(\w+)/,
                        style: linkStyle,
                        onPress: (tag) =>
                            console.log(`Pressed on hashtag: ${tag}`),
                    },
                ]}
            />
        </Container>
    );
};

export default ChatRoom;
