import {State} from "../store/redux-store";
import {AppAction} from "../store/reducers/app-reducer";
import {AuthAction} from "../store/reducers/auth-reducer";
import {UsersAction} from "../store/reducers/users-reducer";
import {DialogsAction} from "../store/reducers/dialogs-reducer";
import {NavbarAction} from "../store/reducers/navbar-reducer";
import {ProfileAction} from "../store/reducers/profile-reducer";
import React from "react";
import {WrappedFieldProps} from "redux-form";

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

export interface ICreateFieldParams<T extends string> {
    component: React.FC<WrappedFieldProps> | React.Component<WrappedFieldProps> | string,
    type?: string,
    name: T,
    placeholder?: string,
    validators?: Validator[],
    props?: any
}

export interface ITextareaProps {
    isResize?: boolean,
    props?: any
}
