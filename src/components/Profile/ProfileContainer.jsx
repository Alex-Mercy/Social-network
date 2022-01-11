import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { Navigate, useMatch } from "react-router-dom";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";



class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '2';
        this.props.getUserProfile(userId)
    }


    render() {
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
})


export default compose(
    connect(mapStateToProps, {getUserProfile})
)(ProfileMatch)