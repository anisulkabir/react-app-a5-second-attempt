import React from "react";
import { Menu } from "lucide-react";
import logo from "../assets/logo-text.png";
import { toast } from 'react-toastify';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-slate-200 font-medium font-[Plus_Jakarta_Sans]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 h-16 items-center sm:flex sm:justify-between">
                    <button type="button" 
                    aria-label="Open navigation menu"
                    className="justify-self-start sm:hidden p-2 rounded-lg text-gray-800 hover:bg-slate-100 transition-colors cursor-pointer">
                        <Menu />
                    </button>
                    <img src={logo} alt="brand-logo" className="h-8 w-auto object-contain"/>
                    <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
                        <button onClick={() => toast.info('not implemented yet')} className="transition-colors text-pink-700 cursor-pointer" > Home </button>
                        <button onClick={() => toast.info('not implemented yet')} className="transition-colors hover:text-gray-800 cursor-pointer"> Technologies </button>
                        <button onClick={() => toast.info('not implemented yet')} className="transition-colors hover:text-gray-800 cursor-pointer"> Projects </button>
                        <button onClick={() => toast.info('not implemented yet')} className="transition-colors hover:text-gray-800 cursor-pointer"> About </button>
                        <button onClick={() => toast.info('not implemented yet')} className="transition-colors hover:text-gray-800 cursor-pointer"> Contact </button>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 justify-self-end">
                        <button type="button" onClick={() => toast.info('not implemented yet')}
                        className="px-2 py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                            Sign In
                        </button>
                        <button type="button" onClick={() => toast.info('not implemented yet')}
                        className="px-4 py-2 text-xs sm:px-5 sm:text-sm font-semibold text-white rounded-xl  bg-pink-500 hover:bg-pink-800 transition-colors cursor-pointer">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
