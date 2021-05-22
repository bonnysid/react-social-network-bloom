import React from 'react';
import {Redirect} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Preloader from "../../components/Preloader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const StartPage: React.FC = () => {
    const {isFetching} = useTypedSelector(state => state.auth)
    const {setHeaderTitle} = useActions()

    if (isFetching) return <Preloader/>
    setHeaderTitle('News')
    return <Redirect to='/news'/>

}

export default withAuthRedirect(StartPage);
