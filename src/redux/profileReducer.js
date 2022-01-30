import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCES = 'profile/SAVE_PHOTO_SUCCES';



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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.id)
            }
        }
        case SAVE_PHOTO_SUCCES: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST,newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS,status})
export const deletePost = (id) => ({type: DELETE_POST,id})
export const savePhotoSucces = (photos) => ({type: SAVE_PHOTO_SUCCES,photos})


export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId);
        dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId);
        dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status);
        if(response.data.resultCode ===0) {
        dispatch(setUserStatus(status));
        }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
        if(response.data.resultCode ===0) {
        dispatch(savePhotoSucces(response.data.data.photos));
        }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    debugger;
        if (response.data.resultCode ===0) {
        dispatch(getUserProfile(userId));
        } else {
            dispatch(stopSubmit("ProfileDataForm", { _error: response.data.messages[0] }));
            return Promise.reject(response.data.messages[0]);
        }
}

export default profileReducer;