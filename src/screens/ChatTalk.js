import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { StyleSheet, Text, FlatList, LogBox } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';

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
});
const ItemContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 20px;

    background: #ffffff;
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
    color: ${({ theme }) => theme.listTime};
`;
const ItemTime = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.listTime};
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
                onPress={() => onPress({ id, title })}
            >
                <ItemTextContainer>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemDescription>{description}</ItemDescription>
                </ItemTextContainer>
                <ItemTime>{getDateOrTime(createdAt)}</ItemTime>
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
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>최근 나눈 대화</Text>
            <FlatList
                keyExtractor={(item) => item['id'].toString()}
                data={channels}
                renderItem={({ item }) => (
                    <Item item={item} onPress={_handleItemPress} />
                )}
                windowSize={3}
            />
        </Container>
    );
};

export default ChatTalk;
