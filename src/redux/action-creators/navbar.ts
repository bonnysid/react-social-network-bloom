import {NavbarActionTypes} from "../action-types/navbar";
import {SetHeaderTitleAction} from "../navbarReducer";

export const setHeaderTitle = (headerTitle: string): SetHeaderTitleAction => ({type: NavbarActionTypes.SET_HEADER_TITLE, headerTitle});