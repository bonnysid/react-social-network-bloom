const SET_HEADER_TITLE = 'SET_HEADER_TITLE';

const initialState = {
    headerTitle: '',
    menuItems: [
        {title: 'My Profile', link: '/profile'},
        {title: 'Messages', link: '/messages'},
        {title: 'News', link: '/news'},
        {title: 'Users', link: '/users'},
        {title: 'Music', link: '/music'},
        {title: 'Settings', link: '/settings'}
    ]
};

export const setHeaderTitle = (headerTitle) => ({type: SET_HEADER_TITLE, headerTitle});

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER_TITLE:
            return {
                ...state,
                headerTitle: action.headerTitle
            }
        default: return state
    }
}

export default navbarReducer;