import { stopSubmit } from "redux-form";
import { authAPI, ResultCodesEnum, ResultCodeWithCaptcha, securityAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCES = 'auth/GET_CAPTCHA_URL_SUCCES';

export type initialStateType = typeof initialState;

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};


const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCES:
            return {
                ...state,
                ...action.payLoad
            };
        default:
            return state;
    }

}

type setAuthUserDataActionPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null

}
type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData =
    (id: number | null, email: string | null, login: string | null, isAuth: boolean | null)
        : setAuthUserDataActionType => ({
            type: SET_USER_DATA,
            payload: { id, email, login, isAuth }
        })

type getCaptchaUrlSuccesType = {
    type: typeof GET_CAPTCHA_URL_SUCCES
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSucces = (captchaUrl: string): getCaptchaUrlSuccesType => ({
    type: GET_CAPTCHA_URL_SUCCES, payload: { captchaUrl }
})


export const getAuthUserData = () => async (dispatch: any) => {
    const data = await authAPI.me();
    if (data.resultCode === ResultCodesEnum.Succes) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: any) => {
        const loginData = await authAPI.login(email, password, rememberMe, captcha);
        if (loginData.resultCode === ResultCodesEnum.Succes) {
            //succes, get auth data
            dispatch(getAuthUserData())
        } else {
            if (loginData.resultCode === ResultCodeWithCaptcha.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let message = loginData.messages.length > 0
                ? loginData.messages[0]
                : "Some Error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    }

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSucces(captchaUrl));
}



export default authReducer;