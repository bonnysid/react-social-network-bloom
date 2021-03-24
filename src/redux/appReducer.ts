import { DispatchType } from "../utils/interfaces/interfaces";
import {AuthAction, loginRequest} from "./authReducer";
import {AppActionTypes} from "./action-types/app";



const initialState = {
    initialized: false
}

export type AppState = typeof initialState;

type InitializedSuccessAction = {
    type: AppActionTypes.INITIALIZED_SUCCESSFUL
}

export type AppAction = InitializedSuccessAction;

const initializedSuccessful = () => ({type: AppActionTypes.INITIALIZED_SUCCESSFUL});

export const initializeApp = () => async (dispatch: any) => {
    await Promise.all([dispatch(loginRequest())])
    dispatch(initializedSuccessful());
}

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