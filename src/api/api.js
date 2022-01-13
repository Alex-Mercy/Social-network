import * as axios from 'axios';

const instance = axios.create ({
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
unfollowUsers(id) {
    return instance.delete(`follow/${id}`, {
    })
    .then(response => response.data);
},

followUsers(id) {
    return instance.post(`follow/${id}`, {
    })
    .then(response => response.data);
}}

export const profileAPI = {
getUserProfile(userId) {
    return instance.get(`profile/${userId}`, {
    })
    .then(response => response.data);
},
getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`); 
},
updateUserStatus(status) {
    return instance.put(`profile/status`, {status}); 
}

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
        })
        .then(response => response.data);
    }}





