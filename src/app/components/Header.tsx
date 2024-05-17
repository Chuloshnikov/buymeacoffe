import Link from "next/link";
import { BiCoffeeTogo } from "react-icons/bi";

const Header = () => {
  return (
    <header className="mb-16">
         <div className="flex justify-between max-w-2xl mx-auto px-4 py-4">
            <Link href={'/'} className="inline-flex gap-1 items-center">
                <BiCoffeeTogo className="h-8 w-8"/>
                <span className="-ml-1 text-lg font-semibold">Buy me a coffee</span>
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
                    <button className="border-2 border-gray-200 rounded-full px-4 py-2 ml-4 hover:bg-gray-200 duration-300">
                        Login
                    </button>
                    <button className="bg-yellow-300 rounded-full px-4 py-2 hover:bg-yellow-400 duration-300">
                        Sign up
                    </button>
                </div>
            </nav>
        </div>
    </header>
   
  )
}

export default Header;