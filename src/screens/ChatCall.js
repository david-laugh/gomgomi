import React from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Button } from '../components';
import { theme } from '../theme';

const BG = require('../../assets/BG.png');
const Gomgomi = require('../../assets/Gomgomi.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChatCall = ({ navigation }) => {
    return (
        <View style={[styles.header]}>
            <ImageBackground source={BG} imageStyle={styles.bgImageStyle}>
                <View style={styles.container}>
                    <View style={styles.case1}>
                        <Text style={{ textAlign: 'center' }}>Chat Call</Text>
                    </View>
                    <View style={styles.case2}>
                        <ImgGomgomi source={Gomgomi} />
                    </View>
                    <View style={styles.case3}>
                        <Text style={{ textAlign: 'center' }}>당신의 친구 곰고미</Text>
                    </View>
                    <View style={styles.case4}>
                        <Text style={{ textAlign: 'center' }}>망설이지 말고 곰고미에게 당신의 고민을</Text>
                        <Text style={{ textAlign: 'center' }}>털어놓아 보세요.</Text>
                    </View>
                    <View style={styles.case5}>
                        <Text style={{ textAlign: 'center' }}>곰고미의 큰 귀는 모든 고민을 향해 열려있습니다!</Text>
                    </View>
                    <View style={styles.case6}>
                        <Button containerStyle={{ width: '50%' }} onPress={_handleChatCallButtonPress} title="곰고미와 전화하기"/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ChatCall;

const ImageBackground = styled.ImageBackground`
    flex: 1;
`;
const ImgGomgomi = styled.Image`
`;

const styles = StyleSheet.create({
    header: { flex: 1 },
    bgImageStyle: {
        bottom: 100,
        width: windowWidth * 1.2,
        height: windowHeight * 1.2,
        left: -windowWidth * 0.1,
        top: -windowHeight * 0.35,
    },
    callButton: { width: 193, height: 50 },

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    case1: {
        width: '100%',
        height: '14%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: theme.testcase1,
    },
    case2: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '8%',
        justifyContent: 'center',
        backgroundColor: theme.testcase3,
    },
    case4: {
        width: '100%',
        height: '8%',
        justifyContent: 'center',
        backgroundColor: theme.testcase4,
    },
    case5: {
        width: '100%',
        height: '6%',
        justifyContent: 'center',
        backgroundColor: theme.testcase5,
    },
    case6: {
        width: '100%',
        height: '14%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.testcase6,
    },
});

const _handleChatCallButtonPress = async () => {};
