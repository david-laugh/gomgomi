import React, { useState, useRef, useEffect, useContext } from 'react';
import { ProgressContext, UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Image, Input, Button } from '../components';
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Alert, View, StyleSheet, Text } from 'react-native';
import { theme } from '../theme';
// import { login } from '../utils/firebase';

const Gomgomi = require('../../assets/gomgomi_head.png');

const Login = ({ navigation }) => {
    const { dispatch } = useContext(UserContext);
    const { spinner } = useContext(ProgressContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);
    const insets = useSafeAreaInsets();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        setDisabled(!(email && password && !errorMessage));
    }, [email, password, errorMessage]);

    const _handleEmailChange = (email) => {
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'Please verify your email.'
        );
    };
    const _handlePasswordChange = (password) => {
        setPassword(removeWhitespace(password));
    };

    const login = async (email, password) => {
        try {
            const response = await fetch('http://34.64.69.248:8100/login/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    id: email, //'user2',
                    password: password //'12345678',
                }),
            });
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // const email1 = 'user2'
    // const password1 = '12345678'

    const _handleLoginButtonPress = async () => {
        try {
            spinner.start();
            const user = await login({ email, password });
            console.log(user);
            dispatch(user);
        } catch (e) {
            Alert.alert('Login Error', e.message);
        } finally {
            spinner.stop();
        }
    };

    // useEffect(() => {
    //     getToken(email1, password1);
    // }, []);

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}
        >
            <View style={styles.container} insets={insets}>
                <View style={styles.case1}>
                    <Text>{data.Token}</Text>
                </View>
                <View style={styles.case2}>
                    <ImgGomgomi source={Gomgomi} />
                </View>
                <View style={styles.case3}>
                    <Text style={styles.textCase1} >반갑습니다!</Text>
                    <Text style={styles.textCase2} >{"\n"}회원 서비스 이용을 위해 로그인 해주세요.</Text>
                </View>
                <View style={styles.case4}>
                    <Input
                        label="Email"
                        value={email}
                        onChangeText={_handleEmailChange}
                        onSubmitEditing={() => passwordRef.current.focus()}
                        placeholer="Email"
                        returnKeyType="next"
                    />
                </View>
                <View style={styles.case5}>
                    <Input
                        ref={passwordRef}
                        label="Password"
                        value={password}
                        onChangeText={_handlePasswordChange}
                        onSubmitEditing={_handleLoginButtonPress}
                        placeholder="Password"
                        returnKeyType="done"
                        isPassword
                    />
                </View>
                <View style={styles.case6}>
                    <Text>자동으로 로그인하기</Text>
                </View>
                <View style={styles.case7}>
                    <Button
                        containerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '80%'
                        }}
                        title="로그인하기"
                        titleStyle={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: '#FFFFFF'
                        }}
                        onPress={_handleLoginButtonPress}
                        disabled={disabled}
                    />
                </View>
                <View style={styles.case8}>
                    <View
                        style={{width: "50%", alignItems: 'flex-end'}}
                    >
                        <Text style={styles.textCase2}>계정이 없으신가요?</Text>
                    </View>
                    <Button
                        containerStyle={{
                            width: "50%",
                            justifyContent: 'center',
                            paddingLeft: 10
                        }}
                        title="회원가입 하기"
                        titleStyle={{fontSize: 14}}
                        onPress={() => navigation.navigate('Signup')}
                        isFilled={false}
                    />
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Login;

const ImgGomgomi = styled.Image`
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: theme.background,
    },
    textCase1: {
        fontSize: 25,
        fontWeight: "bold",
        letterSpacing: 3,
    },
    textCase2: {
        color: '#86888a'//theme.gray
    },
    checkbox: {
        alignSelf: "center",
    },

    case1: {
        width: '100%',
        height: '19%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // backgroundColor: theme.testcase1,
    },
    case2: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase3,
    },
    case4: {
        width: '90%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase4,
    },
    case5: {
        width: '90%',
        height: '12%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase5,
    },
    case6: {
        width: '100%',
        height: '3%',
        paddingLeft: '9%',
        justifyContent: 'center',
        backgroundColor: theme.testcase6,
    },
    case7: {
        width: '90%',
        height: '9%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase1,
    },
    case8: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase3,
    }
});
