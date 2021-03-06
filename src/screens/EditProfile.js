import React, { useState, useRef, useEffect, useContext } from 'react';
import { ProgressContext, UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Input, Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Alert, View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { theme } from '../theme';
import SwitchSelector from 'react-native-switch-selector';
import DateTimePicker from '@react-native-community/datetimepicker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const options = [
    { label: '선택 안함', value: '0' },
    { label: '여성', value: '1' },
    { label: '남성', value: '2' }
];

const profile = require('../../assets/profile.png');

const EditProfile = ({ navigation }) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        // 화면 스크롤 컴포넌트 수정
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}
        >
    
            <ScrollView>
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
                <View style={styles.case5}>
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                    <Input
                        label="생년월일 *"
                    />
                </View>
                <View style={styles.case6}>
                    <Input
                        label="Email *"
                    />
                </View>
                <View style={styles.case6}>
                    <Input
                        label="Email *"
                    />
                </View>
                <View style={styles.case7}>
                    <Button
                        title="회원가입 하기"
                        onPress={() => navigation.navigate('Login')}
                        containerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '80%'
                        }}
                        titleStyle={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: '#FFFFFF'
                        }}
                    />
                </View>
            </View>
            </ScrollView>
        </KeyboardAwareScrollView>

    );
};

export default EditProfile;

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