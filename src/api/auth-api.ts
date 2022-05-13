import { instance, ApiResponseType, ResultCodesEnum, ResultCodeWithCaptchaEnum } from "./api"


type MeResponseDataType = {
        id: number
        email: string
        login: string
}

type LoginResponseDataType = {
        userId: number
}

export const authAPI = {
    me() {
        return instance.get<ApiResponseType<MeResponseDataType>>(`auth/me`, {
        })
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<ApiResponseType<LoginResponseDataType, 
        ResultCodesEnum | ResultCodeWithCaptchaEnum>>(`auth/login`, { email, password, rememberMe, captcha })
        .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

type getCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<getCaptchaUrlResponseType>(`security/get-captcha-url`).then(res => res.data)

    }
}
