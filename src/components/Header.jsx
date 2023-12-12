import React from 'react'
import jenna from "../assets/jenna.jpg";
import { RiVipDiamondLine, RiCoinLine } from "react-icons/ri";

const Header = () => {
    return (
        <header className='fixed w-4/5 py-2 right-0 top-0 bg-emerald-400'>
            <div className='flex flex-row justify-between items-center w-10/12 m-auto'>
                <h1 className='text-2xl'>Welcome, <span className='font-semibold'>Jenna!</span></h1>
                <div className='flex flex-row items-center gap-4'>
                    <img src={jenna} alt="jenna" className='h-16 w-16 rounded-full' />
                    <div>
                        <p className='font-semibold'>Jenna</p>
                        <div className='flex flex-row justify-between gap-4 items-center'>
                            <div className='flex flex-row gap-1'>
                                <RiVipDiamondLine size={25} className='text-blue-500' />
                                <p>4</p>
                            </div>
                            <div className='flex flex-row gap-1'>
                                <RiCoinLine size={25} className='text-yellow-300' />
                                <p>4</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header