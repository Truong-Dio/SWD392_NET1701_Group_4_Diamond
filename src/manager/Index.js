import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/templatemo-style.css';
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/bootstrap.min.css'
import MySVG from '../../assets/img/people.svg';

const VideoBackground = () => (
    <video autoPlay loop muted className='video-background'>
        <source src='/videos/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
    </video>
);

const Index = () => {
    const navigate = useNavigate();
    const [diamondCount, setDiamondCount] = useState(0);
    const [accessoriesCount, setAccessoriesCount] = useState(0);
    const [orders, setOrders] = useState([]);
    const [staffCount, setStaffCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
        fetch(
            'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Diamonds/GetAllWithAllField'
        )
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data && Array.isArray(data.data)) {
                    const count = data.data.length;
                    setDiamondCount(count);
                } else {
                    throw new Error('Invalid data format from API');
                }
            })
            .catch((error) => {
                console.error('Error fetching diamond data:', error);
            });

        fetch(
            'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accessories/GetAllWithAllField'
        )
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data && Array.isArray(data.data)) {
                    const count = data.data.length;
                    setAccessoriesCount(count);
                } else {
                    throw new Error('Invalid data format from API');
                }
            })
            .catch((error) => {
                console.error('Error fetching accessory data:', error);
            });

        fetch(
            'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Orders/GetAllWithAllField'
        )
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data && Array.isArray(data.data)) {
                    const count = data.data.length;
                    setOrderCount(count);
                    setOrders(data.data);
                } else {
                    throw new Error('Invalid data format from API');
                }
            })
            .catch((error) => {
                console.error('Error fetching order data:', error);
            });

        fetch(
            'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accounts/GetAllWithAllField'
        )
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data && Array.isArray(data.data)) {
                    const staffData = data.data.filter(
                        (account) => account.role === 1
                    );
                    setStaffCount(staffData.length);
                    setStaffList(staffData);
                } else {
                    throw new Error('Invalid data format from API');
                }
            })
            .catch((error) => {
                console.error('Error fetching staff data:', error);
            });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <Fragment className='test'>
            <div className='test' id='home'>
                <nav className='navbar navbar-expand-xl'>
                    <div className='container h-100'>
                        <a className='navbar-brand' href='/index'>
                            <h1 className='tm-site-title mb-0'>Manager</h1>
                        </a>
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

                        <div
                            className='collapse navbar-collapse'
                            id='navbarSupportedContent'
                        >
                            <ul className='navbar-nav mx-auto h-100'>
                                <li className='nav-item'>
                                    <a className='nav-link active' href='#'>
                                        <i className='fas fa-tachometer-alt'></i>
                                        {' '}
                                        Dashboard
                                        <span className='sr-only'>
                                            (current)
                                        </span>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='diamond'>
                                        <FontAwesomeIcon
                                            icon={faWarehouse}
                                            className='mr-2'
                                        />
                                        Diamond Storage
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='accessory'>
                                        <FontAwesomeIcon
                                            icon={faWarehouse}
                                            className='mr-2'
                                        />
                                        Accessory Storage
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='accounts'>
                                        <i className='far fa-user'></i>
                                        Accounts
                                    </a>
                                </li>
                            </ul>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <a
                                        className='nav-link d-block'
                                        href='/login'
                                    >
                                        Manager, <b>Logout</b>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='containerBody'>
                    <div className='row'>
                        <div className='col'>
                            <p className='text-black mt-2 mb-5'>
                                Welcome back, <b>Manager</b>
                            </p>
                        </div>
                    </div>

                    <div className='tm-content-row'>
                        <div className='row'>
                            <div className='col-sm-6 col-md-3 col-lg-3'>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: '#7DA0FA',
                                        borderRadius: 20,
                                        display: 'flex',
                                        padding: 20,
                                        flexDirection: 'column',
                                    }}
                                >
                                    <p className='colorTextBox'>
                                        Total number of Diamonds
                                    </p>
                                    <div
                                        style={{
                                            width: '100%',
                                            paddingBottom: 0,
                                        }}
                                    >
                                        <p className='colorTextBox TextBoxNumber'>
                                            {diamondCount}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-3 col-lg-3'>
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
                                    <p className='colorTextBox'>
                                        Total number of Accessories
                                    </p>
                                    <div
                                        style={{
                                            width: '100%',
                                            paddingBottom: 0,
                                        }}
                                    >
                                        <p className='colorTextBox TextBoxNumber'>
                                            {accessoriesCount}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-3 col-lg-3'>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: '#7978E9',
                                        borderRadius: 20,
                                        display: 'flex',
                                        padding: 20,
                                        flexDirection: 'column',
                                    }}
                                >
                                    <p className='colorTextBox'>
                                        Total number of Staff
                                    </p>
                                    <div
                                        style={{
                                            width: '100%',
                                            paddingBottom: 0,
                                        }}
                                    >
                                        <p className='colorTextBox TextBoxNumber'>
                                            {staffCount}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-3 col-lg-3'>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: '#F3797E',
                                        borderRadius: 20,
                                        display: 'flex',
                                        padding: 20,
                                        flexDirection: 'column',
                                    }}
                                >
                                    <p className='colorTextBox'>
                                        Total number of Orders
                                    </p>
                                    <div
                                        style={{
                                            width: '100%',
                                            paddingBottom: 0,
                                        }}
                                    >
                                        <p className='colorTextBox TextBoxNumber'>
                                            {orderCount}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='tm-bg-primary-dark tm-block2 tm-block-taller tm-block-overflow'>
                            <h2 className='tm-block-title'>Staff List</h2>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Account ID</th>
                                        <th scope='col'>User name</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Phone</th>
                                        <th scope='col'>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staffList.map((order) => (
                                        <tr key={order.accountID}>
                                            <td>{order.accountID}</td>
                                            <td>{`${order.firstName} ${order.lastName}`}</td>
                                            <td>{order.email}</td>
                                            <td>{order.phone}</td>
                                            <td>{order.address}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='tm-content-row'>
                        {/* <div className='col-12'> */}
                        <div className='tm-bg-primary-dark tm-block2 tm-block-taller tm-block-overflow'>
                            <h2 className='tm-block-title'>Orders List</h2>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Order ID</th>
                                        <th scope='col'>Order Status</th>
                                        <th scope='col'>Date Ordered</th>
                                        <th scope='col'>Date Received</th>
                                        <th scope='col'>Total Price</th>
                                        <th scope='col'>Customer ID</th>
                                        <th scope='col'>Employee Assign ID</th>
                                        <th scope='col'>Pay Method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.orderID}>
                                            <td>{order.orderID}</td>
                                            <td>{order.orderStatus}</td>
                                            <td>
                                                {order.dateOrdered
                                                    ? new Date(
                                                          order.dateOrdered
                                                      ).toLocaleDateString()
                                                    : ''}
                                            </td>
                                            <td>
                                                {order.dateReceived
                                                    ? new Date(
                                                          order.dateReceived
                                                      ).toLocaleDateString()
                                                    : ''}
                                            </td>
                                            <td>{order.totalPrice}</td>
                                            <td>{order.customerID}</td>
                                            <td>{order.employeeAssignID}</td>
                                            <td>{order.payMethod}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <script src='js/jquery-3.3.1.min.js'></script>
            <script src='js/moment.min.js'></script>
            <script src='js/Chart.min.js'></script>
            <script src='js/bootstrap.min.js'></script>
            <script src='js/tooplate-scripts.js'></script>
        </Fragment>
    );
};

export default Index;
