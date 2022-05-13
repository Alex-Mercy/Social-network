import { instance, ResponseType } from "./api";

export const followAPI = {
    unfollowUsers(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`, {
        })
            .then(response => response.data);
    },

    followUsers(id: number) {
        return instance.post<ResponseType>(`follow/${id}`, {
        })
            .then(response => response.data);
    }
}