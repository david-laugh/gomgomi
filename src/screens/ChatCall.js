import React from 'react';
import styled from 'styled-components/native';
import { Text, Button, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const _handleChatCallButtonPress = async () => {};

const ChatCall = ({ navigation }) => {
    return (
        <View>
            <SvgXml width="200" height="200" uri="../../assets/BG.svg" />
            <Container>
                <Text style={{ fontSize: 30 }}>당신의 친구 곰고미</Text>
                <Text style={{ fontSize: 30 }}>
                    망설이지 말고 곰고미에게 당신의 고민을 털어놓아 보세요.
                </Text>
                <Text style={{ fontSize: 30 }}>
                    곰고미의 큰 귀는 모든 고민을 향해 열려있습니다!
                </Text>
                <Button
                    title="곰고미와 전화하기"
                    onPress={_handleChatCallButtonPress}
                />
            </Container>
        </View>
    );
};

export default ChatCall;
