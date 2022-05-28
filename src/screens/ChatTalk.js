import React from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../theme';

const BG = require('../../assets/BG.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChatTalk = ({ navigation }) => {
    return (
        <View style={[styles.header]}>
            <ImageBackground source={BG} imageStyle={styles.bgImageStyle}>
                <View style={styles.container}>
                    <View style={styles.case1}>
                        <Text style={{ textAlign: 'center' }}>Chat Call</Text>
                    </View>
                    <View style={styles.case2}>
                        <Text>안녕하세요</Text>
                    </View>
                    <View style={styles.case3}>
                        <Text>곰고미와 채팅하기에 오신것을 환영합니다!</Text>
                        <Text>망설이지 말고 당신의 고민을 곰고미에게 털어놓아 보세요!</Text>
                    </View>
                    <View style={styles.case4}>
                        <View style={styles.startChatStyle}></View>
                    </View>
                    <View style={styles.case5}>
                        <Text>최근 나눈 대화</Text>
                    </View>
                    <View style={styles.case6}></View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ChatTalk;

const ImageBackground = styled.ImageBackground`
    flex: 1;
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
    startChatStyle: {
        left: '8%',
        top: '9%',
        height: '82%',
        width: '84%',
        borderRadius: 15,
        backgroundColor: '#D6E7FF'
    },

    container: {
        flex: 1,
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
        height: '5%',
        paddingLeft: '9%',
        justifyContent: 'center',
        backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '7%',
        paddingLeft: '9%',
        justifyContent: 'center',
        backgroundColor: theme.testcase3,
    },
    case4: {
        width: '100%',
        height: '26%',
        backgroundColor: theme.testcase4,
    },
    case5: {
        width: '100%',
        height: '8%',
        paddingLeft: '9%',
        justifyContent: 'center',
        backgroundColor: theme.testcase5,
    },
    case6: {
        width: '100%',
        height: '40%',
        backgroundColor: theme.testcase6,
    },
});
