import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import { BallIndicator } from 'react-native-indicators';

const Container = styled.View`
    position: absolute;
    z-index: 2;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: ${({ theme }) => theme.spinnerBackground};
`;

const Spinner = () => {
    const theme = useContext(ThemeContext);
    return (
        // <Container>
        //     <ActivityIndicator size={'large'} color={theme.spinnerIndicator} />
        //     <BallIndicator color='#9a9a9a' count={12} size={50}/>
        // </Container>
        <Container>
            <BallIndicator color='#9a9a9a' count={12} size={50}/>
        </Container>
    );
};

export default Spinner;
