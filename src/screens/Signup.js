import React, { useState, useRef, useEffect, useContext } from 'react';
import { ProgressContext, UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Input, Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Alert, View, StyleSheet, Text, Dimensions } from 'react-native';
import { theme } from '../theme';
import SwitchSelector from 'react-native-switch-selector';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const options = [
    { label: '선택 안함', value: '0' },
    { label: '여성', value: '1' },
    { label: '남성', value: '2' }
];

const profile = require('../../assets/profile.png');

const Signup = ({ navigation }) => {
    const { signup } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const _handleEmailChange = (email) => {
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        // setErrorMessage(
        //     validateEmail(changedEmail) ? '' : 'Please verify your email.'
        // );
    };
    const _handlePasswordChange = (password) => {
        setPassword(removeWhitespace(password));
    };
    const _handleUserNameChange = (userName) => {
        setUserName(removeWhitespace(userName));
    };

    const createThreeButtonAlert = () => Alert.alert(
        "회원가입을 완료했습니다",
        "'곰고미'의 로그인 화면으로 이동됩니다.\n로그인 후 이용해주세요.",
        [
            {
                text: "예",
                onPress: () => {navigation.navigate('Login')}
            }
        ]
    );

    const _handleSignUpButtonPress = () => {
        signup(userName, password, email);
        createThreeButtonAlert()
    };

    return (
        // 화면 스크롤 컴포넌트 수정
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}
        >
            <View style={styles.container}>
                <View style={styles.case2}>
                    <ImgProfile
                        style={{
                            height: windowWidth * 0.35,
                            width: windowWidth * 0.35
                        }}
                        source={profile} />
                </View>
                <View style={styles.case3}>
                    <Input
                        label="이름 *"
                        value={userName}
                        onChangeText={_handleUserNameChange}
                        onSubmitEditing={{}}
                    />
                </View>
                <View style={styles.case1}>
                    <Text style={styles.textCase1}>성별</Text>
                </View>
                <View style={styles.case4}>
                    <SwitchSelector 
                        options={options} 
                        initial={0} 
                        onPress={value => console.log(`Call onPress with value: ${value}`)}
                        borderRadius={0}
                        buttonColor={theme.testcase1}
                        height={windowHeight * 0.07}
                        animationDuration={1}
                    />
                </View>
                {/* <View style={styles.case5}>
                    <Input
                        label="생년월일 *"
                    />
                </View> */}
                <View style={styles.case6}>
                    <Input
                        label="Email *"
                        value={email}
                        onChangeText={_handleEmailChange}
                        onSubmitEditing={{}}
                    />
                </View>
                <View style={styles.case6}>
                    <Input
                        label="Password *"
                        value={password}
                        onChangeText={_handlePasswordChange}
                        onSubmitEditing={{}}
                        isPassword
                    />
                </View>
                <View style={styles.case7}>
                    <Button
                        title="회원가입 하기"
                        onPress={_handleSignUpButtonPress}
                        containerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}
                        titleStyle={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: '#FFFFFF'
                        }}
                    />
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Signup;

const ImgProfile = styled.Image`
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.background,
    },
    textCase1: {
        color: '#86888a'//theme.gray
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },

    case1: {
        width: '90%',
        height: '6%',
        paddingTop: 20,
        paddingBottom: 10,
        // backgroundColor: theme.testcase2,
    },
    case2: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase2,
    },
    case3: {
        width: '90%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase3,
    },
    case4: {
        width: '90%',
        height: '9%',
        alignItems: 'center',
        // backgroundColor: theme.testcase4,
    },
    case5: {
        width: '90%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase5,
    },
    case6: {
        width: '90%',
        height: '14%',
        paddingTop: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase6,
    },
    case7: {
        width: '90%',
        height: '19%',
        paddingTop: '6%',
        paddingBottom: '14%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase1,
    }
});

// import React, {useState} from 'react';
// import {View, Button, Platform} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const Signup = () => {
//     const [date, setDate] = useState(new Date(1598051730000));
//     const [mode, setMode] = useState('date');
//     const [show, setShow] = useState(false);

//     const onChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setShow(Platform.OS === 'ios');
//         setDate(currentDate);
//     };

//     const showMode = currentMode => {
//         setShow(true);
//         setMode(currentMode);
//     };

//     const showDatepicker = () => {
//         showMode('date');
//     };

//     const showTimepicker = () => {
//         showMode('time');
//     };

//     return (
//         <View>
//         <View>
//             <Button onPress={showDatepicker} title="Show date picker!" />
//         </View>
//         <View>
//             <Button onPress={showTimepicker} title="Show time picker!" />
//         </View>
//             {show && (
//                 <DateTimePicker
//                 testID="dateTimePicker"
//                 timeZoneOffsetInMinutes={0}
//                 value={date}
//                 mode={mode}
//                 is24Hour={true}
//                 display="default"
//                 onChange={onChange}
//                 />
//             )}
//         </View>
//     );
// };

// export default Signup;