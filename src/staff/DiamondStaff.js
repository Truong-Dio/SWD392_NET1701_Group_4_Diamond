import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/templatemo-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import Header from './../../components/Header';

const VideoBackground = () => (
    <video autoPlay loop muted className='video-background'>
        <source src='/videos/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
    </video>
);

const Products = ({ onLogout }) => {
    const [diamonds, setDiamonds] = useState([]);

    useEffect(() => {
        fetchDiamonds();
    }, []);

    const fetchDiamonds = async () => {
        try {
            const response = await axios.get(
                'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Diamonds/GetAllWithAllField'
            );
            if (response.data.status === 1) {
                const filteredDiamond = response.data.data.filter((accessory) => !accessory.block);
                setDiamonds(filteredDiamond);
            } else {
                console.error('Faid to get data:', response.data.message);
            }
        } catch (error) {
            console.error('Eror get data:', error);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Fragment className='test'>
            <Header />
            <div className='test2'>
                <div className='row tm-content-row'>

                    <div className='tm-product-table-container'>
                        <table className='table table-hover tm-table-small tm-product-table'>
                            <thead>
                                <tr>
                                    <th scope='col' className="sticky-header headersaff">&nbsp;</th>
                                    <th scope='col' className="sticky-header headersaff">DIAMOND ID</th>
                                    <th scope='col' className="sticky-header headersaff">ORIGIN</th>
                                    <th scope='col' className="sticky-header headersaff">DESCRIPTION</th>
                                    <th scope='col' className="sticky-header headersaff">ISSUE DATE</th>
                                    <th scope='col' className="sticky-header headersaff">INSCRIPTION</th>
                                    <th scope='col' className="sticky-header headersaff">SKU</th>
                                    <th scope='col' className="sticky-header headersaff">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {diamonds.map((diamond) => (
                                    <tr key={diamond.diamondID}>
                                        <td>
                                            <img
                                                src={diamond.imageURL}
                                                alt={diamond.description}
                                                className='tm-product-img-dummy'
                                            />
                                        </td>
                                        <td className='tm-product-name'>{diamond.diamondID}</td>
                                        <td>{diamond.origin}</td>
                                        <td>{diamond.description}</td>
                                        <td>{formatDate(diamond.issueDate)}</td>
                                        <td>{diamond.inscription}</td>
                                        <td>{diamond.sku}</td>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='button-grid'></div>
                </div>
            </div>
        </Fragment>
    );
};

export default Products;
