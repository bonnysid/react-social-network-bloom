import React from 'react';
import {Redirect} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Preloader from "../common/Preloader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";

const StartPage: React.FC = () => {
    const {isFetching} = useTypedSelector(state => state.auth)
    const {setHeaderTitle} = useAction()

    if (isFetching) return <Preloader/>
    setHeaderTitle('News')
    return <Redirect to='/news'/>

}

export default withAuthRedirect(StartPage);