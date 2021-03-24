import {DispatchType} from "../utils/interfaces/interfaces";
import {useDispatch} from "react-redux";
import { bindActionCreators } from "redux";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreator, dispatch)
}