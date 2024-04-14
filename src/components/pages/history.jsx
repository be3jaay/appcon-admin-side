import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import hospitalLogo from "../assets/images/hospital-logo.png"
import { FaArrowDownLong } from "react-icons/fa6";
import { historyData } from '../HistoryData/historyData';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const History = () => {
  return (
    <div className="body-container">
        <header className="header-hospital">
          <div className="info-hospital">
            <h1>CMC HOSPITAL</h1>
            <div className="location-hospital">
              <FaLocationDot />
              <p>LOS BAÑOS, LAGUNA</p>
            </div>
            
          </div>
          <div className="profile-hospital">
            <img src={hospitalLogo} alt="" />
            <div className="profile-info-hospital">
              <h1>CMC HOSPITAL</h1>
              <Link to = {"/account"}><p>Edit Profile</p></Link>
            </div>
          </div>
        </header>
        
        <h1 className='history-header'>EMERGENCY HISTORY</h1>

        <table className='table-container'>
          <thead className='table-heading'>
            <tr className='table-row'>
              <div className="table-date">
                  <th className='table-info'>Date</th>
                    <FaArrowDownLong />
                </div>
              <th className='table-info'>Location</th>
            </tr>
           
              {historyData.map((item, index) => {
                return (
                  <tr key={index} className='table-row2'>
                    <td className='history-date'>{item.date}</td>
                    <td className='history-location'>{item.loc}</td>
                  </tr>
                )
              })}
            </thead>
        </table>
        <div className="pagination">
          <FaArrowLeft/>
          <span>Page 1 of 10</span>
          <FaArrowRight/>
        </div>
    </div>
  )
}

export default History
