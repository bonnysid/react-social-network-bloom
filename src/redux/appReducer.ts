import {loginRequest} from "./authReducer";
import {DispatchType} from "./reduxStore";

enum ActionTypes {
    INITIALIZED_SUCCESSFUL = 'bloom/app/INITIALIZED_SUCCESSFUL'
}

const initialState = {
    initialized: false
}

export type AppState = typeof initialState;

type InitializedSuccessAction = {
    type: ActionTypes.INITIALIZED_SUCCESSFUL
}

export type AppActionTypes = InitializedSuccessAction;

export const initializedSuccessful = () => ({type: ActionTypes.INITIALIZED_SUCCESSFUL});

export const initializeApp = () => async (dispatch: DispatchType) => {
    await Promise.all([dispatch(loginRequest())])
    dispatch(initializedSuccessful());
}

const appReducer = (state = initialState, action: AppActionTypes): AppState => {
    switch (action.type) {
        case ActionTypes.INITIALIZED_SUCCESSFUL:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export default appReducer;