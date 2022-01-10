import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { Navigate, useMatch } from "react-router-dom";



class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '20875';
        this.props.getUserProfile(userId)
    }


    render() {
        if (!this.props.isAuth) return <Navigate to="/login"/>

        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<ProfileContainer {...props} match={match} />
	)
}


let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
isAuth: state.auth.isAuth
})
 
export default connect (mapStateToProps, {getUserProfile}) (ProfileMatch);