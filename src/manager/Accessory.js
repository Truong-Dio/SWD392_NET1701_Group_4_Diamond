import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'F:/Semester7/fe_thien/src/assets/css/templatemo-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

const Accessory = ({ onLogout }) => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetchAccessories();
  }, []);

  const fetchAccessories = async () => {
    try {
      const response = await axios.get('https://diamondstoresystemwebapi.azurewebsites.net/api/Accessories/GetAllWithAllField');
      if (response.data.status === 1) {
        setAccessories(response.data.data);
      } else {
        console.error("Fail to get data:", response.data.message);
      }
    } catch (error) {
      console.error("Fail to get data Accessories:", error);
    }
  };

  const handleBlockAccessory = async (accessoryID) => {
    try {
      const response = await axios.delete(`https://diamondstoresystemwebapi.azurewebsites.net/api/Accessories/Block/${accessoryID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      if (response.data.status === 1) {
        const updatedAccessories = accessories.filter(accessory => accessory.accessoryID !== accessoryID);
        setAccessories(updatedAccessories);
        alert('Accessory Delete successfully!');
      } else {
        console.error('Failed to delete accessory:', response.data.message);
        alert('Failed to delete accessory. Please try again.');
      }
    } catch (error) {
      console.error('Failed to delete accessory:', error);
      alert('Failed to delete accessory. Please try again.');
    }
  };


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-xl">
        <div className="container h-100">
          <Link to="/" className="navbar-brand">
            <h1 className="tm-site-title mb-0">Admin</h1>
          </Link>
          <button
            className="navbar-toggler ml-auto mr-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars tm-nav-icon"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto h-100">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                                    <a className="nav-link" href="diamond">
                                        <i className=""> <FontAwesomeIcon icon={faWarehouse} className="mr-2" />
                                        </i>
                                        Diamond Storage
                                    </a>
                                </li>
              <li className="nav-item">
                <Link to="/accessory" className="nav-link active">
                  <i className=""> <FontAwesomeIcon icon={faWarehouse} className="mr-2" />
                  </i> ACCESSORIES STORAGE
                </Link>
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
                <a className="nav-link d-block" href="/" onClick={onLogout}>
                  Admin, <b>Logout</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row tm-content-row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-products">
              <div className="tm-product-table-container">
                <table className="table table-hover tm-table-small tm-product-table">
                  <thead>
                    <tr>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">ACCESSORY ID</th>
                      <th scope="col">NAME</th>
                      <th scope="col">DESCRIPTION</th>
                      <th scope="col">PRICE</th>
                      <th scope="col">STOCK</th>
                      <th scope="col">SKU</th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accessories.map((accessory) => (
                      <tr key={accessory.accessoryID}>
                        <td>
                        <img
                            src={accessory.imageURL || 'default-image.jpg'}
                            alt={accessory.description}
                            className="tm-product-img-dummy"
                          />
                        </td>
                        <td className="tm-product-name">{accessory.accessoryID}</td>
                        <td>{accessory.accessoryName}</td>
                        <td>{accessory.description}</td>
                        <td>{accessory.price}</td>
                        <td>{accessory.unitInStock}</td>
                        <td>{accessory.sku}</td>
                        <td>
                          <button
                            className="tm-product-delete-link"
                            onClick={() => handleBlockAccessory(accessory.accessoryID)}
                          >
                            <i className="far fa-trash-alt tm-product-delete-icon"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="button-grid">
                <Link to="/add-accessory" className="btn btn-primary btn-custom mb-3">Add new Accessory</Link>
                <Link to="/edit-accessory" className="btn btn-primary btn-custom mb-3 ml-3">Edit Accessory</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Accessory;
