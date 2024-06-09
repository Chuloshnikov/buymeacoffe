import { DonationModel } from "@/models/Donation";
import md5 from "md5";
import mongoose from "mongoose";

export async function createDonation(formData: FormData): Promise<string>{
    //save to db
    const {amount, name, message, crypto, email} = Object.fromEntries(formData);
    await mongoose.connect(process.env.MONGODB_URI as string);
    const donationDoc = await DonationModel.create({
        amount, name, message, crypto, email
    })
    //create invoice end return the url
    const endpoint = 'https://api.cryptomus.com/v1/payment';
    const apiKey = rocess.env.CRIPTOMUS_PAYMENT_API_KEY as string;
    const data = {
        amount: parseInt(amount as string) * 5,
        currency: 'USD',
        order_id: donationDoc._id,
        to_currency: crypto,
        url_callback: 'https://mchbuymeacoffee.vercel.app/callback?id='+donationDoc._id,
    };
    const sign = md5(btoa(Json.stringify(data)) + apiKey);
return '';
}