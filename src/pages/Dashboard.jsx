import React from 'react'
import "../css/dashboard.scss";

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Dashboard = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Header/>
                Dashboard container
            </div>
        </div>

       
    )
}

export default Dashboard