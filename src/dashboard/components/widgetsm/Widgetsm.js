import React from 'react'
import './widgetsm.css'
// import userimage from '../imgs/easycselearn.png'
import {Visibility} from '@material-ui/icons'
function Widgetsm() {
    return (
        <div className="widgetsm">
          <span className="widgetsmTitle">Join Our new member</span>
          <ul className="widgetsmList">
              <li className="widgetsmItem">
                  {/* <img src={userimage} alt="easycselearn" className="widgetsmImage">
                  </img> */}
                  <div className="widgetsmuser">
                      <span className="widgetsmUsername">
                        Rana Sarkar
                      </span>
                      <span className="widgetsmUserTitle">
                            software engineer
                      </span>
                    </div>
                      <button className="Widgetsmbutton">
                            <Visibility/>
                            Display
                      </button>

                 
              </li>
            
              
          </ul>
          <ul className="widgetsmList">
              <li className="widgetsmItem">
                  {/* <img src={userimage} alt="easycselearn" className="widgetsmImage">
                  </img> */}
                  <div className="widgetsmuser">
                      <span className="widgetsmUsername">
                        Rana Sarkar
                      </span>
                      <span className="widgetsmUserTitle">
                            software engineer
                      </span>
                    </div>
                      <button className="Widgetsmbutton">
                            <Visibility/>
                            Display
                      </button>

                 
              </li>
            
              
          </ul>
          <ul className="widgetsmList">
              <li className="widgetsmItem">
                  {/* <img src={userimage} alt="easycselearn" className="widgetsmImage">
                  </img> */}
                  <div className="widgetsmuser">
                      <span className="widgetsmUsername">
                        Rana Sarkar
                      </span>
                      <span className="widgetsmUserTitle">
                            software engineer
                      </span>
                    </div>
                      <button className="Widgetsmbutton">
                            <Visibility className="widgetsmicon"/>
                            Display
                      </button>

                 
              </li>
            
              
          </ul>


        </div>
    )
}

export default Widgetsm
