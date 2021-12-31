import React from "react";
import Profile from "./Profile";
import * as axios from 'axios';
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useMatch } from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '20875';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId )
        .then(response => {
            this.props.setUserProfile(response.data)
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