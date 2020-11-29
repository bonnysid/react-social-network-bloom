const state = {
    dialogsPage: {
        dialogs : [
            {id: 1, name: 'Yana Pros', time: new Date().toTimeString().substr(0, 9), lastMsg: 'Hello', avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg'},
            {id: 2, name: 'Ira Pauchok', time: new Date().toTimeString().substr(0, 9), lastMsg: 'Where is my money', avatarLink: 'https://sun9-15.userapi.com/impf/Nn3nY4xxOxkBHEW9Ao3_alcZAXgumh2lNlsYpQ/SlcMmc77PaA.jpg?size=936x937&quality=96&proxy=1&sign=42731f0c49c5336fe6618ae48eaa903f'},
            {id: 3, name: 'Nikita Brekhov', time: new Date().toTimeString().substr(0, 9), lastMsg: 'Go cs!', avatarLink: 'https://sun7-8.userapi.com/impf/c851036/v851036735/113073/SOiON4aYvpU.jpg?size=844x891&quality=96&proxy=1&sign=87c777a34cb5afd9de8f56293aa79c6b'}
        ],

        messages: [
            {id: 1, name: 'Yana Pros', time: new Date().toTimeString().substr(0, 9), avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg', message: 'Hello'},
            {id: 2, name: 'Yana Pros', time: new Date().toTimeString().substr(0, 9), avatarLink: 'https://sun9-34.userapi.com/3mud1_gH3q-HAdZ7wpn_e5vFP0PqcEpKb9f60Q/2L9tDPWPwbk.jpg', message: 'How are you?'},
        ],
    },
    profilePage: {
        posts: [
            {id: 1, author: 'Nikita Bortsov', comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', likeCount: 90},
            {id: 2, author: 'Nikita Bortsov', comment: 'First post!', likeCount: 5}
        ]
    },
    navbar: {
        menuItems: [
            {title: 'My Profile', link: 'profile'},
            {title: 'Messages', link: 'messages'},
            {title: 'News', link: 'news'},
            {title: 'Friends', link: 'friends'},
            {title: 'Music', link: 'music'},
            {title: 'Settings', link: 'settings'}
        ]
    }
}

export default state;