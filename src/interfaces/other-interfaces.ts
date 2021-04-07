import store, {State} from "../redux/redux-store";
import {AppAction} from "../redux/reducers/app-reducer";
import {AuthAction} from "../redux/reducers/auth-reducer";
import {UsersAction} from "../redux/reducers/users-reducer";
import {DialogsAction} from "../redux/reducers/dialogs-reducer";
import {NavbarAction} from "../redux/reducers/navbar-reducer";
import {ProfileAction} from "../redux/reducers/profile-reducer";

export interface IAction<T, R> {
    type: T,
    payload: R
}

export interface IData {
    resultCode: number
}

export type GetState = () => State

export type ApiMethod = (data: any) => Promise<any>

export type ActionCreator = AppAction | AuthAction | UsersAction | DialogsAction | NavbarAction | ProfileAction;

export type Validator = (value: string) => string | undefined