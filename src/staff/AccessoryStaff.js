import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/templatemo-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';

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
                // block = false
                const filteredAccessories = response.data.data.filter((accessory) => !accessory.block);
                setAccessories(filteredAccessories);
            } else {
                console.error('Fail to get data:', response.data.message);
            }
        } catch (error) {
            console.error('Fail to get data Accessories:', error);
        }
    };

    return (
        <Fragment className='test'>
            <Header />
            <div className='test2'>
                <div className='row tm-content-row'>
                    {/* <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col'>
                        <div className='tm-bg-primary-dark tm-block tm-block-products'> */}
                            <div className='tm-product-table-container'>
                                <table className='table table-hover tm-table-small tm-product-table'>
                                    <thead>
                                        <tr>
                                            <th scope='col' className="sticky-header headersaff">IMAGE</th>
                                            <th scope='col' className="sticky-header headersaff">ACCESSORY ID</th>
                                            <th scope='col' className="sticky-header headersaff">NAME</th>
                                            <th scope='col' className="sticky-header headersaff">DESCRIPTION</th>
                                            <th scope='col' className="sticky-header headersaff">PRICE</th>
                                            <th scope='col' className="sticky-header headersaff">STOCK</th>
                                            <th scope='col' className="sticky-header headersaff">SKU</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {accessories.map((accessory) => (
                                            <tr key={accessory.accessoryID}>
                                                <td>
                                                    {accessory.imageUrl ? (
                                                        <img
                                                            src={accessory.imageUrl} // Đây là phần hiển thị hình ảnh của phụ kiện
                                                            alt={accessory.accessoryName}
                                                            style={{ width: '50px', height: '50px' }}
                                                        />
                                                    ) : (
                                                        'No Image'
                                                    )}
                                                </td>
                                                <td className='tm-product-name'>{accessory.accessoryID}</td>
                                                <td>{accessory.accessoryName}</td>
                                                <td>{accessory.description}</td>
                                                <td>{accessory.price}</td>
                                                <td>{accessory.unitInStock}</td>
                                                <td>{accessory.sku}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='button-grid'></div>
                        {/* </div>
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
};

export default Accessory;
