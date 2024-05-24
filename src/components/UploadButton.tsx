import { ChangeEvent } from "react";
import { ImUpload3 } from "react-icons/im";
import { uploadToS3 } from "@/actions/uploadActions";

const UploadButton = ({ onUploadComplete }: {onUploadComplete: (url: string) => void}) => {

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
        <label className="bg-yellow-300 p-2 inline-flex rounded-lg cursor-pointer">
            <ImUpload3 />
            <input className="hidden" type="file" onChange={ev => upload(ev)}/>
        </label>
    </>
  )
}

export default UploadButton