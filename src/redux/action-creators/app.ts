import {AppActionTypes} from "../action-types/app";
import {loginRequest} from "./auth";


const initializedSuccessful = () => ({type: AppActionTypes.INITIALIZED_SUCCESSFUL});

export const initializeApp = () => async (dispatch: any) => {
    await Promise.all([dispatch(loginRequest())])
    dispatch(initializedSuccessful());
}