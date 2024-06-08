'use client'

import { useState } from "react";
import { saveProfile } from "@/actions/profileInfoActions";
import UploadButton from "./UploadButton";
import { ProfileInfo } from "@/models/ProfileInfo";
import Image from "next/image";
import toast from "react-hot-toast";

type Props = {
    profileInfo: ProfileInfo|null;
};


const ProfileInfoForm = ({profileInfo}: Props) => {
    const [coverUrl, setCoverUrl] = useState(profileInfo?.coverUrl);
    const [avatarUrl, setAvatarUrl] = useState(profileInfo?.avatarUrl);

    async function handleFormAction(formData: FormData) {
       
        await saveProfile(formData);
        toast.success('Profile saved');
    }



  return (
    <form action={handleFormAction}>
        <div className="relative border bg-gray-100 rounded-lg h-48 mb-4">
            <Image 
            src={coverUrl || ''} 
            alt="cover image"
            width={1024}
            height={1024}
            className="w-full h-48 object-cover object-center rounded-lg"
            />
                <div className="absolute left-4 -bottom-4 z-10 border bg-gray-100 size-24 rounded-lg">
                    <div className="rounded-lg size-24 overflow-hidden border-2 border-yellow-300">
                        <Image 
                        src={avatarUrl || ''} 
                        width={120}
                        height={120}
                        alt="avatar"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2">
                        <UploadButton onUploadComplete={setAvatarUrl}/>
                    </div>
                    <input type="hidden" name="avatarUrl" value={avatarUrl}/>
                </div>
                <div className="absolute right-2 bottom-2">
                    <UploadButton onUploadComplete={setCoverUrl}/>
                    <input type="hidden" name="coverUrl" value={coverUrl}/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label className="input-label" htmlFor="usernameIn">username</label>
                    <input 
                    defaultValue={profileInfo?.username} 
                    name="username" 
                    id="userNameIn" 
                    type="text" 
                    placeholder="username"
                    />
                </div>
                <div>
                    <label className="input-label" htmlFor="displayNameIn">display name</label>
                    <input 
                    defaultValue={profileInfo?.displayName} 
                    name="displayName" 
                    id="displayNameIn" 
                    type="text" 
                    placeholder="display name"
                    />
                </div>
            </div>
            <div>
            <label className="input-label" htmlFor="bioIn">bio</label>
                <textarea 
                defaultValue={profileInfo?.bio} 
                name="bio" 
                id="bioIn" 
                placeholder="bio" 
                className=""
                />
            </div>
            <div>
                <button className="bg-yellow-300 px-4 py-2 rounded-lg mt-4 hover:bg-yellow-400 duration-200 font-semibold">
                    Save profile
                </button>
            </div>
    </form>
  )
}

export default ProfileInfoForm