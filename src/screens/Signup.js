import React from 'react';
import ProfileForm from './ProfileForm';

const Signup = ({ navigation }) => (
    <ProfileForm
        alertTitle="회원가입을 완료했습니다"
        alertMessage="'곰고미'의 로그인 화면으로 이동됩니다.\n로그인 후 이용해주세요."
        buttonTitle="회원가입 하기"
        onComplete={() => navigation.navigate('Login')}
    />
);

export default Signup;
