import { ApiResponseType, instance} from "./api";

export const followAPI = {
    unfollowUsers(id: number) {
        return instance.delete<ApiResponseType>(`follow/${id}`, {
        })
            .then(response => response.data);
    },

    followUsers(id: number) {
        return instance.post<ApiResponseType>(`follow/${id}`, {
        })
            .then(response => response.data);
    }
}