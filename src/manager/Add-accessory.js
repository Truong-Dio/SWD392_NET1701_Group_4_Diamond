import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const AddAccessory = () => {
  const [accessoryID, setAccessoryID] = useState("");
  const [accessoryName, setAccessoryName] = useState("");
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState(0);
  const [style, setStyle] = useState(0);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [unitInStock, setUnitInStock] = useState(0);
  const [sku, setSku] = useState("");
  const [token, setToken] = useState(localStorage.getItem('token') || "");
  const navigate = useNavigate();

  // Hàm đăng nhập
  const handleLogin = async () => {
    try {
      const loginData = {
        email: "admin@example.com",
        password: "string"
      };

      const response = await axios.post(
        'https://diamondstoresystemwebapi.azurewebsites.net/api/Auth/Login',
        loginData,
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
          }
        }
      );

      if (response.status === 200 && response.data) {
        const token = response.data.token;
        setToken(token);
        localStorage.setItem('token', token);
      } else {
        console.error("Login Failed:", response.data);
        alert('Login Failed. Try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login Failed. Try again.');
    }
  };

  // Hàm thêm sản phẩm
  const handleAddAccessory = async (e) => {
    e.preventDefault();

    if (!token) {
      await handleLogin(); 
    }

    const accessoryData = {
      accessoryID,
      accessoryName,
      description,
      material,
      style,
      brand,
      price,
      unitInStock,
      sku
    };

    console.log('Data sending:', accessoryData);

    try {
      const response = await axios.post(
        'https://diamondstoresystemwebapi.azurewebsites.net/api/Accessories/Create',
        accessoryData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'accept': '*/*'
          }
        }
      );

      console.log('API respone:', response.data);
      alert('Add Accesories Complete!');
      navigate('/accessory');
    } catch (error) {
      console.error('Failed to add:', error);
      console.log('Error data', error.response.data);
      console.log('Error data:', error.response.status);
      console.log('Error headers data:', error.response.headers);

      if (error.response && error.response.data && error.response.data.errors) {
        console.log('Lỗi xác nhận:', error.response.data.errors);
        for (const [key, value] of Object.entries(error.response.data.errors)) {
          console.error(`${key}: ${value}`);
        }
      } else {
        alert('Faild to add Accessories, check again!');
      }
    }
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-xl">
      </nav>
      <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12">
                  <h2 className="tm-block-title d-inline-block">Add Accessory</h2>
                </div>
              </div>
              <div className="row tm-edit-product-row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <form onSubmit={handleAddAccessory} className="tm-edit-product-form">
                    <div className="form-group mb-3">
                      <label htmlFor="accessoryID">Accessory ID</label>
                      <input
                        id="accessoryID"
                        name="accessoryID"
                        type="text"
                        className="form-control validate"
                        value={accessoryID}
                        onChange={(e) => setAccessoryID(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="accessoryName">Accessory Name</label>
                      <input
                        id="accessoryName"
                        name="accessoryName"
                        type="text"
                        className="form-control validate"
                        value={accessoryName}
                        onChange={(e) => setAccessoryName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="description">Description</label>
                      <textarea
                        className="form-control validate"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="material">Material</label>
                      <input
                        id="material"
                        name="material"
                        type="number"
                        className="form-control validate"
                        value={material}
                        onChange={(e) => setMaterial(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="style">Style</label>
                      <input
                        id="style"
                        name="style"
                        type="number"
                        className="form-control validate"
                        value={style}
                        onChange={(e) => setStyle(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="brand">Brand</label>
                      <input
                        id="brand"
                        name="brand"
                        type="text"
                        className="form-control validate"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="price">Price</label>
                      <input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        className="form-control validate"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="unitInStock">Units In Stock</label>
                      <input
                        id="unitInStock"
                        name="unitInStock"
                        type="number"
                        className="form-control validate"
                        value={unitInStock}
                        onChange={(e) => setUnitInStock(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="sku">SKU</label>
                      <input
                        id="sku"
                        name="sku"
                        type="text"
                        className="form-control validate"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-block text-uppercase">Add Accessory Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddAccessory;
