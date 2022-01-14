import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 32 },
        { id: 2, message: "It is my first post.", likesCount: 12 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 3, message: action.newPostText, likesCount: 0 }],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
})


export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    });
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
        if(response.data.resultCode ===0) {
        dispatch(setUserStatus(status));
        }
    });
}

export default profileReducer;