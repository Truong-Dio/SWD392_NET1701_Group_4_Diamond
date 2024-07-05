import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import 'F:/Semester7/fe_thien/src/assets/css/templatemo-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
    const navigate = useNavigate();
    const [diamondCount, setDiamondCount] = useState(0);
    const [accesoriesCount, setAccessoriesCount] = useState(0);
    const [orders, setOrders] = useState([]);
    const [staffCount, setStaffCount] = useState(0); 
    const [orderCount, setOrderCount] = useState(0);

    useEffect(() => {
        fetch('https://diamondstoresystemwebapi.azurewebsites.net/api/Diamonds/GetAllWithAllField')
            .then(response => response.json())
            .then(data => {
                if (data && data.data && Array.isArray(data.data)) {
                    const count = data.data.length; //dem so luong diamond trong storage
                    setDiamondCount(count); 
                } else {
                    throw new Error('Invalid data format from API');
                }
            })
            .catch(error => {
                console.error('Error fetching diamond data:', error);
            });

        fetch('https://diamondstoresystemwebapi.azurewebsites.net/api/Accessories/GetAllWithAllField')
            .then(response => response.json())
            .then(data => {
                if (data && data.data && Array.isArray(data.data)) {
                    const count = data.data.length; //dem so luong accessories trong storage
                    setAccessoriesCount(count); 
                } else {
                    throw new Error('Invalid data format from API');
                }
            })
            .catch(error => {
                console.error('Error fetching diamond data:', error);
            });
            fetch('https://diamondstoresystemwebapi.azurewebsites.net/api/Orders/GetAllWithAllField')
            .then(response => response.json())
            .then(data => {
                if (data && data.data && Array.isArray(data.data)) {
                    const count = data.data.length; //dem so luong diamond trong storage
                    setOrderCount(count); 
                } else {
                    throw new Error('Invalid data format from API');
                }
            })
            .catch(error => {
                console.error('Error fetching diamond data:', error);
            });

        fetch('https://diamondstoresystemwebapi.azurewebsites.net/api/Orders/GetAllWithAllField')
            .then(response => response.json())
            .then(data => {
                if (data.status === 1 && Array.isArray(data.data)) {
                    setOrders(data.data);
                } else {
                    console.error('Failed to fetch orders:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });

        fetch('https://diamondstoresystemwebapi.azurewebsites.net/api/Accounts/GetAllWithAllField')
            .then(response => response.json())
            .then(data => {
                if (data && data.data && Array.isArray(data.data)) {
                    const staffCount = data.data.filter(account => account.role === 1).length; // account có role là 1 = staff
                    setStaffCount(staffCount); 
                } else {
                    throw new Error('Invalid data format from API');
                }
            })
            .catch(error => {
                console.error('Error fetching account data:', error);
            });
    }, []);

    const handleLogout = () => {
      localStorage.removeItem('isAuthenticated'); 
      navigate('/login'); 
    };

    return (
        <Fragment>
            <div className="" id="home">
                <nav className="navbar navbar-expand-xl">
                    <div className="container h-100">
                        <a className="navbar-brand" href="index.html">
                            <h1 className="tm-site-title mb-0">Manager</h1>
                        </a>
                        <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars tm-nav-icon"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto h-100">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        <i className="fas fa-tachometer-alt"></i>
                                        Dashboard
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="diamond">
                                        <i className=""> <FontAwesomeIcon icon={faWarehouse} className="mr-2" />
                                        </i>
                                        Diamond Storage
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="accessory">
                                        <i className=""> <FontAwesomeIcon icon={faWarehouse} className="mr-2" />
                                        </i>
                                        Accessory Storage
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="accounts">
                                        <i className="far fa-user"></i>
                                        Accounts
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link d-block" href="/login">
                                        Manager, <b>Logout</b>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="text-white mt-5 mb-3">Welcome back, <b>Manager</b></p>
                        </div>
                    </div>

                    <div className="row tm-content-row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="tm-bg-primary-dark tm-block tm-block-taller">
                                <h2 className="tm-block-title">Shop Information</h2>
                                <p>Total number of Diamonds: {diamondCount}</p>
                                <p>Total number of Accessory: {accesoriesCount}</p>
                                <p>Total of staff working: {staffCount}</p> 
                                <p>Total number of Order: {orderCount}</p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
                                <h2 className="tm-block-title">Notification List</h2>
                                <div className="tm-notification-items">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row tm-content-row">
                        <div className="col-12">
                            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
                                <h2 className="tm-block-title">Orders List</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order ID</th>
                                            <th scope="col">Order Status</th>
                                            <th scope="col">Date Ordered</th>
                                            <th scope="col">Date Received</th>
                                            <th scope="col">Total Price</th>
                                            <th scope="col">Customer ID</th>
                                            <th scope="col">Employee Assign ID</th>
                                            <th scope="col">Pay Method</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(order => (
                                            <tr key={order.orderID}>
                                                <td>{order.orderID}</td>
                                                <td>{order.orderStatus}</td>
                                                <td>{order.dateOrdered}</td>
                                                <td>{order.dateReceived}</td>
                                                <td>{order.totalPrice}</td>
                                                <td>{order.customerID}</td>
                                                <td>{order.employeeAssignID}</td>
                                                <td>{order.payMethod}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="js/jquery-3.3.1.min.js"></script>
            <script src="js/moment.min.js"></script>
            <script src="js/Chart.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/tooplate-scripts.js"></script>
        </Fragment>
    );
}

export default Index;
