import {AppActionTypes} from "../action-types/app-actions";
import {loginRequest, logout} from "./auth-ac";
import {ThunkAction} from "redux-thunk";
import {State} from "../redux-store";
import {AppAction} from "../reducers/app-reducer";

export type AppThunk = ThunkAction<Promise<void>, State, undefined, AppAction>

const initializedSuccessful = () => ({type: AppActionTypes.INITIALIZED_SUCCESSFUL});

export const initializeApp = (): AppThunk => async (dispatch) => {
    await Promise.all([dispatch(loginRequest())])
        .catch(e => {
            if(e.message.includes('status code 401')) dispatch(logout())
            else console.error(e)
        })
    dispatch(initializedSuccessful());
}