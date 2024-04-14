import React, { useState } from 'react';
import addIcon from '../assets/images/add-icon.png';
import { FaHospitalAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
const Account = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setImageUrl(URL.createObjectURL(file));
    };

    return (
        <div className="body-container">
            <header className='account-details'>
                <h1>Account Details</h1>
                <p>Hospital Information</p>
            </header>

            <form action=""  method="post" className='form-account-detail'>
                <div className="file-input">
                    <input
                        type="file"
                        accept=".jpg, .png, .webp"
                        className="img-file-uploader"
                        onChange={handleFileInputChange}
                    />
                    <div className="file-box">
                        {imageUrl ? <img src={imageUrl} alt="Selected Image" /> : <img src={addIcon} alt="Add Image" />}
                        {!selectedFile && <span>Add Image</span>}
                    </div>
                </div>
                <div className="form-info">
                    <span className='account-title'>Hospital Name</span>
                    <input type="text" className='account-input' placeholder='CMC Hospital' />
                    <FaHospitalAlt className='input-icon-1' />
                    <span className='account-title'>Address</span>
                    <input type="email" className='account-input' placeholder='cmchospital@gmail.com' />
                    <FaHome className='input-icon-2'/>
                    <span className='account-title'>Calling Number</span>
                    <input type="tel" className='account-input' placeholder='095666754853' />
                    <FaPhoneAlt className='input-icon-3'/>
                    <span className='account-title'>Map Link</span>
                    <input type="text" className='account-input' placeholder='Princess Limae Store, 55MG+84P, Manila S Rd, Purok 7, Calamba, 4027 Laguna' />
                    <FaMapMarkerAlt className='input-icon-4'/>
                </div>
                <button className='acc-update'>Update</button>
                <button className='acc-delete'>Discard</button>
            </form>
        </div>
    );
};

export default Account;
