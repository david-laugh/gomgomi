import React from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../theme';

const BG = require('../../assets/BG.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = ({ navigation }) => {
    return (
        <View style={[styles.header]}>
            <ImageBackground source={BG} imageStyle={styles.bgImageStyle}>
                <View style={styles.container}>
                    <View style={styles.case1}>
                        <Text style={{ textAlign: 'center' }}>Profile</Text>
                    </View>
                    <View style={styles.case2}></View>
                    <View style={styles.case3}>
                        <Text>John Doe</Text>
                    </View>
                    <View style={styles.case4}>
                        <Text>JohnDoe@Gomgomi.com</Text>
                    </View>
                    <View style={styles.case5}></View>
                    <View style={styles.case6}>
                        <Text>FAQ</Text>
                    </View>
                    <View style={styles.case7}></View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Profile;

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
        height: '18%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.testcase3,
    },
    case4: {
        width: '100%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.testcase4,
    },
    case5: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        backgroundColor: theme.testcase5,
    },
    case6: {
        width: '100%',
        height: '10%',
        paddingLeft: '9%',
        justifyContent: 'center',
        backgroundColor: theme.testcase6,
    },
    case7: {
        width: '100%',
        height: '30%',
        backgroundColor: theme.testcase1,
    },
});
