import { DispatchType } from "../utils/interfaces/interfaces";
import {loginRequest} from "./authReducer";

enum AppActionTypes {
    INITIALIZED_SUCCESSFUL = 'bloom/app/INITIALIZED_SUCCESSFUL'
}

const initialState = {
    initialized: false
}

export type AppState = typeof initialState;

type InitializedSuccessAction = {
    type: AppActionTypes.INITIALIZED_SUCCESSFUL
}

export type AppAction = InitializedSuccessAction;

export const initializedSuccessful = () => ({type: AppActionTypes.INITIALIZED_SUCCESSFUL});

export const initializeApp = () => async (dispatch: DispatchType) => {
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