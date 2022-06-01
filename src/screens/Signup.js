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
import { login } from '../utils/firebase';

const Signup = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}
        >
            <View style={styles.container}>
                <View style={styles.case2}></View>
                <View style={styles.case3}>
                    <Input
                        label="이름 *"
                    />
                </View>
                <View style={styles.case4}>
                    <Input
                        label="성별"
                    />
                </View>
                <View style={styles.case5}>
                    <Input
                        label="생년월일 *"
                    />
                </View>
                <View style={styles.case6}>
                    <Input
                        label="Email"
                    />
                </View>
                <View style={styles.case7}>
                    <Button
                        title="회원가입 하기"
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
    },

    case2: {
        width: '100%',
        height: '19%',
        backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '14%',
        backgroundColor: theme.testcase3,
    },
    case4: {
        width: '100%',
        height: '14%',
        backgroundColor: theme.testcase4,
    },
    case5: {
        width: '100%',
        height: '14%',
        backgroundColor: theme.testcase5,
    },
    case6: {
        width: '100%',
        height: '14%',
        backgroundColor: theme.testcase6,
    },
    case7: {
        width: '100%',
        height: '19%',
        backgroundColor: theme.testcase1,
    }
});
