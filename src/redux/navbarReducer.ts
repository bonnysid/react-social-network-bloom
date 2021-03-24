import {NavbarActionTypes} from "./action-types/navbar";


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

export type NavbarState = typeof initialState

export type SetHeaderTitleAction = {
    type: NavbarActionTypes.SET_HEADER_TITLE,
    headerTitle: string
}

export type NavbarAction = SetHeaderTitleAction



const navbarReducer = (state = initialState, action: NavbarAction): NavbarState => {
    switch (action.type) {
        case NavbarActionTypes.SET_HEADER_TITLE:
            return {
                ...state,
                headerTitle: action.headerTitle
            }
        default: return state
    }
}

export default navbarReducer;