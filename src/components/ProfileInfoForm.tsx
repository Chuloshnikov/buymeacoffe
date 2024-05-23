'use client'

import { saveProfile } from "@/actions/profileInfoActions"
import { uploadToS3 } from "@/actions/uploadActions";
import { ChangeEvent } from "react";

const ProfileInfoForm = () => {

    async function handleFormAction(formData: FormData) {
        const result = await saveProfile(formData);
        console.log(result);
    }

    
    async function upload(ev: ChangeEvent<HTMLInputElement>) {
        const target = ev.target as HTMLInputElement;
        if (target.files?.length) {
            const file = target.files[0];
            const formData = new FormData;
            formData.set('file', file);
            await uploadToS3(file);
        }
    }


  return (
    <form action={handleFormAction}>
        <div className="bg-gray-200 p-4 rounded-lg">
                <div className="bg-gray-300 size-24 rounded-full p-4">avatar</div>
                <div>
                    cover image
                    <input type="file" onChange={ev => upload(ev)}/>
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