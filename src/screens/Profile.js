import React, {Component} from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Button, Accordian } from '../components';
import { theme } from '../theme';

const BG = require('../../assets/BG.png');
const profile = require('../../assets/profile.png');
const faqUser = require('../../assets/faq/user.png');
const faqChat = require('../../assets/faq/chat.png');
const faqGlobe = require('../../assets/faq/globe.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const menu = [
    {
        img: faqUser,
        title: '개인정보 변경은 어떻게 하나요?',
        data: "'곰고미' 어플의 홈에서 하단바 가장 우측의 프로필 아이콘을 눌러 화면을 이동하십시오. 해당 프로필 화면에서 'Edit Profile' 을 누르십시오. 'Edit Profile' 에서 당신의 이름, 성별, 생년월일, 이메일 및 비밀번호를 변경할 수 있습니다.",
    },
    {
        img: faqChat,
        title: '대화를 끝내는 방법을 모르겠어요',
        data: "'곰고미' 어플의 홈에서 하단바 가장 우측의 프로필 아이콘을 눌러 화면을 이동하십시오. 해당 프로필 화면에서 'Edit Profile' 을 누르십시오. 'Edit Profile' 에서 당신의 이름, 성별, 생년월일, 이메일 및 비밀번호를 변경할 수 있습니다."
    },
    {
        img: faqGlobe,
        title: '전화 연결이 불안정합니다',
        data: "'곰고미' 어플의 홈에서 하단바 가장 우측의 프로필 아이콘을 눌러 화면을 이동하십시오. 해당 프로필 화면에서 'Edit Profile' 을 누르십시오. 'Edit Profile' 에서 당신의 이름, 성별, 생년월일, 이메일 및 비밀번호를 변경할 수 있습니다."
    }
]

const Profile = ({ navigation }) => {
    const _handleEditProfilePress = () => {
        navigation.navigate('EditProfile');
    };

    
      
    const renderAccordians=()=> {
        const items = [];
        for (let item of menu) {
            items.push(
                <Accordian
                    img = {item.img}
                    title = {item.title}
                    data = {item.data}
                />
            );
        }
        return items;
    }

    return (
        <View style={[styles.header]}>
            <ImageBackground
                source={BG}
                imageStyle={styles.bgImageStyle}
            >
                <View style={styles.container}>
                    <View style={styles.case1}>
                        <Text style={styles.textCase1}>Profile</Text>
                    </View>
                    <View style={styles.case2}>
                        <ImgProfile 
                            style={{
                                height: windowWidth * 0.25,
                                width: windowWidth * 0.25
                            }}
                            source={profile}
                        />
                    </View>
                    <View style={styles.case3}>
                        <Text style={styles.textCase2}>John Doe</Text>
                    </View>
                    <View style={styles.case4}>
                        <Text>JohnDoe@Gomgomi.com</Text>
                    </View>
                    <View style={styles.case5}>
                        <View
                            style={{
                                width: '50%',
                                alignItems: 'center',
                            }}
                        >
                            <Button 
                                containerStyle={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '70%',
                                    width: '80%',
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 15
                                }}
                                onPress={_handleChatCallButtonPress}
                                title="Edit Profile"
                                titleStyle={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    color: '#000000'
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: '50%',
                                alignItems: 'center'
                            }}
                        >
                            <Button 
                                containerStyle={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '70%',
                                    width: '80%',
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 15
                                }}
                                onPress={_handleChatCallButtonPress}
                                title="Log-out"
                                titleStyle={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    color: '#000000'
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.case6}>
                        <Text style={styles.textCase3}>FAQ</Text>
                    </View>
                    <View style={styles.case7}>
                        <View style={styles.container}>
                            {renderAccordians() }
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Profile;

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
    startChatStyle: {
        left: '8%',
        top: '9%',
        height: '82%',
        width: '84%',
        borderRadius: 15,
        backgroundColor: '#D6E7FF'
    },

    textCase1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textCase2: {
        fontSize: 23,
        fontWeight: "bold",
    },
    textCase3: {
        fontSize: 18,
    },

    container: {
        flex: 1,
        alignItems: 'center',
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
        height: '18%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase3,
    },
    case4: {
        width: '100%',
        height: '5%',
        alignItems: 'center',
        // backgroundColor: theme.testcase4,
    },
    case5: {
        flexDirection: 'row',
        width: '90%',
        height: '10%',
        // backgroundColor: theme.testcase5,
    },
    case6: {
        width: '100%',
        height: '10%',
        paddingLeft: '9%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase6,
    },
    case7: {
        width: '100%',
        height: '30%',
        // backgroundColor: theme.testcase1,
    },
});

const _handleChatCallButtonPress = async () => {};
