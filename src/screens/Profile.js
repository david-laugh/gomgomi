import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Button, Image, Input } from '../components';
import { logout, getCurrentUser } from '../utils/firebase';
import { UserContext, ProgressContext } from '../contexts';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`;
const style = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,

        position: 'absolute',
        width: 154,
        height: 46,
        left: 202,
        top: 357,

        backgroundColor: '#FFFFFF',
        shadowColor: '#470000',
        borderRadius: 12,
    },
});

const Profile = () => {
    const { dispatch } = useContext(UserContext);
    const { spinner } = useContext(ProgressContext);
    const theme = useContext(ThemeContext);

    const user = getCurrentUser();
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

    const _handleLogoutButtonPress = async () => {
        try {
            spinner.start();
            await logout();
        } catch (e) {
            console.log('[Profile] logout: ', e.message);
        } finally {
            dispatch({});
            spinner.stop();
        }
    };

    const _handlePhotoChange = () => {};

    return (
        <Container>
            <Image
                url={photoUrl}
                onChangeImage={_handlePhotoChange}
                showButton
                rounded
            />
            <Input label="Name" value={user.name} disabled />
            <Input label="Email" value={user.email} disabled />
            <Button
                title="logout"
                onPress={_handleLogoutButtonPress}
                containerStyle={{
                    marginTop: 30,
                    backgroundColor: theme.buttonLogout,
                }}
            />
        </Container>
    );
};

export default Profile;
