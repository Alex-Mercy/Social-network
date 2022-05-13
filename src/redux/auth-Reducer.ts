import { Action } from "redux";
import { FormAction, stopSubmit } from "redux-form";
import { ResultCodesEnum, ResultCodeWithCaptchaEnum } from "../api/api";
import { authAPI, securityAPI } from "../api/auth-api";
import { BaseThunkType, InferActionsTypes } from "./store";

export type initialStateType = typeof initialState;

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};


const authReducer = (state = initialState, action: ActionSType): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

type ActionSType = InferActionsTypes<typeof actions>

export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA', payload: {id, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
                type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
            } as const),
}

type ThunkType = BaseThunkType<ActionSType | FormAction>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const data = await authAPI.me();
    if (data.resultCode === ResultCodesEnum.Succes) {
        let { id, email, login } = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
    async (dispatch) => {
        const loginData = await authAPI.login(email, password, rememberMe, captcha);
        if (loginData.resultCode === ResultCodesEnum.Succes) {
            //succes, get auth data
            dispatch(getAuthUserData())
        } else {
            if (loginData.resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let message = loginData.messages.length > 0
                ? loginData.messages[0]
                : "Some Error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    }

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}



export default authReducer;