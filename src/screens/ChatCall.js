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
            <ImageBackground 
                source={BG}
                imageStyle={styles.bgImageStyle}
            >
                <View style={styles.container}>
                    <View style={styles.case1}>
                        <Text style={styles.textCase1}>Chat Call</Text>
                    </View>
                    <View style={styles.case2}>
                        <ImgGomgomi source={Gomgomi} />
                    </View>
                    <View style={styles.case3}>
                        <Text style={styles.textCase2}>당신의 친구 곰고미</Text>
                    </View>
                    <View style={styles.case4}>
                        <Text style={styles.textCase3}>망설이지 말고 곰고미에게 당신의 고민을</Text>
                        <Text style={styles.textCase3}>털어놓아 보세요.</Text>
                    </View>
                    <View style={styles.case5}>
                        <Text style={styles.textCase3}>곰고미의 큰 귀는 모든 고민을 향해 열려있습니다!</Text>
                    </View>
                    <View style={styles.case6}>
                        <Button 
                            containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '50%',
                                width: '50%',
                                backgroundColor: '#3C64B1',
                                borderRadius: 15
                            }}
                            onPress={_handleChatCallButtonPress}
                            title="곰고미와 전화하기"
                            titleStyle={{
                                fontSize: 17,
                                fontWeight: "bold",
                                color: '#FFFFFF'
                            }}
                        />
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
        height: windowHeight * 1,
        left: -windowWidth * 0.1,
        top: -windowHeight * 0.2,
    },
    callButton: { width: 193, height: 50 },
    textCase1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textCase2: {
        fontSize: 25,
        fontWeight: "bold",
    },
    textCase3: {
        fontSize: 15,
        textAlign: 'center',
        color: '#86888a'//theme.gray
    },

    container: {
        flex: 1,
        // backgroundColor: 'white',
    },
    case1: {
        width: '100%',
        height: '14%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // backgroundColor: theme.testcase1,
    },
    case2: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: theme.testcase3,
    },
    case4: {
        width: '100%',
        height: '8%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase4,
    },
    case5: {
        width: '100%',
        height: '3%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase5,
    },
    case6: {
        width: '100%',
        height: '19%',
        alignItems: 'center',
        padding: '5%',
        backgroundColor: theme.testcase6,
    },
});

const _handleChatCallButtonPress = async () => {};
