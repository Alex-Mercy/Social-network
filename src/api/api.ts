import axios from 'axios';

export enum ResultCodesEnum {
    Succes = 0,
    Error = 1
}

export enum ResultCodeWithCaptchaEnum {
    CaptchaIsRequired = 10
}


export type ApiResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "24635b41-a830-49f0-81e2-67ea1fbc69b6"
    }
});










