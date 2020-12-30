const initialState = {
    menuItems: [
        {title: 'My Profile', link: 'profile'},
        {title: 'Messages', link: 'messages'},
        {title: 'News', link: 'news'},
        {title: 'Friends', link: 'friends'},
        {title: 'Music', link: 'music'},
        {title: 'Settings', link: 'settings'}
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;