import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { photosType, postType, profileType } from "../types/types";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCES = 'profile/SAVE_PHOTO_SUCCES';



let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 32 },
        { id: 2, message: "It is my first post.", likesCount: 12 }
    ] as Array<postType>,
    profile: null as profileType | null,
    status: '',


};
export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any) => {
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

type addPostActionType = {type: typeof ADD_POST, newPostText: string}
export const addPost = (newPostText: string): addPostActionType => ({type: ADD_POST,newPostText})

type setUserProfileActionType = {type: typeof SET_USER_PROFILE, profile: profileType}
export const setUserProfile = (profile: profileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile})

type setUserStatusActionType = {type: typeof SET_USER_STATUS, status: string}
export const setUserStatus = (status: string): setUserStatusActionType => ({type: SET_USER_STATUS,status})

type deletePostActionType = {type: typeof DELETE_POST, id: number}
export const deletePost = (id: number): deletePostActionType => ({type: DELETE_POST,id})

type savePhotoSuccesActionType = {type: typeof SAVE_PHOTO_SUCCES, photos: photosType}
export const savePhotoSucces = (photos: photosType): savePhotoSuccesActionType => ({type: SAVE_PHOTO_SUCCES,photos})


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getUserProfile(userId);
        dispatch(setUserProfile(data));
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getUserStatus(userId);
        dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateUserStatus(status);
        if(response.data.resultCode ===0) {
        dispatch(setUserStatus(status));
        }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file);
        if(response.data.resultCode ===0) {
        dispatch(savePhotoSucces(response.data.data.photos));
        }
}

export const saveProfile = (profile: profileType) => async (dispatch: any, getState: any) => {
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