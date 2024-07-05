import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'F:/Semester7/fe_thien/src/assets/css/templatemo-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

const Products = ({ onLogout }) => {
  const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    fetchDiamonds();
  }, []);

  const fetchDiamonds = async () => {
    try {
      const response = await axios.get('https://diamondstoresystemwebapi.azurewebsites.net/api/Diamonds/GetAllWithAllField');
      if (response.data.status === 1) {
        setDiamonds(response.data.data);
      } else {
        console.error("Faid to get data:", response.data.message);
      }
    } catch (error) {
      console.error("Eror get data:", error);
    }
  };

  const handleBlockProduct = async (diamondID) => {
    try {
      const response = await axios.delete(`https://diamondstoresystemwebapi.azurewebsites.net/api/Diamonds/Block/${diamondID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      if (response.data.status === 1 && response.data.data.block) {
        const updatedDiamonds = diamonds.filter(diamond => diamond.diamondID !== diamondID);
        setDiamonds(updatedDiamonds);
        alert('Diamond Delete successfully!');
      } else {
        console.error('Failed to delete diamond:', response.data.message);
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
                <Link to="/diamond" className="nav-link active">
                  <i className=""> <FontAwesomeIcon icon={faWarehouse} className="mr-2" />
                  </i> DIAMONDS STORAGE
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
                      <th scope="col">DIAMOND ID</th>
                      <th scope="col">ORIGIN</th>
                      <th scope="col">DESCRIPTION</th>
                      <th scope="col">ISSUE DATE</th>
                      <th scope="col">INSCRIPTION</th>
                      <th scope="col">SKU</th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diamonds.map((diamond) => (
                      <tr key={diamond.diamondID}>
                        <td>
                          <img
                            src={diamond.imageURL}
                            alt={diamond.description}
                            className="tm-product-img-dummy"
                          />
                        </td>
                        <td className="tm-product-name">{diamond.diamondID}</td>
                        <td>{diamond.origin}</td>
                        <td>{diamond.description}</td>
                        <td>{formatDate(diamond.issueDate)}</td>
                        <td>{diamond.inscription}</td>
                        <td>{diamond.sku}</td>
                        <td>
                          <button
                            className="tm-product-delete-link"
                            onClick={() => handleBlockProduct(diamond.diamondID)}
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
                <Link to="/add-diamond" className="btn btn-primary btn-custom mb-3">Add new Diamond</Link>
                <Link to="/edit-diamond" className="btn btn-primary btn-custom mb-3 ml-3">Edit Diamond</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
