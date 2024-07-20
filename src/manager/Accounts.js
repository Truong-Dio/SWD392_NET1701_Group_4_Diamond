import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, Link } from 'react-router-dom';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/templatemo-style.css';
import axios from 'axios';

const VideoBackground = () => (
    <video autoPlay loop muted className='video-background'>
        <source src='/videos/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
    </video>
);
const Accounts = () => {
    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accounts/GetAllWithAllField')
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data && Array.isArray(data.data)) {
                    const staffAccounts = data.data.filter((account) => account.role === 1);
                    const updatedAccounts = staffAccounts.map((account) => {
                        if (account.workingSchedule === 1) {
                            account.workingHours = '9AM-5PM';
                        } else if (account.workingSchedule === 2) {
                            account.workingHours = '13h-21h';
                        } else {
                            account.workingHours = 'Not specified';
                        }
                        return account;
                    });
                    setAccounts(updatedAccounts);
                } else {
                    throw new Error('Invalid data format from API');
                }
            })
            .catch((error) => {
                console.error('Error fetching account data:', error);
            });
    }, []);

    const handleWorkingScheduleChange = (accountId, newSchedule) => {
        const accountToUpdate = accounts.find((account) => account.accountID === accountId);

        if (accountToUpdate) {
            axios
                .post(
                    `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accounts/ChangeWorkingSchedule/${accountId}?workingSchedule=${newSchedule}`,
                    {},
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer YOUR_JWT_TOKEN',
                        },
                    }
                )
                .then((response) => {
                    if (response.status === 200) {
                        setAccounts((prevAccounts) =>
                            prevAccounts.map((account) => {
                                if (account.accountID === accountId) {
                                    account.workingSchedule = newSchedule;
                                    account.workingHours = newSchedule === 1 ? '9AM-5PM' : '1PM-9PM';
                                }
                                return account;
                            })
                        );
                        console.log('Working schedule updated successfully');
                    } else {
                        console.error('Failed to update working schedule');
                    }
                })
                .catch((error) => {
                    console.error('Error updating working schedule:', error);
                });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <Fragment className='test'>
            <div className='test0' id='home'>
                <nav className='navbar navbar-expand-xl'>
                    <div className='container h-100'>
                        <Link className='navbar-brand' to='/index'>
                            <h1 className='tm-site-title mb-0'>Manager</h1>
                        </Link>
                        <button
                            className='navbar-toggler ml-auto mr-0'
                            type='button'
                            data-toggle='collapse'
                            data-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <i className='fas fa-bars tm-nav-icon'></i>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav mx-auto h-100'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/index'>
                                        <i className='fas fa-tachometer-alt'></i>
                                        Dashboard
                                        <span className='sr-only'>(current)</span>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/diamond'>
                                        
                                        <FontAwesomeIcon icon={faWarehouse} className='mr-2' />
                                        Diamond Storage
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='accessory'>
                                       
                                        <FontAwesomeIcon icon={faWarehouse} className='mr-2' />
                                        Accessory Storage
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link active' to='/accounts'>
                                        <i className='far fa-user'></i>
                                        Accounts
                                    </Link>
                                </li>
                            </ul>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <a className='nav-link d-block' href='login' onClick={handleLogout}>
                                        Manager, <b>Logout</b>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='mt-5' style={{ padding: 16 }}>
                    <div className='row tm-content-row'>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <h2 className='tm-block-title'>List of Accounts</h2>
                            <p className='text-white'>Accounts</p>
                            <select className='custom-select'>
                                <option value='0'>Select account</option>
                                <option value='1'>Staff</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        {accounts.map((account) => (
                            <div key={account.accountID} className='col-sm-6 col-md-3 col-lg-3'>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: '#4747A1',
                                        borderRadius: 20,
                                        display: 'flex',
                                        padding: 20,
                                        flexDirection: 'column',
                                    }}
                                >
                                    <h3 className='tm-block-title text-white'>Account ID: {account.accountID}</h3>
                                    <p className='text-white'>
                                        {account.firstName} {account.lastName}
                                    </p>
                                    <p className='text-white'>Email: {account.email}</p>
                                    <p className='text-white'>Phone: {account.phone}</p>
                                    <p className='text-white'>Address: {account.address}</p>
                                    <p className='text-white'>Working Hours: {account.workingHours}</p>
                                    <select
                                        value={account.workingSchedule}
                                        onChange={(e) =>
                                            handleWorkingScheduleChange(account.accountID, parseInt(e.target.value))
                                        }
                                    >
                                        <option value='1'>9AM-5PM</option>
                                        <option value='2'>1PM-9PM</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Accounts;
