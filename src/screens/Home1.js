import React from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const BG = require('../../assets/BG.png');
const profile = require('../../assets/profile.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Home
const Home1 = ({ navigation }) => {

    return (
        <View style={[styles.header]}>
            <ImageBackground
                source={BG}
                imageStyle={styles.bgImageStyle}
            >
                <View style={styles.container}>
                    <View style={styles.case1}></View>
                    <View style={styles.case2}>
                        <Profile />
                    </View>
                    <Text style={styles.textCase1}>Weekly Graph</Text>
                    <View style={styles.commentStyle}>
                        <Text>Chart</Text>
                    </View>


                </View>
            </ImageBackground>
        </View>
    );
};

export default Home1;

// _Component
const Profile = ({}) => {
    return (
        <View style={styles.profileStyles}>
            <ImgProfile 
                style={{
                    height: windowWidth * 0.15,
                    width: windowWidth * 0.15
                }}
                source={profile}
            />
            <View style={{paddingLeft: '5%'}}>
                <Text style={{fontSize: 20}}>홍길동</Text>
                <Text style={{height: 7}}></Text>
                <Text style={styles.textCase2}>곰고미에 오신것을 환영합니다</Text>
            </View>
        </View>
    )
}

const WeeklyGraph = ({}) => {
    return (
        <View></View>
    )
}

const GraphExplanation = ({}) => {
    return (
        <View></View>
    )
}

const ImageBackground = styled.ImageBackground`
    flex: 1;
`;
const ImgProfile = styled.Image`
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
    commentStyle: {
        height: '92%',
        width: '90%',
        borderRadius: 15,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    profileStyles: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        // backgroundColor: theme.testcase4,
    },
    textCase1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textCase2: {
        color: '#86888a'//theme.gray
    },
    case1: {
        width: '100%',
        height: '10%',
    },
    case2: {
        width: '90%',
        height: '10%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase2,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
});
