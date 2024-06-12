import DonationForm from "@/components/DonationForm";
import DonationStatus from "@/components/DonationStatus";
import { Donation, DonationModel } from "@/models/Donation";
import { ProfileInfo, ProfileInfoModel } from "@/models/ProfileInfo";
import mongoose from "mongoose";
import Image from "next/image";
import { FaCoffee } from "react-icons/fa";

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

    const donations:Donation[] = await DonationModel.find({paid: true, email: profileInfoDoc.email})
    return (
        <div>
            <DonationStatus/>
            <div className="w-full h-48">
                <Image 
                src={profileInfoDoc.coverUrl} 
                alt="cover image" 
                width={2048} 
                height={2048} 
                className="object-cover object-center h-48 rounded-xl"
                />
            </div>
            <div className="max-w-2xl px-2 mx-auto relative -mt-16">
                <div className="flex items-end gap-3">
                    <div className="size-36 overflow-hidden rounded-xl border-4 border-white">
                        <Image 
                        src={profileInfoDoc.avatarUrl} 
                        alt="cover image" 
                        width={2048} 
                        height={2048} 
                        className="size-36 object-cover object-center"
                        />
                    </div>
                    <div className="mb-1">
                        <h1 className="text-4xl font-semibold">
                            {profileInfoDoc.displayName}
                        </h1>
                        <h2 className="flex gap-1 items-center">
                            <FaCoffee />
                            <span>/</span>
                            <span>{profileInfoDoc.username}</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h3 className="font-semibold">About {profileInfoDoc.username}</h3>
                        {profileInfoDoc.bio}
                        <hr className="my-4"/>
                        <h3 className="font-semibold">Recent supporters</h3>
                        {!donations.length && (
                            <>
                                <p>no recent donations</p>
                            </>
                        )}
                        {donations.length > 0 && (
                            <div className="mt-2">
                                 {donations.map(donation => (
                                <div 
                                    key={donation._id}
                                    className="py-2 border-t"
                                    >
                                            <h3>
                                                <span className="font-semibold mt-6">
                                                    {donation.name}
                                                </span>
                                                {' '}
                                                <span className="text-gray-400">
                                                    bought you {donation.amount > 1 ? donation.amount + ' coffees' : 'a coffee'}
                                                    {donation.amount === 1 && 'bought you a coffee'}
                                                    {donation.amount > 1 && `bought you ${donation.amount} coffee(s)`}
                                                </span>
                                               
                                                
                                            </h3>
                                            <p className="bg-gray-100 p-2 rounded-md">{donation.message}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <DonationForm email={profileInfoDoc.email}/>
                    </div>
                </div>
            </div>
        </div>
    )
}