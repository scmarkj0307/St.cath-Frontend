import React from 'react'
import "../css/dashboard.scss";

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Messages = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Header/>
                Message container
            </div>
        </div>

       
    )
}

export default Messages