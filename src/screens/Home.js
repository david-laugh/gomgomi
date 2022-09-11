import React, { Component, useContext } from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Graph } from '../components';
import { UserContext } from '../contexts';

const BG = require('../../assets/BG.png');
const profile = require('../../assets/profile.png');
const green = require('../../assets/emoji/green.png');
const blue = require('../../assets/emoji/blue.png');
const yellow = require('../../assets/emoji/yellow.png');
const purple = require('../../assets/emoji/purple.png');
const red = require('../../assets/emoji/red.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Home
export default class Home extends Component {
    render() {
        return (
            <View style={[styles.header]}>
                <ImageBackground
                    source={BG}
                    imageStyle={styles.bgImageStyle}
                >
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>
                        <Profile />
                        <WeeklyGraph />
                        <GraphExplanation />
                    </View>
                </ImageBackground>
            </View>
        );
    };
}

// _Component
const Profile = ({}) => {
    const { user } = useContext(UserContext);

    return (
        <View style={{
            marginTop: '20%',
            width: '90%',
            height: '10%',
            justifyContent: 'center',
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <ImgProfile 
                    style={{
                        height: windowWidth * 0.15,
                        width: windowWidth * 0.15
                    }}
                    source={profile}
                />
                <View style={{paddingLeft: '5%'}}>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>{user.name}</Text>
                    <Text style={{height: 7}}></Text>
                    <Text style={{color: '#86888a'}}>곰고미에 오신것을 환영합니다</Text>
                </View>
            </View>
        </View>
    )
}
const WeeklyGraph = ({}) => {
    return (
        <View style={{
            flex: 1,
            width: '100%',
            height: '50%',
            marginTop: '8%'
        }}>
            <View style={{
                width: '90%',
                height: '8%',
                justifyContent: 'center',
                paddingLeft: '5%',
                marginBottom: '3%'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                }}>
                    Weekly Graph
                </Text>
            </View>
            <View style={{
                height: '80%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    height: '100%',
                    width: '90%',
                    borderRadius: 15,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    alignItems: 'center',
                }}>
                    <View style={{
                        height: '15%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '4%'
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                        }}>
                            {"< \t\t 2022.09.12 ~ 2022.09.18 \t\t >"}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingRight: '5%',
                        marginBottom: '5%',
                    }}>
                        <View style={{
                            width: '20%',
                            alignItems: 'center',
                        }}>
                            <ImgEmoji 
                                style={{
                                    height: windowWidth * 0.07,
                                    width: windowWidth * 0.07,
                                    marginBottom: '28%'
                                }}
                                source={green}
                            />
                            <ImgEmoji 
                                style={{
                                    height: windowWidth * 0.07,
                                    width: windowWidth * 0.07,
                                    marginBottom: '28%'
                                }}
                                source={blue}
                            />
                            <ImgEmoji 
                                style={{
                                    height: windowWidth * 0.07,
                                    width: windowWidth * 0.07,
                                    marginBottom: '28%'
                                }}
                                source={yellow}
                            />
                            <ImgEmoji 
                                style={{
                                    height: windowWidth * 0.07,
                                    width: windowWidth * 0.07,
                                    marginBottom: '28%'
                                }}
                                source={purple}
                            />
                            <ImgEmoji 
                                style={{
                                    height: windowWidth * 0.07,
                                    width: windowWidth * 0.07,
                                    marginBottom: '10%'
                                }}
                                source={red}
                            />
                        </View>
                        <Graph />
                    </View>
                </View>
            </View>
        </View>
    )
}
const GraphExplanation = ({}) => {
    return (
        <View style={{
            width: '100%',
            height: '21%',
            alignItems: 'center',
            paddingTop: '5%'
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: "5%"
            }}>
                일주일간의 대화 기록이 없네요.
            </Text>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold"
            }}>
                곰고미와 더 즐거운 대화를 나눠봐요!
            </Text>
        </View>
    )
}

const ImageBackground = styled.ImageBackground`
    flex: 1;
`;
const ImgProfile = styled.Image`
`;
const ImgEmoji = styled.Image`
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
});
