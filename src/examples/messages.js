const messages = [
    {
        _id: 1,
        text: '곰고미 채팅방',
        createdAt: new Date(Date.UTC(2022, 4, 21, 5, 20, 0)),
        system: true,
    },
    {
        _id: 2,
        text: '안녕!',
        createdAt: new Date(Date.UTC(2022, 4, 21, 5, 20, 0)),
        user: {
            _id: 1,
            name: 'user',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 3,
        text: '안녕하세요! 나는 곰고미라고 합니다~',
        createdAt: new Date(Date.UTC(2022, 4, 21, 5, 20, 0)),
        user: {
            _id: 2,
            name: 'Gomgomi',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 4,
        text: '가나다라마바사',
        createdAt: new Date(Date.UTC(2022, 4, 21, 5, 20, 0)),
        user: {
            _id: 1,
            name: 'user',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 5,
        text: '가나다라마바사',
        createdAt: new Date(Date.UTC(2022, 4, 21, 5, 20, 0)),
        user: {
            _id: 2,
            name: 'Gomgomi',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 6,
        text: '가나다라마바사 가나다라마바사',
        createdAt: new Date(Date.UTC(2022, 4, 21, 5, 20, 0)),
        user: {
            _id: 2,
            name: 'Gomgomi',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 7,
        text: `동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세`,
        createdAt: new Date(Date.UTC(2022, 4, 22, 3, 3, 0)),
        user: {
            _id: 1,
            name: 'Gomgomi',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
];

export default messages;
