import React from 'react';
import './topbar.css';
// import profile from '../imgs/easycselearn.png'
import {NotificationsNone,SettingsApplications,Language} from '@material-ui/icons';
function Topbar(props) {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topbarleft">
                <span className="logo">INVEST</span>
                </div>
                <div className="topbarright">
                
                    <div className="iconContainer">
                            <NotificationsNone/>
                            <span className="topiconbadge">2</span>
                    </div>

                    <div className="iconContainer">
                            <Language/>
                            <span className="topiconbadge">2</span>
                    </div>
                    <div className="iconContainer">
                            <SettingsApplications/>
                            
                    </div>

                    {/* <img alt="easycselearn" src={profile} className="Avatar">
                    </img> */}



                </div>
            </div>
        </div>
    );
}

export default Topbar;