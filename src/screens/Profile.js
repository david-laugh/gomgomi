import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Profile = ({ navigation }) => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>Profile</Text>
        </Container>
    );
};

export default Profile;
