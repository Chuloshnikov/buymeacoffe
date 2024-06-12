"use server";
import { DonationModel } from "@/models/Donation";
import { ProfileInfoModel } from "@/models/ProfileInfo";
import axios from "axios";
import md5 from "md5";
import mongoose from "mongoose";

export async function createDonation(formData: FormData): Promise<string | false>{
    //save to db
    const {amount, name, message, crypto, email} = Object.fromEntries(formData);
    await mongoose.connect(process.env.MONGODB_URI as string);
    const donationDoc = await DonationModel.create({
        amount, name, message, crypto, email
    });

    const profileInfoDoc = await ProfileInfoModel.findOne({email});
    if (!profileInfoDoc) {
        return false;
    }
    //create a crryptomus invoice end return the url
    const endpoint = 'https://api.cryptomus.com/v1/payment';
    const apiKey = process.env.CRIPTOMUS_PAYMENT_API_KEY as string;
    const data = {
        amount: (parseInt(amount as string) * 2).toString() + '.00',
        currency: 'USD',
        order_id: donationDoc._id.toString(),
        to_currency: (crypto as string).toUpperCase(),
        url_callback: 'https://mchbuymeacoffee.vercel.app/callback?id='+donationDoc._id,
        url_return: process.env.NextAuth_URL + '/' + profileInfoDoc.username,
        url_success: process.env.NEXTAUTH_URL + '/' + profileInfoDoc.username + '?success=1',
    };

    const merchant = process.env.CRYPTOMUS_MERCHANT_UUID as string;
    const sign = md5(btoa(JSON.stringify(data)) + apiKey);

    try {
        const response = await axios.post(endpoint, data, {
            headers: {
                merchant,
                sign,
            }
        });

        return response.data.result.url;
    } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
        console.log(e.response.status);
        console.log(e.response.data);
    }
}

    return false;
}