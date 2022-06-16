import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import uuid from 'react-native-uuid';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

const BG = require('../../assets/BG.png');
const mike = require('../../assets/mike.png');
const activatedMike = require('../../assets/activatedMike.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
    {
        id: uuid.v4(),
        user: '안녕',
        gomgomi: '안녕하세요! 저는 곰고미라고 합니다 :)'
    },
    {
        id: uuid.v4(),
        user: '반가워 난 이규혁이야',
        gomgomi:'반가워요 규혁님! 혹시 어떤 고민이 있으신가요?'
    },
];

const Item = ({ user, gomgomi }) => (
    <View>
        <View style={styles.item}>
            <View style={styles.userTextBox}>
                <Text style={styles.userText}>{user}</Text>
            </View>
        </View>
        <View style={styles.item}>
            <View style={styles.gomgomiTextBox}>
                <Text style={styles.gomgomiText}>{gomgomi}</Text>
            </View>
        </View>
    </View>
);

const ChatCallRoom = ({ navigation }) => {
    const [Amike, setAMike] = useState(false);
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const [data, setData] = React.useState({});
    const [kakao, setKakao] = React.useState("");
    const [binary, setBinary] = React.useState("");
    const [loading, setLoading] = useState(true);
    const [audioUri, setAudioUri] = useState("");

    const { user } = useContext(UserContext);


    const RECORDING_OPTIONS_PRESET_HIGH_QUALITY = {
        isMeteringEnabled: true,
        android: {
            extension: '.wav',
            outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
            audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
            sampleRate: 48000,
            numberOfChannels: 2,
            bitRate: 128000,
        },
        ios: {
            extension: '.wav',
            audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 128000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
        },
    };
    async function startRecording() {
        try {
            const permission = await Audio.requestPermissionsAsync();

            if (permission.status === "granted") {
                await Audio.setAudioModeAsync(
                    {
                        allowsRecordingIOS: true,
                        playsInSilentModeIOS: true
                    }
                );
            
            const { recording } = await Audio.Recording.createAsync(
                RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
            );

            setRecording(recording);
            setAudioUri(recording.getURI())
        } else {
            setMessage("Please grant permission to app to access microphone");
        }
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();

        let updatedRecordings = [...recordings];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        updatedRecordings.push({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI()
        });
        //// console.log(updatedRecordings[updatedRecordings.length - 1].file);

        setRecordings(updatedRecordings);

        const audioURI = recording.getURI();

        // bookmark
        const testBase64 = await FileSystem.readAsStringAsync(audioURI, { encoding: FileSystem.EncodingType.Base64 })
        console.log(testBase64);

        setBinary(testBase64);
        //// console.log(base64.encode(audioBase64));
    }

    const getToken = async () => {
        const formdata = new FormData();
        formdata.append("voice", binary);
        try {
            const response = await fetch('http://172.30.1.56:8888/api/voice_chatbot/', {
                method: 'POST',
                headers: {
                    'Authorization' : 'Token c940dfe459dd8068c392e2e475fb40cd1908155d',
                    'Content-Type' : "maltipart/form-data"
                },
                body: formdata
            }, 3000);
            const json = await response.text();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const MikeView = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}
            >
                <WaveIndicator />
                <TouchableOpacity onPress={_handleMikeButtonPress}>
                    <ImgGomgomi source={mike}/>
                </TouchableOpacity>
                <WaveIndicator />
            </View>
        );
    };
    const ActivatedMikeView = () => {
        return (
            <TouchableOpacity onPress={_handleActivatedMikeButtonPress}>
                <ImgGomgomi source={activatedMike}/>
            </TouchableOpacity>
        );
    };
    
    const _handleMikeButtonPress = async () => {
        setAMike(true);
        startRecording();
    };

    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
    }

    const _handleActivatedMikeButtonPress = async () => {
        setAMike(false);
        stopRecording();
        getToken();

        await FileSystem.writeAsStringAsync(audioUri, data, {
            encoding: FileSystem.EncodingType.Base64,
        });

        const sound = new Audio.Sound();
        await sound.loadAsync({
            uri : audioUri
        });
        await sound.playAsync();
    };
    
    const renderItem = ({ item }) => (
        <Item 
            user={item.user}
            gomgomi={item.gomgomi}
        />
    );

    return (
        <View style={[styles.header]}>
            <ImageBackground 
                source={BG}
                imageStyle={styles.bgImageStyle}
            >
                <View style={styles.container}>
                    <View style={styles.case1}>
                        <Icon
                            name="chevron-left"
                            size={20}
                            color="black"
                            type="entypo"
                            onPress={() => navigation.goBack()}
                        />
                        <Text style={styles.textCase1}>Chat Call</Text>
                        <View></View>
                    </View>
                    <View style={styles.case2}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.case3}>
                        {Amike ? <ActivatedMikeView/> : <MikeView/>}
                    </View>
                </View>
            </ImageBackground>
        </View>
    );


};

export default ChatCallRoom;

const ImageBackground = styled.ImageBackground`
    flex: 1;
`;
const ImgGomgomi = styled.Image`
`;

const styles = StyleSheet.create({
    header: { flex: 1 },
    bgImageStyle: {
        bottom: 100,
        width: windowWidth * 1.2,
        height: windowHeight * 1,
        left: -windowWidth * 0.1,
        top: -windowHeight * 0.2,
    },
    callButton: { width: 193, height: 50 },
    textCase1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textCase2: {
        fontSize: 25,
        fontWeight: "bold",
    },
    textCase3: {
        fontSize: 15,
        textAlign: 'center',
        color: '#86888a'//theme.gray
    },

    item: {
        // backgroundColor: '#f9c2ff',
        paddingVertical: 18,
        paddingHorizontal: 22,
        marginHorizontal: 16,
    },
    userTextBox: {
        alignSelf: 'flex-end',
        width:'75%',
    },
    gomgomiTextBox: {
        alignSelf: 'flex-start',
        width:'75%'
    },
    userText: {
        fontSize: 20,
        alignSelf: 'flex-end',
        fontWeight: "bold",
        color: '#3C64B1',
    },
    gomgomiText: {
        fontSize: 20,
        alignSelf: 'flex-start',
        fontWeight: "bold",
        color: '#212226'
    },

    container: {
        flex: 1,
        // backgroundColor: 'white',
    },
    case1: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        // backgroundColor: theme.testcase1,
    },
    case2: {
        width: '100%',
        height: '70%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: theme.testcase3,
    },
});
