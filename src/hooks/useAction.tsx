import ActionCreator from '../redux/action-creators';
import {useDispatch} from "react-redux";
import { bindActionCreators } from "redux";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreator, dispatch)
}