import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useMatch } from "react-router-dom";
import { profileAPI } from "../../api/api";



class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '20875';
        profileAPI.getUserProfile(userId).then(data => {
            this.props.setUserProfile(data)
        });
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
profile: state.profilePage.profile
})
 
export default connect (mapStateToProps, {setUserProfile}) (ProfileMatch);