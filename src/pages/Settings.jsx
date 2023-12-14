import React from 'react'
import "../css/dashboard.scss";

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

import profile from "../assets/jenna.jpg";

import medal from "../assets/medal.png";

const Settings = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Header />
                <div className='w-9/12 m-auto p-6'>
                    <div className='flex flex-row items-center w-full justify-between'>
                        <div className='gap-4 flex flex-row items-center'>
                            <img src={profile} className='h-32 w-32 rounded-md border-2 border-slate-500' />
                            <div>
                                <p className='text-xl font-medium'>Jenna Ortega</p>
                                <p>BSIT</p>
                                <button className='bg-blue-400 p-2 font-medium text-white'>Change Profile</button>
                            </div>
                        </div>
                        <div className='p-2 bg-slate-300'>
                            <p>Change Password</p>
                        </div>
                    </div>

                    <div className='w-full my-10'>
                        <h2 className='text-xl font-medium'>Bio:</h2>
                        <textarea className='p-4 w-full' cols="30" rows="3">
                            Hello, I am a 3rd year BSIT student!
                        </textarea>
                    </div>

                    <div className='w-full my-10'>
                        <h2 className='text-xl font-medium mb-2'>Achievements:</h2>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-col items-center border-2 border-slate-600 p-4 rounded bg-yellow-500'>
                                <img src={medal} className='h-32 w-32' />
                                <h2 className='text-white'>Best in Mathematics 2022</h2>
                            </div>
                            <div className='flex flex-col items-center border-2 border-slate-600 p-4 rounded bg-yellow-500'>
                                <img src={medal} className='h-32 w-32' />
                                <h2 className='text-white'>1st Runner Up English Writing</h2>
                            </div>
                            <div className='flex flex-col items-center border-2 border-slate-600 p-4 rounded bg-yellow-500'>
                                <img src={medal} className='h-32 w-32' />
                                <h2 className='text-white'>Mathematics Quiz Bee Champion 2023</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Settings