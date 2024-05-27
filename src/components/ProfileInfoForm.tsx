'use client'

import { useState } from "react";
import { saveProfile } from "@/actions/profileInfoActions";
import UploadButton from "./UploadButton";
import { ProfileInfo } from "@/models/ProfileInfo";
import Image from "next/image";

type Props = {
    profileInfo: ProfileInfo|null;
};


const ProfileInfoForm = ({profileInfo}: Props) => {
    const [coverUrl, setCoverUrl] = useState(profileInfo?.coverUrl);
    const [avatarUrl, setAvatarUrl] = useState(profileInfo?.avatarUrl);

    async function handleFormAction(formData: FormData) {
        const result = await saveProfile(formData);
        console.log(result);
    }



  return (
    <form action={handleFormAction}>
        <div className="border p-4 rounded-lg">
                <div className="relative border bg-gray-200 size-24 rounded-full p-4 text-center">
                    <div className="rounded-full size-24 overflow-hidden">
                        <Image 
                        width={120}
                        height={120}
                        src={avatarUrl || ''} 
                        alt="avatar"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <UploadButton onUploadComplete={setAvatarUrl}/>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <span className="font-medium">cover image</span>
                    <UploadButton onUploadComplete={setCoverUrl}/>
                    <input type="text" name="coverUrl" value={coverUrl}/>
                </div>
            </div>
            <div>
                <label className="block mt-4">username</label>
                <input 
                defaultValue={profileInfo?.username} 
                name="username" 
                id="userNameIn" 
                type="text" 
                placeholder="username"
                />
            </div>
            <div>
                <label className="block mt-4">display name</label>
                <input 
                defaultValue={profileInfo?.displayName} 
                name="displayName" 
                id="displayNameIn" 
                type="text" 
                placeholder="display name"
                />
            </div>
            <div>
            <label className="block mt-4">bio</label>
                <textarea 
                defaultValue={profileInfo?.bio} 
                name="bio" 
                id="bioIn" 
                placeholder="bio" 
                className=""
                />
            </div>
            <div>
                <button className="bg-yellow-300 px-4 py-2 rounded-lg mt-4">
                    Save profile
                </button>
            </div>
    </form>
  )
}

export default ProfileInfoForm