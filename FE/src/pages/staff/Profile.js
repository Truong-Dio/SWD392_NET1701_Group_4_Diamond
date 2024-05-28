import React, { useState } from 'react';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Profile = () => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [position, setPosition] = useState('');
  const [cccd, setCccd] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSave = () => {
    alert(`Name: ${fullName}, Phone: ${phone}, Address: ${address}, DOB: ${dob}, Position: ${position}, CCCD: ${cccd}`);
  };

  const handleAvatarChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="container">
      <Header />
      <h1>Profile</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Họ và tên:</label>
          <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} readOnly />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Ngày tháng năm sinh:</label>
          <input type="date" className="form-control" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} readOnly />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">Chức vụ:</label>
          <input type="text" className="form-control" id="position" value={position} onChange={(e) => setPosition(e.target.value)} readOnly />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Địa chỉ:</label>
          <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Số điện thoại:</label>
          <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="cccd" className="form-label">CCCD:</label>
          <input type="text" className="form-control" id="cccd" value={cccd} onChange={(e) => setCccd(e.target.value)} readOnly />
        </div>
        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">Ảnh cá nhân:</label>
          <input type="file" className="form-control" id="avatar" onChange={handleAvatarChange} accept="image/*" />
          {avatar && <img src={avatar} alt="Avatar" className="mt-2" style={{ maxWidth: '150px' }} />}
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default Profile;
