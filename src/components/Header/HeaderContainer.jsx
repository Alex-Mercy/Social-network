import React from "react";
import HeaderMUI from "./HeaderMUI";
import { connect } from "react-redux";
import {logout} from "../../redux/auth-Reducer";


class HeaderContainer extends React.Component {

    render () {
        return <HeaderMUI {...this.props} />
    }
}




let mapStateToProps = (state) => ({
isAuth: state.auth.isAuth,
login: state.auth.login
});

export default connect(mapStateToProps, {logout})(HeaderContainer)