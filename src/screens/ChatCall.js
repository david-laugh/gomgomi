import React from 'react';
import styled from 'styled-components/native';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { Button } from '../components';

const BG = require('../../assets/BG.png');
const Gomgomi = require('../../assets/Gomgomi.png');

const ChatCall = ({ navigation }) => {
    return (
        <View style={[styles.row, styles.header]}>
            <ImageBackground source={BG} style={styles.bgImage}>
                <Container>
                    <ImgGomgomi source={Gomgomi} />
                    <Text style={{ fontSize: 30 }}>당신의 친구 곰고미</Text>
                    <Text style={{ fontSize: 30 }}>
                        망설이지 말고 곰고미에게 당신의 고민을 털어놓아 보세요.
                    </Text>
                    <Text style={{ fontSize: 30 }}>
                        곰고미의 큰 귀는 모든 고민을 향해 열려있습니다!
                    </Text>
                    <Button />
                </Container>
            </ImageBackground>
        </View>
    );
};

export default ChatCall;

const ImgGomgomi = styled.Image``;
const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const styles = StyleSheet.create({
    header: { flex: 1 },
    bgImage: { width: '100%', height: '100%' },
});

const _handleChatCallButtonPress = async () => {};
