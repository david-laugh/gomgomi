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
                    <View style={styles.case3}></View>
                    <View style={styles.case4}></View>
                    <View style={styles.case5}></View>
                    <View style={styles.case6}></View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ChatCall;

const ImageBackground = styled.ImageBackground`
    flex: 1;
`;
const ImgGomgomi = styled.Image``;
const CTGomgomi = styled.View``;

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
        backgroundColor: theme.testcase1,
    },
    case2: {
        width: '100%',
        height: '50%',
        backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '8%',
        backgroundColor: theme.testcase3,
    },
    case4: {
        width: '100%',
        height: '8%',
        backgroundColor: theme.testcase4,
    },
    case5: {
        width: '100%',
        height: '6%',
        backgroundColor: theme.testcase5,
    },
    case6: {
        width: '100%',
        height: '14%',
        backgroundColor: theme.testcase6,
    },
});

const _handleChatCallButtonPress = async () => {};
