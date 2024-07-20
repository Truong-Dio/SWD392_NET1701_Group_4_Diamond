import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/templatemo-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/bootstrap.min.css'

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
                'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Diamonds/GetAll'
            );
            if (response.data.status === 1) {
                setDiamonds(response.data.data);
            } else {
                console.error('Faid to get data:', response.data.message);
            }
        } catch (error) {
            console.error('Eror get data:', error);
        }
    };

    const handleBlockProduct = async (diamondID) => {
        try {
            const response = await axios.delete(
                `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Diamonds/Block/${diamondID}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                }
            );
            if (response.data.status === 1 && response.data.data.block) {
                const updatedDiamonds = diamonds.filter(
                    (diamond) => diamond.diamondID !== diamondID
                );
                setDiamonds(updatedDiamonds);
                alert('Diamond Delete successfully!');
            } else {
                console.error(
                    'Failed to delete diamond:',
                    response.data.message
                );
                alert('Failed to delete diamond. Please try again.');
            }
        } catch (error) {
            console.error('Failed to delete diamond:', error);
            alert('Failed to delete diamond. Please try again.');
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
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
                                <Link to='/diamond' className='nav-link active'>
                                    
                                        <FontAwesomeIcon
                                            icon={faWarehouse}
                                            className='mr-2'
                                        />
                                    
                                    {' '}
                                    Diamonds Storage
                                </Link>
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

                    <div className='tm-product-table-container'>
                        <table className='table table-hover tm-table-small tm-product-table'>
                            <thead>
                                <tr>
                                    <th scope='col' className="sticky-header ">&nbsp;</th>
                                    <th scope='col' className="sticky-header ">DIAMOND ID</th>
                                    <th scope='col' className="sticky-header ">ORIGIN</th>
                                    <th scope='col' className="sticky-header ">ISSUE DATE</th>
                                    <th scope='col' className="sticky-header ">SKU</th>
                                    <th scope='col' className="sticky-header">TABLE %</th>
                                    <th scope='col' className="sticky-header">DEPTH %</th>
                                    <th scope='col' className="sticky-header">GIA REPORT #</th>
                                    <th scope='col' className="sticky-header">SHAPE</th>
                                    <th scope='col' className="sticky-header">CARAT WEIGHT</th>
                                    <th scope='col' className="sticky-header">COLOR GRADE</th>
                                    <th scope='col' className="sticky-header">CLARITY GRADE</th>
                                    <th scope='col' className="sticky-header">CUT GRADE</th>
                                    <th scope='col' className="sticky-header">POLISH GRADE</th>
                                    <th scope='col' className="sticky-header">SYMMETRY GRADE</th>
                                    <th scope='col' className="sticky-header">FLUORESCENCE GRADE</th>
                                    <th scope='col' className="sticky-header ">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {diamonds.map((diamond) => (
                                    <tr key={diamond.diamondID}>
                                        <td>
                                            <img
                                                src={diamond.imageURL}
                                                alt={diamond.description}
                                                className='tm-product-img-dummy large-image'
                                            />
                                        </td>
                                        <td className='tm-product-name'>{diamond.diamondID}</td>
                                        <td>{diamond.origin}</td>
                                        <td>{formatDate(diamond.issueDate)}</td>
                                        <td>{diamond.sku}</td>
                                        <td>{diamond.tablePercent}</td>
                            <td>{diamond.depthPercent}</td>
                            <td>{diamond.giaReportNumber}</td>
                            <td>{diamond.shape}</td>
                            <td>{diamond.caratWeight}</td>
                            <td>{diamond.colorGrade}</td>
                            <td>{diamond.clarityGrade}</td>
                            <td>{diamond.cutGrade}</td>
                            <td>{diamond.polishGrade}</td>
                            <td>{diamond.symmetryGrade}</td>
                            <td>{diamond.fluoresceneGrade}</td>
                                        <td>
                                <button
                                    className='tm-product-delete-link'
                                    onClick={() => handleBlockProduct(diamond.diamondID)}
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
            <Link to='/add-diamond' className='btn btn-primary btn-custom'>
                Add new Diamond
            </Link>
            <Link to='/edit-diamond' className='btn btn-primary btn-custom ml-3'>
                Edit Diamond
            </Link>
        </div>
    </div>
</div>
        </Fragment>
    );
};

export default Products;
