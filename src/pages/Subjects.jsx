import React from 'react'
import "../css/dashboard.scss";

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Subjects = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Header/>
            </div>
        </div>

       
    )
}

export default Subjects