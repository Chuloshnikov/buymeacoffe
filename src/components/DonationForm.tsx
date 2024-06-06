"use client";
import { FaCoffee } from "react-icons/fa";
import {useState} from 'react';

const DonationForm = () => {

    const [numberInputValue, setNumberInputValue]  = useState('');

  return (
    <form>
        <div className="border border-yellow-300 rounded-xl p-4 flex gap-2 items-center">
            <FaCoffee/>
            <span>x</span>
            <button 
            type="button"
            className="rounded-full size-12 border justify-center inline-flex items-center">1</button>
            <button 
            type="button"
            className="rounded-full size-12 border justify-center inline-flex items-center">1</button>
            <button 
            type="button"
            className="rounded-full size-12 border justify-center inline-flex items-center">3</button>
            <button 
            type="button"
            className="rounded-full size-12 border justify-center inline-flex items-center">5</button>
            <input 
            tupe="button"
            className="w-12 h-12 border rounded-xl text-center"
            placeholder="10"                            
            type="number" 
            value={numberInputValue}
            />
        </div>
    </form>
  )
}

export default DonationForm;