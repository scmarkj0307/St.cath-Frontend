import React from 'react';
import "../css/dashboard.scss";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles
import Calendar from 'react-calendar'; // Import the calendar component
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Header/>
                <div><h1 className='progressHeader'>Summary Report</h1></div>
                <div className="progressBox">
                    <div className="progressItem">
                        <CircularProgressbar
                        value={25}
                        text="25%"
                        strokeWidth={12}
                        styles={buildStyles({
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: '#3498db',
                            textColor: 'white',
                        })}
                        />
                        <div className="progressText">Subject 1</div>
                    </div>
                    <div className="progressItem">
                        <CircularProgressbar
                        value={50}
                        text="50%"
                        strokeWidth={12}
                        styles={buildStyles({
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: '#3498db',
                            textColor: 'white',
                        })}
                        />
                        <div className="progressText">Subject 2</div>
                    </div>
                    <div className="progressItem">
                        <CircularProgressbar
                        value={75}
                        text="75%"
                        strokeWidth={12}
                        styles={buildStyles({
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: '#3498db',
                            textColor: 'white',
                        })}
                        />
                        <div className="progressText">Subject 3</div>
                    </div>
                    <div className="progressItem">
                        <CircularProgressbar
                        value={100}
                        text="100%"
                        strokeWidth={12}
                        styles={buildStyles({
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: '#3498db',
                            textColor: 'white',
                        })}
                        />
                        <div className="progressText">Subject 4</div>
                    </div>
                    </div>
                    <div className='calendarNewsContainer'>
                        <div className="calendarContainer">
                            <h2 className='calendarLabel'>Calendar</h2>
                            <Calendar />
                        </div>

                        <div className="newsContainer">
                            <h2>News</h2>
                            <div className="newsContent">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                                {/* Add more news content as needed */}
                            </div>
                            </div>
                    </div>
                    
                </div>
                </div>
  );
}

export default Dashboard;
