import React, { useContext }  from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Button } from '../components';
import { theme } from '../theme';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';

const BG = require('../../assets/BG.png');
const callGomgomi = require('../../assets/callGomgomi.png');
const clock = require('../../assets/clock.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChatTalk = ({ navigation }) => {
    const _handleChatCallButtonPress = params => {
        navigation.navigate('ChatRoom', params);
    };

    return (
        <View style={[styles.header]}>
            <ImageBackground source={BG} imageStyle={styles.bgImageStyle}>
                <View style={styles.container}>
                    <View style={styles.case1}>
                        <Text style={styles.textCase1}>Chat Talk</Text>
                    </View>
                    <View style={styles.case2}>
                        <Text style={styles.textCase2}>안녕하세요</Text>
                    </View>
                    <View style={styles.case3}>
                        <Text style={styles.textCase3}>곰고미와 채팅하기에 오신것을 환영합니다!</Text>
                        <Text style={styles.textCase3}>망설이지 말고 당신의 고민을 곰고미에게 털어놓아 보세요!</Text>
                    </View>
                    <View style={styles.case4}>
                        <View style={styles.startChatStyle}>
                            <View 
                                style={{
                                    height: '33%',
                                    paddingLeft: '5%',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={styles.textCase4}>대화 시작하기</Text>
                            </View>
                            <View 
                                style={{
                                    flexDirection: 'row',
                                    height: '33%',
                                    paddingLeft: '5%',
                                }}
                            >
                                <Img source={callGomgomi}/>
                                <View>
                                    <View 
                                        style={{
                                            height: '50%',
                                            paddingLeft: '7%',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text>곰고미의 평균 응답시간</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            height: '33%',
                                            paddingLeft: '7%',
                                        }}
                                    >
                                        <Img source={clock}/>
                                        <Text style={styles.textCase5}>5 Sec</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                height: '33%',
                                paddingLeft: '5%'
                            }}>
                                <Button 
                                    containerStyle={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '70%',
                                        width: '80%',
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: 15
                                    }}
                                    onPress={_handleChatCallButtonPress}
                                    title="곰고미에게 메세지 보내기"
                                    titleStyle={{
                                        fontSize: 17,
                                        fontWeight: "bold",
                                        color: '#000000'
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.case5}>
                        <Text style={styles.textCase1}>최근 나눈 대화</Text>
                    </View>
                    <View style={styles.case6}>
                        <FlatList
                            keyExtractor={(item) => item['id'].toString()}
                            data={channels}
                            renderItem={({ item }) => (
                                <Item item={item} onPress={_handleChatCallButtonPress} />
                            )}
                            windowSize={3}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ChatTalk;

const ItemContainer = styled.TouchableOpacity`
    padding: 20px 30px;
    box-shadow: 0px 16px 32px rgba(245, 248, 252, 0.6);
    border-radius: 15px;

    margin: 5px 10px;
`;
const ItemTextContainer = styled.View`
    flex: 1;
    flex-direction: column;
`;
const ItemTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
`;
const ItemDescription = styled.Text`
    font-size: 16px;
    margin-top: 5px;
    color: ${({ theme }) => theme.grayText};
`;
const ItemTime = styled.Text`
    font-size: 12px;
    margin-top: 5px;
    margin-left: 10px;
    color: ${({ theme }) => theme.grayText};
`;

const ImageBackground = styled.ImageBackground`
    flex: 1;
`;
const Img = styled.Image`
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
    startChatStyle: {
        left: '8%',
        top: '9%',
        height: '82%',
        width: '84%',
        borderRadius: 15,
        backgroundColor: '#D6E7FF'
    },
    ItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#ffffff',
        shadowColor: '#470000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    textCase1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textCase2: {
        fontSize: 23,
        letterSpacing: 1,
        fontWeight: "bold",
    },
    textCase3: {
        fontSize: 14,
        color: '#86888a'
    },
    textCase4: {
        fontSize: 22
    },
    textCase5: {
        color: '#86888a'
    },

    container: {
        flex: 1,
    },
    case1: {
        width: '100%',
        height: '14%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // backgroundColor: theme.testcase1,
    },
    case2: {
        width: '100%',
        height: '5%',
        paddingLeft: '9%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase2,
    },
    case3: {
        width: '100%',
        height: '7%',
        paddingLeft: '9%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase3,
    },
    case4: {
        width: '100%',
        height: '26%',
        // backgroundColor: theme.testcase4,
    },
    case5: {
        width: '100%',
        height: '8%',
        paddingLeft: '9%',
        justifyContent: 'center',
        // backgroundColor: theme.testcase5,
    },
    case6: {
        width: '100%',
        height: '40%',
        // backgroundColor: theme.testcase6,
    },
});

const Item = React.memo(
    ({ item: { id, title, description, createdAt }, onPress }) => {
        const theme = useContext(ThemeContext);

        return (
            <ItemContainer
                style={styles.ItemContainer}
                onPress={() => onPress({ id, title })}
            >
                <ItemTextContainer>
                    <ItemTitle>{title}</ItemTitle>
                    <View style={[styles.container, { flexDirection: 'row' }]}>
                        <ItemDescription>{description}</ItemDescription>
                        <ItemTime>{getDateOrTime(createdAt)}</ItemTime>
                    </View>
                </ItemTextContainer>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color={theme.listIcon}
                />
            </ItemContainer>
        );
    }
);

const channels = [];
channels.push({
    id: 1,
    title: `곰고미와 나눈 대화1`,
    description: `곰고미`,
    createdAt: 11700000000,
});
channels.push({
    id: 2,
    title: `곰고미와 나눈 대화2`,
    description: `곰고미`,
    createdAt: 11700000000,
});
channels.push({
    id: 3,
    title: `곰고미와 나눈 대화3`,
    description: `곰고미`,
    createdAt: 11700000000,
});

const getDateOrTime = (ts) => {
    const now = moment().startOf('day');
    const target = moment(ts).startOf('day');
    return moment(ts).format(now.diff(target, 'days') > 0 ? 'MM/DD' : 'HH:mm');
};