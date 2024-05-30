import { ProfileInfo, ProfileInfoModel } from "@/models/ProfileInfo";
import mongoose from "mongoose";
import Image from "next/image";

type Props = {
    params:{
        username: string;
    };
}


export default async function SingleProfilePage({params}: Props) {

    const username = params.username;
    await mongoose.connect(process.env.MONGODB_URI as string);
    const profileInfoDoc:ProfileInfo|null = await ProfileInfoModel.findOne({username});

    if (!profileInfoDoc) {
        return (
            <div>
                404 - profile not found
            </div>
        );
    }
    return (
        <div>
            <div className="w-full h-48">
                <Image 
                src={profileInfoDoc.coverUrl} 
                alt="cover image" 
                width={2048} 
                height={2048} 
                className="object-cover object-center h-48"
                />
            </div>
        </div>
    )
}