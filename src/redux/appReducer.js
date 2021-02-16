import {loginRequest} from "./authReducer";

const initialState = {
    initialized: false
}

const INITIALIZED_SUCCESSFUL = 'INITIALIZED_SUCCESSFUL';

const initializedSuccessful = () => ({type: INITIALIZED_SUCCESSFUL});

export const initializeApp = () => (dispatch) => {
    Promise.all([dispatch(loginRequest())])
        .then(() => {
            dispatch(initializedSuccessful());
        })
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFUL:
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}

export default appReducer;