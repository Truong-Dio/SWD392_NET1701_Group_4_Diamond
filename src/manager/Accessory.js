import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

const VideoBackground = () => (
    <video autoPlay loop muted className='video-background'>
        <source src='/videos/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
    </video>
);

const Accessory = ({ onLogout }) => {
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        fetchAccessories();
    }, []);

    const fetchAccessories = async () => {
        try {
            const response = await axios.get(
                'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accessories/GetAllWithAllField'
            );
            if (response.data.status === 1) {
                // Filter out blocked accessories
                const filteredAccessories = response.data.data.filter(
                    (accessory) => !accessory.block
                );
                setAccessories(filteredAccessories);
            } else {
                console.error('Fail to get data:', response.data.message);
            }
        } catch (error) {
            console.error('Fail to get data Accessories:', error);
        }
    };

    const handleBlockAccessory = async (accessoryID) => {
        try {
            const response = await axios.delete(
                `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accessories/Block/${accessoryID}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                }
            );
            if (response.data.status === 1) {
                const updatedAccessories = accessories.filter(
                    (accessory) => accessory.accessoryID !== accessoryID
                );
                setAccessories(updatedAccessories);
                alert('Accessory blocked successfully!');
                // Refresh accessories list
                fetchAccessories();
            } else {
                console.error(
                    'Failed to block accessory:',
                    response.data.message
                );
                alert('Failed to block accessory. Please try again.');
            }
        } catch (error) {
            console.error('Failed to block accessory:', error);
            alert('Failed to block accessory. Please try again.');
        }
    };

    return (
      <Fragment className='test'>
            <nav className='navbar navbar-expand-xl'>
                <div className='container h-100'>
                    <Link to='/index' className='navbar-brand'>
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

                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav mx-auto h-100'>
                            <li className='nav-item'>
                                <Link to='/index' className='nav-link'>
                                    <i className='fas fa-tachometer-alt'></i>{' '}
                                    Dashboard
                                    <span className='sr-only'>(current)</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='diamond'>
                                    {/* <i className=''>
                                        {' '} */}
                                        <FontAwesomeIcon
                                            icon={faWarehouse}
                                            className='mr-2'
                                        />
                                    {/* </i> */}
                                    Diamond Storage
                                </a>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/accessory'
                                    className='nav-link active'
                                >
                                    {/* <i className=''>
                                        {' '} */}
                                        <FontAwesomeIcon
                                            icon={faWarehouse}
                                            className='mr-2'
                                        />
                                    {/* </i> */}
                                    {' '}
                                    ACCESSORIES STORAGE
                                </Link>
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
                                    href='/'
                                    onClick={onLogout}
                                >
                                    Manager, <b>Logout</b>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='test2'>
                <div className='row tm-content-row'>
                    {/* <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col'> */}
                        {/* <div className='tm-bg-primary-dark tm-block tm-block-products'> */}
                            <div className='tm-product-table-container'>
                                <table className='table table-hover tm-table-small tm-product-table'>
                                    <thead>
                                        <tr>
                                            <th scope='col' className="sticky-header">&nbsp;</th>
                                            <th scope='col' className="sticky-header">ACCESSORY ID</th>
                                            <th scope='col' className="sticky-header">NAME</th>
                                            <th scope='col' className="sticky-header">DESCRIPTION</th>
                                            <th scope='col' className="sticky-header">PRICE</th>
                                            <th scope='col' className="sticky-header">STOCK</th>
                                            <th scope='col' className="sticky-header">SKU</th>
                                            <th scope='col' className="sticky-header">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {accessories.map((accessory) => (
                                            <tr key={accessory.accessoryID}>
                                                <td>
                                                    <img
                                                        src={accessory.imageUrl} // Đây là phần hiển thị hình ảnh của phụ kiện
                                                        alt={
                                                            accessory.description
                                                        }
                                                        className='tm-product-img-dummy'
                                                    />
                                                </td>
                                                <td className='tm-product-name'>
                                                    {accessory.accessoryID}
                                                </td>
                                                <td>
                                                    {accessory.accessoryName}
                                                </td>
                                                <td>{accessory.description}</td>
                                                <td>{accessory.price}</td>
                                                <td>{accessory.unitInStock}</td>
                                                <td>{accessory.sku}</td>
                                                <td>
                                                    <button
                                                        className='tm-product-delete-link'
                                                        onClick={() =>
                                                            handleBlockAccessory(
                                                                accessory.accessoryID
                                                            )
                                                        }
                                                    >
                                                        <i className='far fa-trash-alt tm-product-delete-icon'></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='button-grid'>
                                <Link
                                    to='/add-accessory'
                                    className='btn btn-primary btn-custom mb-3'
                                >
                                    Add new Accessory
                                </Link>
                                <Link
                                    to='/edit-accessory'
                                    className='btn btn-primary btn-custom mb-3 ml-3'
                                >
                                    Edit Accessory
                                </Link>
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </Fragment>
    );
};

export default Accessory;
