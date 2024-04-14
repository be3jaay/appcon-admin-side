// components/pages/form.jsx
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import hospitalLogo from "../assets/images/hospital-logo.png"
import emergencyIcon from "../assets/images/emergency-icon.png"
import { servicesData } from '../ServicesData/servicesData';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>

    <div className="body-container">
          {/* Header */}
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
            {/* Emergency Alert Header */}
        <div className="alert-header">
          <h1>EMERGENCY ALERT</h1>
          <Link to={"/history"}>
            <div className="alert-history">
              <MdHistory />
              <p>History</p>
            </div>
          </Link>
            
        </div>
        {/* Emergency Alert Container & Card*/}
        <div className="emergency-card-container">
          <div className="emergency-card">
            <div className="emergency-card-info">
                <div className="emergency-card-icon">
                  <img src={emergencyIcon} alt="" />
                </div>
                <div className="emergency-card-text">
                  <h1>Emergency Alert</h1>
                    <div className="emergency-card-location">
                      <FaLocationDot />
                      <p>Los Baños, Apitong Street</p>
                    </div>
                </div>
            </div>
            <div className="view-alert">
              <FaAngleRight />
            </div>   
          </div>
          <div className="emergency-card">
            <div className="emergency-card-info">
                <div className="emergency-card-icon">
                  <img src={emergencyIcon} alt="" />
                </div>
                <div className="emergency-card-text">
                  <h1>Emergency Alert</h1>
                    <div className="emergency-card-location">
                      <FaLocationDot />
                      <p>Los Baños, Apitong Street</p>
                    </div>
                </div>
            </div>
            <div className="view-alert">
              <FaAngleRight />
            </div>   
          </div>
          <div className="emergency-card">
            <div className="emergency-card-info">
                <div className="emergency-card-icon">
                  <img src={emergencyIcon} alt="" />
                </div>
                <div className="emergency-card-text">
                  <h1>Emergency Alert</h1>
                    <div className="emergency-card-location">
                      <FaLocationDot />
                      <p>Los Baños, Apitong Street</p>
                    </div>
                </div>
            </div>
            <div className="view-alert">
              <FaAngleRight />
            </div>   
          </div>
        </div>
        
        {/* Offer Services*/}

        <div className="offer-header">
          <h1>OFFER SERVICES</h1>
            <div className="offer-add">
              <IoIosAdd />
              <p>Add more</p>
            </div>
        </div>
         {/* Offer Services Data*/}
        <div className="offer-services">
          {servicesData.map((item, index) => {
            return(
              <li key={index}>
                <div className="offer-services-icon">
                  <span className="offer-icon">{item.icon}</span>
                  <p className='offer-title'>{item.title}</p>
                </div>
                
              </li>
            )
          })}
        </div>

    </div>
      
    </>
  );
}

export default Home;
