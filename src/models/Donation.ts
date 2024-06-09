import { Schema, model, models } from "mongoose";

type Donation = {
    amount: number;
    name: string;
    message?: string;
    crypto: 'btc' | 'eth' | 'ltc';
};


const donationSchema = new Schema({
    amount: {type: Number, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String},
    crypto: {
        type: String, 
        required: true, 
        validate: {
            validator: function(v: string) {
                return ['BTC', 'ETH', 'LTC'].includes(v);
            }
        }
    },
    paid: {type: Boolean, default: false}
});

export const DonationModel = models?.Donation || model<Donation>('Donation', donationSchema);