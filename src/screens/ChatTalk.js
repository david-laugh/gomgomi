import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { StyleSheet, Text, FlatList, View, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import { fetchApiCall } from '../utils/fatchApi';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;
const styles = StyleSheet.create({
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
    container: {
        flex: 1,
        padding: 0,
    },
});
const ItemContainer = styled.TouchableOpacity`
    padding: 15px 20px;
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
const ItemIntro = styled.Text`
    font-size: 10px;
    color: ${({ theme }) => theme.text};
`;
const ItemStartChat = styled.View`
    left: 5%;
    height: 20%;
    width: 90%;
    border-radius: 15px;
    background: #d6e7ff;
`;

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

const Item = React.memo(
    ({ item: { id, title, description, createdAt }, onPress }) => {
        const theme = useContext(ThemeContext);

        return (
            <ItemContainer
                style={styles.ItemContainer}
                //onPress={() => onPress({ id, title })}
                onPress={() => onPress('http://172.30.1.56:8888/login')}
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

const ChatTalk = ({ navigation }) => {
    const _handleItemPress = (params) => {
        navigation.navigate('ChatRoom', params);
    };
    const _handleTest = (params) => {
        try {
            const data = fetchApiCall(params);
            console.log(data);
        } catch (e) {
            Alert.alert('error', e.message);
        }
    };
    return (
        <Container>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ItemIntro style={{ fontSize: 20 }}>안녕하세요</ItemIntro>
                <ItemIntro>곰고미와 채팅하기에 오신것을 환영합니다!</ItemIntro>
                <ItemIntro>
                    망설이지 말고 당신의 고민을 곰고미에게 털어놓아 보세요!
                </ItemIntro>
            </View>
            <ItemStartChat>
                <Text>대화 시작하기</Text>
            </ItemStartChat>
            <View>
                <Text>최근 나눈 대화</Text>
            </View>
            <FlatList
                keyExtractor={(item) => item['id'].toString()}
                data={channels}
                renderItem={({ item }) => (
                    <Item item={item} onPress={_handleTest} />
                )}
                windowSize={3}
            />
        </Container>
    );
};

export default ChatTalk;
