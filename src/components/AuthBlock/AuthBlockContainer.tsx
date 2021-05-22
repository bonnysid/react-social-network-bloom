import React, {FC} from 'react';
import AuthBlock from "./AuthBlock";
import Preloader from "../Preloader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useHistory} from "react-router-dom";

interface Props {
    right?: string | number
    left?: string | number
    bottom?: string | number
    top?: string | number
}

const AuthBlockContainer: FC<Props> = ({right, ...props}) => {
    const {isFetching, isAuth, login} = useTypedSelector(state => state.auth)
    const history = useHistory()

        if (isFetching) return <Preloader/>

        return <AuthBlock
            isAuth={isAuth}
            username={login}
            login={() => history.push('/login')}
            registration={() => history.push('/signup')}
            right={right}/>
}

export default AuthBlockContainer;
