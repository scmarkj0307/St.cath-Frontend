import '../css/sidebar.scss';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SendIcon from '@mui/icons-material/Send';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
import { Link } from "react-router-dom"
import LogoImage from '../assets/Logo_Catherine.png'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <img src={LogoImage} alt="Logo" className="logoImage" />
            <span className="logo">St. Catherine</span>
        </div>
        <div className="center">
            <ul>
                <Link to="/dashboard" style={{textDecoration:"none"}}>
                <li>
                    <DashboardCustomizeIcon/>
                    <span className='title'>Dashboard</span>
                </li>
                </Link>

                <Link to="/subjects" style={{textDecoration:"none"}}>
                <li>
                    <LibraryBooksOutlinedIcon/>
                    <span className='title'>Subjects</span>
                </li>
                </Link>

                <Link to="/messages" style={{textDecoration:"none"}}>
                <li>
                    <SendIcon/>
                    <span className='title'>Messages</span>
                </li>
                </Link>

                <Link to="/settings" style={{textDecoration:"none"}}>
                <li>
                    <SettingsIcon/>
                    <span className='title'> Settings</span>
                </li>
                </Link>
            </ul>
        </div>



        <div className="bottom">
            <ul>
            <Link to="/" style={{textDecoration:"none"}}>
                <li>
                    <LogoutIcon/>
                    <span className='title'>Logout</span>
                </li>
            </Link>
            </ul>
        </div>

    </div>
  )
}


export default Sidebar