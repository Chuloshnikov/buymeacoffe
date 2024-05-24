'use client'

import { useState } from "react";
import { saveProfile } from "@/actions/profileInfoActions";
import UploadButton from "./UploadButton";


const ProfileInfoForm = () => {
    const [coverUrl, setCoverUrl] = useState('');

    async function handleFormAction(formData: FormData) {
        const result = await saveProfile(formData);
        console.log(result);
    }



  return (
    <form action={handleFormAction}>
        <div className="border p-4 rounded-lg">
                <div className="border bg-gray-200 size-24 rounded-full p-4 text-center">avatar</div>
                <div className="flex gap-1 items-center">
                    <span className="font-medium">cover image</span>
                    <UploadButton onUploadComplete={setCoverUrl}/>
                    <input type="text" name="coverUrl" value={coverUrl}/>
                </div>
            </div>
            <div>
                <label className="block mt-4">username</label>
                <input name="username" id="userNameIn" type="text" placeholder="username"/>
            </div>
            <div>
                <label className="block mt-4">display name</label>
                <input name="displayName" id="displayNameIn" type="text" placeholder="display name"/>
            </div>
            <div>
            <label className="block mt-4">bio</label>
                <textarea name="bio" id="bioIn" placeholder="bio" className=""/>
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