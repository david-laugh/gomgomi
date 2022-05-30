import React from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../theme';

const BG = require('../../assets/BG.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {
    return (
        <View style={[styles.header]}>
            <ImageBackground source={BG} imageStyle={styles.bgImageStyle}>
                <View style={styles.container}>
                    <View style={styles.case1}></View>
                    <View style={styles.case2}>
                        <View style={styles.profileStyles}></View>
                        <View style={styles.profileStyles}>
                            <Text>John Doe</Text>
                            <Text>곰고미에 오신것을 환영합니다</Text>
                        </View>
                    </View>
                    <View style={styles.case3}>
                        <View style={styles.commentStyle}>
                            <Text style={{paddingLeft: "5%"}}>곰고미가 건네는 오늘의 한 마디</Text>
                            <Text>" 잘하고 있어요. 눈길을 걷다보면 꽃길이 된다고 해요!</Text>
                            <Text>우리 인생의 봄날은 언제나 지금입니다. "</Text>
                        </View>
                    </View>
                    <View style={styles.case4}>
                        <Text>마음을 다스리는 동영상 보러가기</Text>
                    </View>
                    <View style={styles.case5}>
                        <View style={styles.commentStyle}></View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;

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
    commentStyle: {
        left: '8%',
        top: '4%',
        height: '92%',
        width: '84%',
        borderRadius: 15,
        backgroundColor: theme.commentBackground
    },
    profileStyles: {
        flex: 1,
        height: '100%',
        width: '50%',
        backgroundColor: theme.testcase4,
    },

    container: {
        flex: 1,
    },
    case1: {
        width: '100%',
        height: '9%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: theme.testcase3,
    },
    case2: {
        flexDirection: 'row',
        width: '100%',
        height: '12%',
        justifyContent: 'center',
        backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '20%',
        backgroundColor: theme.testcase1,
    },
    case4: {
        width: '100%',
        height: '9%',
        paddingLeft: '9%',
        justifyContent: 'center',
        backgroundColor: theme.testcase4,
    },
    case5: {
        width: '100%',
        height: '41%',
        backgroundColor: theme.testcase5,
    },
});
