import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, Link } from 'react-router-dom';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import 'F:/Semester7/fe_thien/src/assets/css/templatemo-style.css';
import axios from 'axios';

const Accounts = () => {
    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://diamondstoresystemwebapi.azurewebsites.net/api/Accounts/GetAllWithAllField')
            .then(response => response.json())
            .then(data => {
                if (data && data.data && Array.isArray(data.data)) {
                    const staffAccounts = data.data.filter(account => account.role === 1);
                    const updatedAccounts = staffAccounts.map(account => {
                        if (account.workingSchedule === 1) {
                            account.workingHours = "9h-17h";
                        } else if (account.workingSchedule === 2) {
                            account.workingHours = "13h-21h";
                        } else {
                            account.workingHours = "Not specified";
                        }
                        return account;
                    });
                    setAccounts(updatedAccounts);
                } else {
                    throw new Error('Invalid data format from API');
                }
            })
            .catch(error => {
                console.error('Error fetching account data:', error);
            });
    }, []);

    const handleWorkingScheduleChange = (accountId, newSchedule) => {
        const accountToUpdate = accounts.find(account => account.accountID === accountId);

        if (accountToUpdate) {
            axios.put(`https://diamondstoresystemwebapi.azurewebsites.net/api/Accounts/Update/${accountId}`, {
                ...accountToUpdate,
                workingSchedule: newSchedule
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_JWT_TOKEN'
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        setAccounts(prevAccounts => prevAccounts.map(account => {
                            if (account.accountID === accountId) {
                                account.workingSchedule = newSchedule;
                                account.workingHours = newSchedule === 1 ? "9h-17h" : "13h-21h";
                            }
                            return account;
                        }));
                        console.log('Working schedule updated successfully');
                    } else {
                        console.error('Failed to update working schedule');
                    }
                })
                .catch(error => {
                    console.error('Error updating working schedule:', error);
                });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <Fragment>
            <div className="" id="home">
                <nav className="navbar navbar-expand-xl">
                    <div className="container h-100">
                        <Link className="navbar-brand" to="/index">
                            <h1 className="tm-site-title mb-0">Admin</h1>
                        </Link>
                        <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars tm-nav-icon"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto h-100">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/index">
                                        <i className="fas fa-tachometer-alt"></i>
                                        Dashboard
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/diamond">
                                        <i className=""> <FontAwesomeIcon icon={faWarehouse} className="mr-2" />
                                        </i>
                                        Diamond Storage
                                    </Link>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link" href="accessory">
                                            <i className=""> <FontAwesomeIcon icon={faWarehouse} className="mr-2" />
                                        </i>
                                                Accessory Storage
                                                </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/accounts">
                                        <i className="far fa-user"></i>
                                        Accounts
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link d-block" href="login" onClick={handleLogout}>
                                        Admin, <b>Logout</b>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container mt-5">
                    <div className="row tm-content-row">
                        <div className="col-12 tm-block-col">
                            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                                <h2 className="tm-block-title">List of Accounts</h2>
                                <p className="text-white">Accounts</p>
                                <select className="custom-select">
                                    <option value="0">Select account</option>
                                    <option value="1">Staff</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row tm-content-row">
                        {accounts.map(account => (
                            <div key={account.accountID} className="col-12 tm-block-col">
                                <div className="tm-bg-primary-dark tm-block tm-block-taller">
                                    <h3 className="tm-block-title">{account.firstName} {account.lastName}</h3>
                                    <p>Email: {account.email}</p>
                                    <p>Phone: {account.phone}</p>
                                    <p>Address: {account.address}</p>
                                    <p>Working Hours: {account.workingHours}</p>
                                    <select 
                                        value={account.workingSchedule}
                                        onChange={(e) => handleWorkingScheduleChange(account.accountID, parseInt(e.target.value))}
                                    >
                                        <option value="1">9h-17h</option>
                                        <option value="2">13h-21h</option>
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
