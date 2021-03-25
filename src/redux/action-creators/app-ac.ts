import {AppActionTypes} from "../action-types/app-actions";
import {loginRequest} from "./auth-ac";


const initializedSuccessful = () => ({type: AppActionTypes.INITIALIZED_SUCCESSFUL});

export const initializeApp = () => async (dispatch: any) => {
    await Promise.all([dispatch(loginRequest())])
    dispatch(initializedSuccessful());
}