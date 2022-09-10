const gomgomi = require('../../assets/callGomgomi.png');

const messages = [
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
        text: '안녕하세요! 나는 곰고미라고 합니다:)',
        createdAt: new Date(Date.UTC(2022, 4, 21, 5, 20, 0)),
        user: {
            _id: 2,
            name: 'Gomgomi',
            avatar: gomgomi,
        },
    },
    {
        _id: 4,
        text: '반가워 나는 이규혁이야.',
        createdAt: new Date(Date.UTC(2022, 4, 21, 5, 20, 0)),
        user: {
            _id: 1,
            name: 'user',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 5,
        text: '반가워요 규혁님! 혹시 어떤 고민이 있으신가요?',
        createdAt: new Date(Date.UTC(2022, 4, 21, 5, 20, 0)),
        user: {
            _id: 2,
            name: 'Gomgomi',
            avatar: gomgomi,
        },
    },
    {
        _id: 6,
        text: '대화를 그만하시겠어요?',
        createdAt: new Date(Date.UTC(2016, 5, 14, 17, 20, 0)),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: gomgomi,
        },
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: '대화 그만하기',
                    value: 'yes',
                },
                {
                    title: '대화 계속하기',
                    value: 'no',
                },
            ],
        },
    },
];

export default messages;
