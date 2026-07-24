import React, { useContext, useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SwitchSelector from 'react-native-switch-selector';
import { Button, Image, Input } from '../components';
import { UserContext } from '../contexts';
import { theme } from '../theme';
import { removeWhitespace } from '../utils/common';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const genderOptions = [
    { label: '선택 안함', value: '0' },
    { label: '여성', value: '1' },
    { label: '남성', value: '2' },
];

const profile = require('../../assets/profile.png');

const ProfileForm = ({
    alertMessage,
    alertTitle,
    buttonTitle,
    onComplete,
}) => {
    const { signup } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const showCompleteAlert = () => {
        Alert.alert(alertTitle, alertMessage, [
            {
                text: '예',
                onPress: onComplete,
            },
        ]);
    };

    const handleSubmit = async () => {
        const result = await signup(userName, password, email);
        if (result) {
            showCompleteAlert();
        }
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}
        >
            <View style={styles.container}>
                <View style={styles.profileImageContainer}>
                    <Image
                        style={{
                            height: windowWidth * 0.35,
                            width: windowWidth * 0.35,
                        }}
                        showButton
                        source={profile}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        label="이름 *"
                        value={userName}
                        onChangeText={(value) =>
                            setUserName(removeWhitespace(value))
                        }
                    />
                </View>
                <View style={styles.labelContainer}>
                    <Text style={styles.labelText}>성별</Text>
                </View>
                <View style={styles.genderContainer}>
                    <SwitchSelector
                        options={genderOptions}
                        initial={0}
                        onPress={(value) =>
                            console.log(`Call onPress with value: ${value}`)
                        }
                        borderRadius={0}
                        buttonColor={theme.testcase1}
                        height={windowHeight * 0.07}
                        animationDuration={1}
                    />
                </View>
                <View style={styles.wideInputContainer}>
                    <Input
                        label="Email *"
                        value={email}
                        onChangeText={(value) =>
                            setEmail(removeWhitespace(value))
                        }
                    />
                </View>
                <View style={styles.wideInputContainer}>
                    <Input
                        label="Password *"
                        value={password}
                        onChangeText={(value) =>
                            setPassword(removeWhitespace(value))
                        }
                        isPassword
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={buttonTitle}
                        onPress={handleSubmit}
                        containerStyle={styles.button}
                        titleStyle={styles.buttonTitle}
                    />
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default ProfileForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.background,
    },
    labelText: {
        color: '#86888a',
    },
    labelContainer: {
        width: '90%',
        height: '6%',
        paddingTop: 20,
        paddingBottom: 10,
    },
    profileImageContainer: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '90%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    genderContainer: {
        width: '90%',
        height: '9%',
        alignItems: 'center',
    },
    wideInputContainer: {
        width: '90%',
        height: '14%',
        paddingTop: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '90%',
        height: '19%',
        paddingTop: '6%',
        paddingBottom: '14%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
