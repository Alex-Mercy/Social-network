import { FormAction, stopSubmit } from "redux-form";

import { profileAPI } from "../api/profile-api";
import { PhotosType, postType, ProfileType, } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./store";

type initialStateType = typeof initialState;

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 32 },
        { id: 2, message: "It is my first post.", likesCount: 12 }
    ] as Array<postType>,
    profile: null as ProfileType | null,
    status: '',
};


const profileReducer = (state = initialState, action: ActionSType): initialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            return {
                ...state,
                posts: [...state.posts, { id: 3, message: action.newPostText, likesCount: 0 }],
            };
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET_USER_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.id)
            }
        }
        case 'SAVE_PHOTO_SUCCES': {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        }
        default:
            return state;
    }
}

type ActionSType = InferActionsTypes<typeof actions>

export const actions = {
    addPost: (newPostText: string) => ({ type: 'ADD_POST', newPostText } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const),
    setUserStatus: (status: string) => ({ type: 'SET_USER_STATUS', status } as const),
    deletePost: (id: number) => ({ type: 'DELETE_POST', id } as const),
    savePhotoSucces: (photos: PhotosType) => ({ type: 'SAVE_PHOTO_SUCCES', photos } as const)
}

type ThunkType = BaseThunkType<ActionSType | FormAction>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getUserStatus(userId);
    dispatch(actions.setUserStatus(data));
}

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateUserStatus(status);
    if (data.resultCode === 0) {
        dispatch(actions.setUserStatus(status));
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSucces(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);
    debugger;
    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error ("userId can't be null")
        }
        
    } else {
        dispatch(stopSubmit("ProfileDataForm", { _error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer;