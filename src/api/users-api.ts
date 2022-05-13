import { instance } from "./api";
import { UserType } from '../types/types';

export type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`, {
        })
            .then(response => response.data);
    }
}