import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import initialMessages from '../examples/messages';
import { GiftedChat } from 'react-native-gifted-chat';
import { renderInputToolbar, renderSend } from '../utils/InputToolbar';
import {
    renderSystemMessage,
    renderBubble,
} from '../components/MessageContainer';
import { UserContext } from '../contexts';
import uuid from 'react-native-uuid';
import { Icon } from 'react-native-elements';

const gomgomi = require('../../assets/callGomgomi.png');

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const ChatRoom = ({ navigation }) => {
    const { chat, chatbot } = useContext(UserContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(initialMessages.reverse());
    }, []);

    const onSend = (newMessages = []) => {
        setMessages((prevMessages) =>
            GiftedChat.append(prevMessages, newMessages)
        );
        setTimeout(() => {
            chatbot(newMessages[0].text);
            console.log(chat);
            setMessages((prevMessages) => 
                GiftedChat.append(prevMessages, [
                    {
                        _id: uuid.v4(),
                        text: chat,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'Gomgomi',
                            avatar: gomgomi,
                        },
                    }
                ])
            );
        }, 2000)
    };

    return (
        <Container>
            <View style={styles.case1}>
                <View style={styles.case2}></View>
                <View style={styles.case3}>
                    <Icon
                        name="chevron-left"
                        size={20}
                        color="black"
                        type="entypo"
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.textCase1}>Chat Talk</Text>
                    <View></View>
                </View>
            </View>
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
                messagesContainerStyle={{ backgroundColor: '#ffffff' }}
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

const styles = StyleSheet.create({
    textCase1: {
        fontSize: 20,
        fontWeight: "bold",
    },

    case1: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
    },
    case2: {
        width: '100%',
        height: '12%',
        backgroundColor: '#E8F2FF',
    },
    case3: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#E8F2FF',
    },
});