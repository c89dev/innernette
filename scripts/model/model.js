const desktop = document.getElementById('desktop');
const app = document.getElementById('app');
const order = document.getElementById('order');
const titleBar = document.getElementById('title');

model = {
    apps: [
        { id: 0, name: 'innernette', isRunning: false },
        { id: 1, name: 'nettetunes', isRunning: false },
    ],
    music: [
        {
            id: 0,
            artist: 'Lindsey Porch & Ruth Carr',
            title: 'Spaghetti Again',
            src: './media/audio/music/track00.wav',
        },
        {
            id: 1,
            artist: 'Ruth Carr',
            title: 'Come Over',
            src: './media/audio/music/track00.wav',
        },
        {
            id: 1,
            artist: 'Groban Sings Casey',
            title: 'Horse and Buggy Ride',
            src: './media/audio/music/track00.wav',
        },
        {
            id: 1,
            artist: 'Groban Sings Casey',
            title: 'Hamburgers and Hot Dogs',
            src: './media/audio/music/track00.wav',
        },
    ],
    viewState: {},
    pages: {
        loginPage: {
            username: '',
            password: '',
        },
        storePage: {
            currentCat: '3',
            cat: [
                { id: 0, name: 'Shoes' },
                { id: 1, name: 'Shirt' },
                { id: 2, name: 'Coats' },
                { id: 3, name: 'Pants' },
                { id: 4, name: 'Hats' },
            ],
        },
        chatPage: {},
        musicPage: {},
        data: {
            users: [
                {
                    username: 'ericwareheim',
                    password: 'susan69',
                    pfp: null,
                },
            ],
            store: [],
        },
    },
};
