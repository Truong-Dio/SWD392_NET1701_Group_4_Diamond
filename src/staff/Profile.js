import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'F:/Semester7/staff/src/Profile.css';  
import { Link } from 'react-router-dom';

const Profile = () => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [position, setPosition] = useState('');
  const [cccd, setCccd] = useState('');
  const [avatar, setAvatar] = useState('');

  //API
  useEffect(() => {
    setFullName('Nguyen Van A');
  }, []);

  const handleSave = () => {
    alert(`Name: ${fullName}, Phone: ${phone}, Address: ${address}, DOB: ${dob}, Position: ${position}, CCCD: ${cccd}`);
  };

  const handleAvatarChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="container my-5">
      <Header />
      <Link to="/" className="back-button">Back Staff Page</Link> 
      <h1 className="text-center mb-4">Hello, {fullName}</h1>
      <form className="form-container">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label">Name:</label>
            <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="dob" className="form-label">Birthdate:</label>
            <input type="date" className="form-control" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} readOnly />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="position" className="form-label">Role:</label>
            <input type="text" className="form-control" id="position" value={position} onChange={(e) => setPosition(e.target.value)} readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="address" className="form-label">Address:</label>
            <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone number:</label>
            <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="cccd" className="form-label">Citizen identification:</label>
            <input type="text" className="form-control" id="cccd" value={cccd} onChange={(e) => setCccd(e.target.value)} readOnly />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="avatar" className="form-label">Personal photo:</label>
            <input type="file" className="form-control" id="avatar" onChange={handleAvatarChange} accept="image/*" />
            {avatar && <img src={avatar} alt="Avatar" className="profile-avatar" />}
          </div>
        </div>
        <button type="button" className="btn btn-primary profile-button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default Profile;