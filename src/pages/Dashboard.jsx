import React from 'react';
import "../css/dashboard.scss";
import { useSpring, animated } from 'react-spring';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles
import Calendar from 'react-calendar'; // Import the calendar component
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {

    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 }, // Adjust duration as needed
      });

    const slideIn = useSpring({
        transform: 'translateX(0%)',
        from: { transform: 'translateX(-100%)' },
      });

  

    const rotate = useSpring({
        transform: 'rotate(360deg)',
        from: { transform: 'rotate(0deg)' },
      });

    
      
      
      
      


    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Header/>
                <animated.div style={slideIn}>
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
                        <div className="progressText">Math</div>
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
                        <div className="progressText">English</div>
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
                        <div className="progressText">Filipino</div>
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
                        <div className="progressText">P.E</div>
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
                </animated.div>
                </div>
                </div>
  );
}

export default Dashboard;
