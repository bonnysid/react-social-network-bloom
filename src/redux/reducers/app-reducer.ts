import { DispatchType } from "../../interfaces/other-interfaces";
import {AuthAction, loginRequest} from "./auth-reducer";
import {AppActionTypes} from "../action-types/app-actions";



const initialState = {
    initialized: false
}

export type AppState = typeof initialState;

type InitializedSuccessAction = {
    type: AppActionTypes.INITIALIZED_SUCCESSFUL
}

export type AppAction = InitializedSuccessAction;

const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionTypes.INITIALIZED_SUCCESSFUL:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export default appReducer;