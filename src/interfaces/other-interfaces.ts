import {State} from "../redux/redux-store";
import {AppAction} from "../redux/reducers/app-reducer";
import {AuthAction} from "../redux/reducers/auth-reducer";
import {UsersAction} from "../redux/reducers/users-reducer";
import {DialogsAction} from "../redux/reducers/dialogs-reducer";
import {NavbarAction} from "../redux/reducers/navbar-reducer";
import {ProfileAction} from "../redux/reducers/profile-reducer";
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