import React from 'react';
import ProfileForm from './ProfileForm';

const EditProfile = ({ navigation }) => (
    <ProfileForm
        alertTitle="수정을 완료했습니다"
        alertMessage="'곰고미'의 프로필 화면으로 이동됩니다."
        buttonTitle="수정 완료"
        onComplete={() => navigation.goBack()}
    />
);

export default EditProfile;
