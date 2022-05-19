import React from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from '../components';

const BG = require('../../assets/BG.png');
const Gomgomi = require('../../assets/Gomgomi.png');

const ChatCall = ({ navigation }) => {
    return (
        <View style={[styles.row, styles.header, styles.main]}>
            <ImageBackground source={BG} style={styles.bgImage} imageStyle={styles.bgImageStyle}>
                <Container>
                    <Text style={{ fontSize: 25 }}>Chat Call</Text>
                    <ImgGomgomi source={Gomgomi} />
                    
                    
                </Container>
            </ImageBackground>
            <Text style={{ fontSize: 25 }}>당신의 친구 곰고미</Text>
                    <Text style={{ fontSize: 15 }}>
                        망설이지 말고 곰고미에게 당신의 고민을 털어놓아 보세요.
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                        곰고미의 큰 귀는 모든 고민을 향해 열려있습니다!
                    </Text>
                    <Button containerStyle={styles.callButton} title="곰고미와 전화하기"/>
        </View>
    );
};

export default ChatCall;

const ImageBackground = styled.ImageBackground`
    flex: 1;
`;
const ImgGomgomi = styled.Image``;
const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const styles = StyleSheet.create({
    main: {flex:1, justifyContent:'center', alignItems:'center'},
    header: { flex: 1 },
    bgImage: { height: '100%', width:'100%'},
    bgImageStyle: {width: '100%', height:'100%'},
    callButton: { width: 193, height: 50}
});

const _handleChatCallButtonPress = async () => {};
