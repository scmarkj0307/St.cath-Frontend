import React from 'react'
import "../css/dashboard.scss";

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

import subject1 from "../assets/subject1.jpg";
import subject2 from "../assets/subject2.jpg";

const Subjects = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Header />
                <div className='p-10'>
                    <h1 className='text-2xl font-semibold mb-10'>Subjects</h1>
                    <div className='flex flex-row justify-between'>
                        <div className=''>
                            <div className='border border-slate-400 w-96 flex flex-row mb-6'>
                                <img src={subject1} className=' w-28' />
                                <div className='flex flex-col gap-2 p-4'>
                                    <h2 className='text-xl font-semibold'>Math</h2>
                                    <p>Lesson 1: Natural Numbers</p>
                                    <p>Lesson 2: Number Sequence</p>
                                </div>
                            </div>
                            <div className='border border-slate-400 w-96 flex flex-row'>
                                <img src={subject2} className=' w-28' />
                                <div className='flex flex-col gap-2 p-4'>
                                    <h2 className='text-xl font-semibold'>English</h2>
                                    <p>Lesson 1: Figure of speech</p>
                                    <p>Lesson 2: Verbal Writing</p>
                                </div>
                            </div>
                        </div>

                        <div className='border border-slate-400 w-40 flex flex-col p-4'>
                            <h1 className='text-xl font-semibold mb-4'>To-do!</h1>
                            <div className='flex flex-col gap-4'>
                                <p className='bg-yellow-200 p-2'>Math</p>
                                <p className='bg-yellow-200 p-2'>English</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}

export default Subjects