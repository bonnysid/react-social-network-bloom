import {NavbarActionTypes} from "../action-types/navbar";
import {SetHeaderTitleAction} from "../reducers/navbarReducer";

export const setHeaderTitle = (headerTitle: string): SetHeaderTitleAction => ({type: NavbarActionTypes.SET_HEADER_TITLE, headerTitle});