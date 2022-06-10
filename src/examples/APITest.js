import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import base64 from 'react-native-base64';
// import { readFile } from "react-native-fs";

const Login = ({ navigation }) => {
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const [data, setData] = React.useState("");
    const [binary, setBinary] = React.useState("");
    const [loading, setLoading] = useState(true);  

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
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );

            setRecording(recording);
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
        //console.log(updatedRecordings[updatedRecordings.length - 1].file);

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
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
                resolve(xhr.response);
            };
            xhr.onerror = function() {
                resolve(xhr.response);
            };
            xhr.responseType = "blob";
            xhr.open("GET", audioURI, true);
            const reader = new FileReader(audioURI);
            reader.onload = function() {
                result = reader.result;
                console.log(this.result);
            }
            xhr.send(null);
        });

        const audioBase64 = await blobToBase64(blob);

        blob.close()

        setBinary(audioBase64);
        // console.log(audioBase64);
    }
    //   console.log(recordings);
    //   if (recordings.length > 1) {
    //     console.log(recordings[recordings.length - 1].file);
    //   }
    const formdata = new FormData();
    formdata.append("voice", binary);
    // console.log(formdata);

    const getToken = async () => {
        try {
            const response = await fetch('http://34.64.69.248:8100/api/voice_chatbot/', {
                method: 'POST',
                headers: {
                    Authorization : 'Token c940dfe459dd8068c392e2e475fb40cd1908155d'
                },
                body: formdata,
            });
            const json = await response.text();
            setData(json);
            setLoading(false);
            console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
    }

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
                        onPress={() => recordingLine.sound.replayAsync()}
                        title="Play"
                    />
                </View>
            );
        });
    }
        
    return (
        <View style={styles.container}>
            <Text>{message}</Text>
            <Button
                title={recording ? 'Stop Recording' : 'Start Recording'}
                onPress={recording ? stopRecording : startRecording}
            />
            <Button
                title={'test'}
                onPress={getToken}
            />
            {getRecordingLines()}
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
