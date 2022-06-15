import React, { useContext } from 'react';
import { UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from "react-native-gifted-charts";

const BG = require('../../assets/BG.png');
const profile = require('../../assets/profile.png');
const green = require('../../assets/emoji/green.png');
const blue = require('../../assets/emoji/blue.png');
const yellow = require('../../assets/emoji/yellow.png');
const purple = require('../../assets/emoji/purple.png');
const red = require('../../assets/emoji/red.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ResultText = ({}) => {
    return (
        <View style={styles.case5}>
            <Text style={styles.textCase1}>일주일간 6일의 대화 이용을 하셨네요.</Text>
            <View style={{flexDirection:'row', height:'35%', alignItems:'center' }}>
                <Text style={styles.textCase1}>평균 기분은</Text>
                <ImgEmoji
                    style={styles.textEmojiStyles}
                    source={yellow}
                />
                <Text style={styles.textCase1}>이예요.</Text>
            </View>
            <Text style={styles.textCase1}>곰고미와 더 즐거운 대화를 나눠봐요!</Text>
        </View>
    );
};

const NoResultText = ({}) => {
    return (
        <View style={styles.case5}>
            <Text style={styles.textCase1}>일주일간의 대화 기록이 없네요.</Text>
            <Text style={styles.textCase1}>곰고미와 더 즐거운 대화를 나눠봐요!</Text>
        </View>
    );
};

const Home = ({ navigation }) => {
    const { user, senti } = useContext(UserContext);
    console.log(senti);

    const data = [
        {value: 50, label: '월', frontColor: '#FFD561'},
        {value: 75, label: '화', frontColor: '#92D7F8'},
        {value: 0, label: '수'},
        {value: 50, label: '목', frontColor: '#FFD561'},
        {value: 30, label: '금', frontColor: '#177AD5'},
        {value: 10, label: '토', frontColor: '#D6674C'},
        {value: 100, label: '일', frontColor: '#B9D859'},
    ];
    const maxData = [
        {value: 100, label: '월'},
        {value: 100, label: '화'},
        {value: 100, label: '수'},
        {value: 100, label: '목'},
        {value: 100, label: '금'},
        {value: 100, label: '토'},
        {value: 100, label: '일'},
    ];
    const count_day = 6

    return (
        <View style={[styles.header]}>
            <ImageBackground
                source={BG}
                imageStyle={styles.bgImageStyle}
            >
                <View style={styles.container}>
                    <View style={styles.case1}></View>
                    <View style={styles.case2}>
                        <View style={styles.profileStyles}>
                            <ImgProfile 
                                style={{
                                    height: windowWidth * 0.15,
                                    width: windowWidth * 0.15
                                }}
                                source={profile}
                            />
                            <View style={{paddingLeft: '5%'}}>
                                <Text style={{fontSize: 20}}>{user.email}</Text>
                                <Text style={{height: 7}}></Text>
                                <Text style={styles.textCase2}>곰고미에 오신것을 환영합니다</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.case3}>
                        <Text style={styles.textCase1}>Weekly Graph</Text>
                    </View>
                    <View style={styles.case4}>
                        <View style={styles.commentStyle}>
                            <View
                                style={{
                                    height: '15%',
                                    width: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center'}}
                            >
                                <Text
                                    style={styles.textCase3}
                                >{"< \t 2022.05.30 ~ 2022.06.03 \t >"}</Text>
                            </View>
                            <View style={styles.chartStyle}>
                                <View style={styles.emojiStyles}>
                                    <ImgEmoji
                                        style={styles.imgEmojiStyles}
                                        source={green}
                                    />
                                    <ImgEmoji
                                        style={styles.imgEmojiStyles}
                                        source={blue}
                                    />
                                    <ImgEmoji
                                        style={styles.imgEmojiStyles}
                                        source={yellow}
                                    />
                                    <ImgEmoji
                                        style={styles.imgEmojiStyles}
                                        source={purple}
                                    />
                                    <ImgEmoji
                                        style={styles.imgEmojiStyles}
                                        source={red}
                                    />
                                </View>
                                <View style={{alignItems:'flex-end', justifyContent: 'flex-end'}}>
                                    <View 
                                        style={{
                                            position: 'absolute',
                                            bottom: windowHeight * 0.03,
                                            left: -windowWidth * 0.1,
                                            // backgroundColor: theme.testcase4,
                                        }}
                                    >
                                        <BarChart
                                            maxValue={100}
                                            height={ windowHeight * 0.3199 }
                                            initialSpacing={0}
                                            data={maxData}
                                            barWidth={ windowWidth * 0.05641 }
                                            barBorderRadius={ windowWidth * 0.05641 }
                                            frontColor="lightgray"
                                            yAxisThickness={0}
                                            xAxisThickness={0}
                                            hideYAxisText
                                            hideRules/>
                                    </View>
                                    <View 
                                        style={{
                                            position: 'absolute',
                                            bottom: windowHeight * 0.03,
                                            left: -windowWidth * 0.1,
                                            // backgroundColor: theme.testcase4,
                                        }}
                                    >
                                        <BarChart
                                            maxValue={100}
                                            height={ windowHeight * 0.3199 }
                                            initialSpacing={0}
                                            data={data}
                                            barWidth={ windowWidth * 0.05641 }
                                            barBorderRadius={ windowWidth * 0.05641 }
                                            frontColor="lightgray"
                                            yAxisThickness={0}
                                            xAxisThickness={0}
                                            disableScroll={true}
                                            hideYAxisText
                                            hideRules/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    {<ResultText />}
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;

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
    commentStyle: {
        height: '92%',
        width: '90%',
        borderRadius: 15,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
    },

    chartStyle: {
        flexDirection: 'row',
        height: '92%',
        width: '90%',
    },
    profileStyles: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        // backgroundColor: theme.testcase4,
    },
    imgEmojiStyles: {
        height: windowWidth * 0.08,
        width: windowWidth * 0.08,
        margin: '20%'
    },
    emojiStyles: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: '15%'
        // backgroundColor: theme.testcase2
    },
    textEmojiStyles: {
        margin: '3%'
        // backgroundColor: theme.testcase2
    },

    textCase1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textCase2: {
        color: '#86888a'//theme.gray
    },
    textCase3: {
        fontSize: 15,
        fontWeight: "bold",
    },

    container: {
        flex: 1,
        alignItems: 'center',
    },
    case1: {
        width: '100%',
        height: '10%',
    },
    case2: {
        width: '90%',
        height: '10%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase2,
    },
    case3: {
        width: '90%',
        height: '7%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase1,
    },
    case4: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase4,
    },
    case5: {
        width: '100%',
        height: '22%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.testcase5,
    },
});
