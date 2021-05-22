import {NavbarActionTypes} from "../action-types/navbar-actions";
import {SetHeaderTitleAction} from "../reducers/navbar-reducer";

export const setHeaderTitle = (headerTitle: string): SetHeaderTitleAction => ({type: NavbarActionTypes.SET_HEADER_TITLE, headerTitle});