"use client";
import { FaCoffee } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { createDonation } from "@/actions/donationActions";

const DonationForm = ({email}: {email:string}) => {

    const [numberInputValue, setNumberInputValue]  = useState('');
    const [amount, setAmount] = useState(1);
    const [crypto, setCrypto] = useState('btc');


    useEffect(() => {
      if (numberInputValue) {
        const intValue = parseInt(numberInputValue);
        if (intValue > 5 && intValue <= 1000) {
          setAmount(intValue);
        } else if (intValue  === 1 || intValue === 3 || intValue === 5) {
          setAmount(intValue);
        }
         else {
          setAmount(1);
        }
      }
    }, [numberInputValue]);


    async function handleFormSubmit(formData: FormData) {
      formData.set('amount', amount.toString());
      formData.set('crypto', crypto);
      formData.set('email', email);
      const url = await createDonation(formData);
      if (!url) {
        return;
      }
      if (url && window && window.location) {
        window.location.href = url;
      }
    }

  return (
    <form action={handleFormSubmit}>
        <div className="border border-yellow-300 bg-yellow-300/10 rounded-xl p-4 flex gap-2 items-center">
            <FaCoffee/>
            <span>x</span>
            <button 
            onClick={() => {setAmount(1); setNumberInputValue('1');}}
            type="button"
            className={"amount " + (amount === 1 ? "active" : '')}>1</button>
            <button 
            onClick={() => {setAmount(3); setNumberInputValue('3');}}
            type="button"
            className={"amount " + (amount === 3  ? "active" : '')}>3</button>
            <button 
            onClick={() => {setAmount(5); setNumberInputValue('5');}}
            type="button"
            className={"amount " + (amount === 5  ? "active" : '')}>5</button>
            <input 
            onChange={e => setNumberInputValue(e.target.value)}
            className="w-12 h-12 border border-yellow-300 rounded-xl text-center"
            placeholder="10"                            
            type="number" 
            value={numberInputValue}
            />
        </div>
        <div className="mt-2">
          <input name="name" type="text" placeholder="Your name"/>
        </div>
        <div className="mt-2">
          <textarea name="message" placeholder="Say something nice"></textarea>
        </div>
        <div className="mt-2">
          <h3 className="text-xs text-gray-500 mb-1">Pay with selected crypto of with credit card</h3>
          <div className="flex gap-1">
            <button 
            type="button"
            onClick={() => setCrypto('btc')}
            className={"cryptoBtn " + (crypto === "btc"  ? "active" : '') }
            >
              <span>BTC</span>
              <p>BITCOIN</p>
            </button>
            <button 
            type="button"
            onClick={() => setCrypto('eth')}
            className={"cryptoBtn " + (crypto === "eth"  ? "active" : '') }
            >
              <span>ETH</span>
              <p>Ethereum</p>
            </button>
            <button 
            type="button"
            onClick={() => setCrypto('ltc')}
            className={"cryptoBtn " + (crypto === "ltc"  ? "active" : '') }
            >
              <span>LTC</span>
              <p>Litecoin</p>
            </button>
          </div>
        </div>
        <div className="mt-2">
          <button className="bg-yellow-300 w-full rounded-xl py-2 hover:bg-yellow-400 duration-300">
            Support ${amount * 3}
          </button>
        </div>
    </form>
  )
}

export default DonationForm;