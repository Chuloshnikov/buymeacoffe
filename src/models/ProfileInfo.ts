import { Schema, model, models } from "mongoose";

type ProfileInfo = {
    username: string;
    displayName: string;
    bio: string;
    avatarUrl: string;
    coverUrl: string;
}

const profileInfoSchema = new Schema<ProfileInfo>({
    username: {type: String, unique: true, required: true},
    displayName: {type: String},
    bio: {type: String},
    avatarUrl: {type: String},
    cover: {type: String},
}, {timestamps: true});

export const ProfileInfoModel = models?.ProfileInfo || model<ProfileInfo>('ProfileInfo', profileInfoSchema);