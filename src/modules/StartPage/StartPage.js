import React from 'react';
import {Redirect} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "../HelpfulComponents/Preloader";
import {setHeaderTitle} from "../../redux/navbarReducer";

class StartPage extends React.Component {

    render() {
        if(this.props.isFetching) return <Preloader/>
        this.props.setHeaderTitle('News');
        return <Redirect to='/news'/>
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {setHeaderTitle})
)(StartPage);