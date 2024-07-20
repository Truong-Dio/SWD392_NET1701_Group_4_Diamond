import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/staff/Profile.css';

const VideoBackground = () => (
    <video autoPlay loop muted className='video-background'>
        <source src='/videos/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
    </video>
);

const Profile = () => {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [position, setPosition] = useState('');
    const [cccd, setCccd] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [accountId, setAccountId] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const storedAccountId = localStorage.getItem('accountID');
        if (!storedAccountId) {
            console.error('Account ID not found in localStorage.');
            return;
        }

        const fetchProfileData = async () => {
            try {
                const response = await axios.get(
                    `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accounts/GetByIdWithAllField/${storedAccountId}`
                );
                const data = response.data.data;
                setFullName(`${data.firstName} ${data.lastName}`);
                setPhone(data.phone);
                setAddress(data.address);
                setDob(formatDate(data.dob));
                setPosition(data.role === 1 ? 'Staff' : data.role === 2 ? 'Manager' : 'Other');
                setCccd(data.accountID);
                setEmail(data.email);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setAccountId(data.accountID);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = date.getDate();
        day = day < 10 ? '0' + day : day;
        return `${year}-${month}-${day}`;
    };

    const handleSave = async () => {
        try {
            const currentDate = new Date();
            const selectedDate = new Date(dob);
            if (selectedDate > currentDate) {
                setError('Date of birth cannot be in the future.');
                return;
            }
            const updatedData = {
                accountID: accountId,
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                address: address,
                dob: dob,
                role: 1,
            };

            const response = await axios.put(
                `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accounts/Update/${accountId}`,
                updatedData
            );
            alert('Profile updated successfully!');
            setFullName(`${updatedData.firstName} ${updatedData.lastName}`);
            setPhone(updatedData.phone);
            setAddress(updatedData.address);
            setDob(formatDate(updatedData.dob));
            setEmail(updatedData.email);
            setFirstName(updatedData.firstName);
            setLastName(updatedData.lastName);
        } catch (error) {
            console.error('Error updating profile:', error.response ? error.response.data : error.message);
            alert('Failed to update profile. Please try again.');
        }
    };

    return (
        <div className='test'>
            <Header />
            <div className='containerBody2'>
                <h1 className='text-center mb-4'>Hello, {fullName}</h1>
                <form className='form-container'>
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='fullName' className='form-label'>
                                Full Name:
                            </label>
                            <input type='text' className='form-control' id='fullName' value={fullName} readOnly />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='dob' className='form-label'>
                                Date of Birth:
                            </label>
                            <input
                                type='date'
                                className='form-control'
                                id='dob'
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                            {error && <p className='text-danger'>{error}</p>}
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='position' className='form-label'>
                                Role:
                            </label>
                            <input type='text' className='form-control' id='position' value={position} readOnly />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='address' className='form-label'>
                                Address:
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='phone' className='form-label'>
                                Phone:
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='email' className='form-label'>
                                Email:
                            </label>
                            <input
                                type='email'
                                className='form-control'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='password' className='form-label'>
                                Password:
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='firstName' className='form-label'>
                                First Name:
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='firstName'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='lastName' className='form-label'>
                                Last Name:
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='lastName'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='cccd' className='form-label'>
                                AccountID:
                            </label>
                            <input type='text' className='form-control' id='cccd' value={cccd} readOnly />
                        </div>
                    </div>
                    <button type='button' className='btn btn-primary' onClick={handleSave}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
