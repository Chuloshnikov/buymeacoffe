import { ChangeEvent } from "react";
import { ImUpload3 } from "react-icons/im";
import { uploadToS3 } from "@/actions/uploadActions";

const UploadButton = ({ onUploadComplete }: {onUploadComplete: (url: string) => void, label: string}) => {

    async function upload(ev: ChangeEvent<HTMLInputElement>) {
        const target = ev.target as HTMLInputElement;
        if (target.files?.length) {
            const file = target.files[0];
            const formData = new FormData;
            formData.set('file', file);
            const result = await uploadToS3(formData);
            onUploadComplete(result.url as string);
        }
    }

  return (
    <>
        <label className="bg-yellow-300 shadow-sm shadow-black/50 p-2 rounded-lg cursor-pointer flex gap-1 items-center">
            <ImUpload3 />
            <input className="hidden" type="file" onChange={ev => upload(ev)}/>
        </label>
    </>
  )
}

export default UploadButton