import React from 'react'
import logo from "../assets/Logo_Catherine.png";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { TiMessages } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";

const NavBar = () => {
    return (
        <div className='bg-emerald-500 h-full w-1/5'>
            <div className='w-full justify-center items-center gap-2 flex flex-col p-6'>
                <img src={logo} alt="logo" className='h-28 w-28 ' />
                <p className='text-xl text-slate-800'>St. Catherine</p>
            </div>
            <div className='p-8 flex flex-col gap-4 text-xl border-t-2 text-gray-800 border-t-slate-600'>
                <div className='flex flex-row gap-2 items-center underline '>
                    <AiOutlineHome size={24}/>
                    <p>Dashboard</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <HiOutlineBookOpen size={24}/>
                    <p>Subjects</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <TiMessages size={24}/>
                    <p>Messages</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <IoSettingsOutline size={24}/>
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar