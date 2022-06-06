import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import base64 from 'react-native-base64';
import axios from 'axios';
// import { readFile } from "react-native-fs";

const Login = ({ navigation }) => {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState("");
  const [loading, setLoading] = useState(true);  

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        
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
        xhr.send(null);
    });

    const audioBase64 = await blobToBase64(blob);

    // const params = {
    //     key: base64.encode(audioBase64)
    // };
    // const response = await axios.post(
    //     "http://34.64.69.248:8100/voice_chatbot",
    //     params
    // );
    const binary = base64.encode(audioBase64);
    console.log(typeof(binary));
    
    let formdata = new FormData();
    formdata.append("voice", binary, "voice");

    const getToken = async () => {
        try {
            const response = await fetch('http://34.64.69.248:8100/api/voice_chatbot/', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'multipart/form-data',
                    Authorization : 'Token c940dfe459dd8068c392e2e475fb40cd1908155d'
                },
                body: formdata
            });
            // console.log(response);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    getToken();

    console.log(data);

    blob.close()
  }
//   console.log(recordings);
//   if (recordings.length > 1) {
//     console.log(recordings[recordings.length - 1].file);
//   }

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
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
        </View>
      );
    });
  }
        //  Button style={styles.button} onPress={() => getUriToBase64()} title="convert"></Button>

    // async function getUriToBase64(uri) {
    //     const base64String = await readFile(uri, "base64");
    //     console.log(base64String);
    //     return base64String
    // }
          
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording} />
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
