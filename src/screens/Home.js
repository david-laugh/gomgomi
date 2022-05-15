import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity, Linking, View } from 'react-native';
import { Thumbnail } from 'react-native-thumbnail-video';

const imgProfile = require('../../assets/profile.png');
const flower = require('../../assets/flower.png');

const Home = ({ navigation }) => {
    return (
        <Container>
            <Profile>
                <ImgProfile source={imgProfile} />
                <View>
                    <TxtProfile style={{ fontSize: 30, letterSpacing: 3 }}>
                        곰고미
                    </TxtProfile>
                    <TxtProfile style={{ fontSize: 18 }}>
                        곰고미에 오신것을 환영합니다.
                    </TxtProfile>
                </View>
            </Profile>

            <Comment>
                <TxtComment style={{ fontSize: 30 }}>
                    곰고미가 건네는 오늘의 한 마디
                </TxtComment>
                <TxtComment style={{ fontSize: 30 }}>
                    "잘하고 있어요. 눈길을 걷다보면 꽃길이 된다고 해요! 우리
                    인생의 봄날은 언제나 지금입니다."
                </TxtComment>
                <ImgComment source={flower} />
            </Comment>

            <Container>
                <Text style={{ fontSize: 30 }}>
                    마음을 다스리는 동영상 보러가기
                </Text>
                <Youtube>
                    <Thumbnail url="https://www.youtube.com/watch?v=kL1oyIm1_FU" />
                </Youtube>

                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL(
                            'https://www.youtube.com/watch?v=kL1oyIm1_FU'
                        );
                    }}
                >
                    <Text>Youtube channel</Text>
                </TouchableOpacity>
            </Container>
        </Container>
    );
};

export default Home;

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

const Profile = styled.View`
    flex-direction: row;
`;
const ImgProfile = styled.Image`
    left: 38px;
    right: 306px;
    top: 92px;
    bottom: 706px;
`;
const TxtProfile = styled.Text`
    width: 320px;
    height: 30px;
    left: 100px;
    top: 92px;

    line-height: 30px;
    font-weight: 400;
`;

const Comment = styled.View`
    flex: 1;
    height: 136px;
    left: 24px;
    top: 176px;

    background-color: ${({ theme }) => theme.commentBackground};
`;
const TxtComment = styled.Text`
    height: 30px;
    left: 20px;
    top: 92px;

    line-height: 30px;
    font-weight: 400;
`;
const ImgComment = styled.Image`
    left: 580px;
    top: 150px;
`;

const Youtube = styled.View`
    width: 264px;
    height: 320px;
`;
