import axios from 'axios';
import { profileType } from '../types/types';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "24635b41-a830-49f0-81e2-67ea1fbc69b6"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        })
            .then(response => response.data);
    }
}

export const followAPI = {
    unfollowUsers(id: number) {
        return instance.delete(`follow/${id}`, {
        })
            .then(response => response.data);
    },

    followUsers(id: number) {
        return instance.post(`follow/${id}`, {
        })
            .then(response => response.data);
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get(`profile/${userId}`, {
        })
            .then(response => response.data);
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status`, { status });
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: profileType) {
        return instance.put(`profile`, profile);
    }
}

export enum ResultCodesEnum {
    Succes = 0,
    Error = 1
}

export enum ResultCodeWithCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeWithCaptcha
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`, {
        })
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
        .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)

    }
}







