import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity, Linking } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Home = ({ navigation }) => {
    return (
        <Container>
            <Container>
                <Text style={{ fontSize: 30 }}>
                    곰고미에 오신것을 환영합니다!
                </Text>
            </Container>
            <Container>
                <Text style={{ fontSize: 30 }}>
                    곰고미가 건네는 오늘의 한 마디
                </Text>
            </Container>
            <Container>
                <Text style={{ fontSize: 30 }}>
                    마음을 다스리는 동영상 보러가기
                </Text>
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
