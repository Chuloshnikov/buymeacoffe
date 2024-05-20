"use client"
import {Session} from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { BiCoffeeTogo } from "react-icons/bi";
import parseFullName from 'parse-full-name';

const Header = ({session}: {session:Session|null}) => {
    const name = session?.user?.name || '';
    const firstName = parseFullName(name);
  return (
    <header className="mb-16">
         <div className="flex justify-between max-w-2xl mx-auto px-4 py-4">
            <Link href={'/'} className="inline-flex gap-1 items-center">
                <BiCoffeeTogo className="h-8 w-8"/>
                <span className="-ml-1 mt-2 text-lg font-semibold">Buy me a coffee</span>
            </Link>
            <nav className="mt-2 flex gap-4 items-center">
                <Link href="/about">
                    About
                </Link>
                <Link href="/faq">
                    FAQ
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
                <div className="flex gap-4">
                    {session && (
                        <div className="flex items-center gap-2">
                             {firstName}
                            <button 
                            onClick={() => signOut()}
                            className="bg-yellow-300 rounded-full px-4 py-2 hover:bg-yellow-400 duration-300">
                                Logout
                            </button>
                        </div>
                       
                    )}
                    {!session && (
                        <>
                            <button 
                            onClick={() => signIn('google')}
                            className="border-2 border-gray-200 rounded-full px-4 py-2 ml-4 hover:bg-gray-200 duration-300"
                            >
                                Login
                            </button>
                            <button className="bg-yellow-300 rounded-full px-4 py-2 hover:bg-yellow-400 duration-300">
                                Sign up
                            </button>
                         </>
                    )}
                   
                </div>
            </nav>
        </div>
    </header>
   
  )
}

export default Header;