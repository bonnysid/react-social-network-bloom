import {loginRequest} from "./authReducer";
import {usersAPI} from "../API/API";

const initialState = {
    initialized: false
}

const INITIALIZED_SUCCESSFUL = 'bloom/app/INITIALIZED_SUCCESSFUL';

const initializedSuccessful = () => ({type: INITIALIZED_SUCCESSFUL});

export const initializeApp = () => async (dispatch) => {
    await Promise.all([dispatch(loginRequest())])
    dispatch(initializedSuccessful());
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFUL:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export default appReducer;