import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import base64 from 'react-native-base64';
import * as FileSystem from 'expo-file-system';
// import { readFile } from "react-native-fs";

const Login = ({ navigation }) => {
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const [data, setData] = React.useState({});
    const [kakao, setKakao] = React.useState("");
    const [binary, setBinary] = React.useState("");
    const [loading, setLoading] = useState(true);
    const [audioUri, setAudioUri] = useState("");

    const RECORDING_OPTIONS_PRESET_HIGH_QUALITY = {
        isMeteringEnabled: true,
        android: {
            extension: '.wav',
            outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
            audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
            sampleRate: 44100,
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

        const blobToBase64 = (blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);

            return new Promise((resolve) => {
                reader.onloadend = () => {
                    resolve(reader.result);
                };
            });
        };

        const audioURI = recording.getURI();

        // bookmark
        const testBase64 = await FileSystem.readAsStringAsync(audioURI, { encoding: FileSystem.EncodingType.Base64 })
        // console.log(testBase64);

        setBinary(testBase64);
        //// console.log(base64.encode(audioBase64));
    }
    //   // console.log(recordings);
    //   if (recordings.length > 1) {
    //     // console.log(recordings[recordings.length - 1].file);
    //   }
    const formdata = new FormData();
    formdata.append("voice", binary);
    // // console.log(binary)
    const getToken = async () => {
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
            console.log(json);
            console.log('end');
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // kakao api : TTS
    const kakaoApi = async () => {
        console.log(1)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "KakaoAK 80b269050cd58c9743d68720ddc84692");
        myHeaders.append("Content-Type", "'application/xml'");
        var formdata = new FormData();
        formdata.append("data", "<speak><voice name='WOMAN_DIALOG_BRIGHT'> 그는 그렇게 말했습니다</voice></speak>");
        try {
            const response = await fetch('https://kakaoi-newtone-openapi.kakao.com/v1/synthesize', {
                method: 'POST',
                headers: {
                    'Authorization' : 'KakaoAK 80b269050cd58c9743d68720ddc84692',
                    'Content-Type' : 'application/xml'
                },
                body: formdata,
                redirect: 'follow'
            });
            const json = await response.text();
            setKakao(json);
            setLoading(false);
            console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const [isLoading, setIsLoading] = useState(false);

    const login = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://172.30.1.56:8888/login/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    id: 'tester@gomgomi.com',
                    password: '12345678',
                }),
            }, 3000);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const signup = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://34.64.69.248:8100/register/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    id: 'test33',
                    password: '12345678',
                    email: 'test33@gomgomi.com'
                }),
            }, 3000);
            const json = await response.json();
            // console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const chatbot = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://172.30.1.56:8888/api/chatbot/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Token 0516b76236f56e6615b1a53e1edb7716da36808f'
                },
                body: JSON.stringify({
                    sent : '지금 뭐해?'
                }),
            }, 3000);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const sentiment = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://34.64.69.248:8100/api/sentiment/', {
                method: 'GET',
                headers: {
                    'Authorization' : 'Token 0516b76236f56e6615b1a53e1edb7716da36808f'
                },
            }, 3000);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };


    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
    }

    // const [sound1, setSound] = useState();
    async function ensureDirExists() {
        const dir = FileSystem.documentDirectory + "myDirectory/";
        const dirInfo = await FileSystem.getInfoAsync(dir);
        if (!dirInfo.exists) {
          console.log("directory doesn't exist, creating...");
          await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
        } else {
          console.log("directory alreay exists");
        }
    }

    const _handleLogOutButtonPress = async () => {
        // console.log(FileSystem.documentDirectory)
        // const filename = FileSystem.documentDirectory + "temp22.wav";
        console.log(audioUri);
        console.log(base64.decode(data));
        await FileSystem.writeAsStringAsync(audioUri, data, {
            encoding: FileSystem.EncodingType.Base64,
        });
        console.log(audioUri);
        const sound = new Audio.Sound();
        await sound.loadAsync({
            uri : audioUri
        });
        await sound.playAsync();
        // try {
        //     const sound = new Expo.Audio.Sound();
        //     await sound.loadAsync({
        //         uri : binary
        //     });
        //     await sound.playAsync();
        // } catch (error) {
        //     console.log(error);
        // }
        
        // console.log(base64.decode(data))
    };

    function getRecordingLines() {
        
        return recordings.map((recordingLine, index) => {
            return (
                <View key={index} style={styles.row}>
                    <Text 
                        style={styles.fill}
                    >
                        Recording {index + 1} - {recordingLine.duration}
                    </Text>
                    <Button
                        style={styles.button}
                        onPress={_handleLogOutButtonPress}
                        title="Play"
                    />
                </View>
            );
        });
    }
        
    return (
        <View style={styles.container}>
            <View 
                style={{
                    height: '70%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Button
                    title={'login'}
                    onPress={login}
                />
                <Button
                    title={'signup'}
                    onPress={signup}
                />
                <Button
                    title={'chatbot'}
                    onPress={chatbot}
                />
                <Button
                    title={'sentiment'}
                    onPress={sentiment}
                />
                <Text>{message}</Text>
                <Button
                    title={recording ? 'Stop Recording' : 'Start Recording'}
                    onPress={recording ? stopRecording : startRecording}
                />
                <Button
                    title={'Send Audio Files'}
                    onPress={getToken}
                />
                <Button
                    title={'kakao'}
                    onPress={kakaoApi}
                />
            </View>
            <ScrollView style={{height: '30%'}}>
                {getRecordingLines()}
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fill: {
        flex: 1,
        margin: 16
    },
    button: {
        margin: 16
    }
});

export default Login;
