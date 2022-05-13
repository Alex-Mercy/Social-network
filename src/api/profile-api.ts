import { instance, ApiResponseType } from "./api";
import { PhotosType, ProfileType } from '../types/types';

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data);
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(res => res.data);
    },
    updateUserStatus(status: string) {
        return instance.put<ApiResponseType>(`profile/status`, { status }).then(res => res.data);
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put<ApiResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile).then(res => res.data);
    }
}