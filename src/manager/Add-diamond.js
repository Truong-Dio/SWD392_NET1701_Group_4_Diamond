import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const AddProduct = () => {
  const [diamondID, setDiamondID] = useState("");
  const [origin, setOrigin] = useState("");
  const [labCreated, setLabCreated] = useState(0);
  const [tablePercent, setTablePercent] = useState(0);
  const [depthPercent, setDepthPercent] = useState(0);
  const [description, setDescription] = useState("");
  const [giaReportNumber, setGiaReportNumber] = useState(0);
  const [issueDate, setIssueDate] = useState("");
  const [shape, setShape] = useState(0);
  const [caratWeight, setCaratWeight] = useState(0);
  const [colorGrade, setColorGrade] = useState(0);
  const [clarityGrade, setClarityGrade] = useState(0);
  const [cutGrade, setCutGrade] = useState(0);
  const [polishGrade, setPolishGrade] = useState(0);
  const [symmetryGrade, setSymmetryGrade] = useState(0);
  const [fluoresceneGrade, setFluoresceneGrade] = useState(0);
  const [inscription, setInscription] = useState("");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [price, setPrice] = useState(0);
  const [block, setBlock] = useState(true);
  const [unitInStock, setUnitInStock] = useState(0);
  const [sku, setSku] = useState("");
  const [token, setToken] = useState(localStorage.getItem('token') || "");
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");

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
        console.error("Error login:", response.data);
        alert('Error login.');
      }
    } catch (error) {
      console.error('Error login:', error);
      alert('Error login.');
    }
  };

  // Hàm thêm sản phẩm
  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!token) {
      await handleLogin(); 
    }

    const diamondData = {
      diamondID,
      origin,
      labCreated,
      tablePercent,
      depthPercent,
      description,
      giaReportNumber,
      issueDate: new Date(issueDate).toISOString(), 
      shape,
      caratWeight,
      colorGrade,
      clarityGrade,
      cutGrade,
      polishGrade,
      symmetryGrade,
      fluoresceneGrade,
      inscription,
      height,
      width,
      length,
      price,
      block: false, // mặc định false
      unitInStock,
      sku,
      ImageURL: imageUrl
    };

    console.log('Data is sending:', diamondData);

    try {
      const response = await axios.post(
        'https://diamondstoresystemwebapi.azurewebsites.net/api/Diamonds/Create',
        diamondData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'accept': '*/*'
          }
        }
      );

      console.log('API respone:', response.data);
      alert('Add Diamond complete!');
      navigate('/diamond');
    } catch (error) {
      console.error('Error:', error);
      console.log('Error 1:', error.response.data);
      console.log('Error 2:', error.response.status);
      console.log('Error 3:', error.response.headers);

      if (error.response && error.response.data && error.response.data.errors) {
        console.log('Error confirm:', error.response.data.errors);
        for (const [key, value] of Object.entries(error.response.data.errors)) {
          console.error(`${key}: ${value}`);
        }
      } else {
        alert('Error add diamond, check again.');
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
                  <h2 className="tm-block-title d-inline-block">Add Diamond</h2>
                </div>
              </div>
              <div className="row tm-edit-product-row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <form onSubmit={handleAddProduct} className="tm-edit-product-form">
                    <div className="form-group mb-3">
                      <label htmlFor="diamondID">Diamond ID</label>
                      <input
                        id="diamondID"
                        name="diamondID"
                        type="text"
                        className="form-control validate"
                        value={diamondID}
                        onChange={(e) => setDiamondID(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="origin">Origin</label>
                      <input
                        id="origin"
                        name="origin"
                        type="text"
                        className="form-control validate"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="labCreated">Lab Created</label>
                      <input
                        id="labCreated"
                        name="labCreated"
                        type="number"
                        className="form-control validate"
                        value={labCreated}
                        onChange={(e) => setLabCreated(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="tablePercent">Table Percent</label>
                      <input
                        id="tablePercent"
                        name="tablePercent"
                        type="number"
                        step="0.01"
                        className="form-control validate"
                        value={tablePercent}
                        onChange={(e) => setTablePercent(parseFloat(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="depthPercent">Depth Percent</label>
                      <input
                        id="depthPercent"
                        name="depthPercent"
                        type="number"
                        step="0.01"
                        className="form-control validate"
                        value={depthPercent}
                        onChange={(e) => setDepthPercent(parseFloat(e.target.value))}
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
                      <label htmlFor="giaReportNumber">GIA Report Number</label>
                      <input
                        id="giaReportNumber"
                        name="giaReportNumber"
                        type="number"
                        className="form-control validate"
                        value={giaReportNumber}
                        onChange={(e) => setGiaReportNumber(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="issueDate">Issue Date</label>
                      <input
                        id="issueDate"
                        name="issueDate"
                        type="date"
                        className="form-control validate"
                        value={issueDate}
                        onChange={(e) => setIssueDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="shape">Shape</label>
                      <input
                        id="shape"
                        name="shape"
                        type="number"
                        className="form-control validate"
                        value={shape}
                        onChange={(e) => setShape(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="caratWeight">Carat Weight</label>
                      <input
                        id="caratWeight"
                        name="caratWeight"
                        type="number"
                        step="0.01"
                        className="form-control validate"
                        value={caratWeight}
                        onChange={(e) => setCaratWeight(parseFloat(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="colorGrade">Color Grade</label>
                      <input
                        id="colorGrade"
                        name="colorGrade"
                        type="number"
                        className="form-control validate"
                        value={colorGrade}
                        onChange={(e) => setColorGrade(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="clarityGrade">Clarity Grade</label>
                      <input
                        id="clarityGrade"
                        name="clarityGrade"
                        type="number"
                        className="form-control validate"
                        value={clarityGrade}
                        onChange={(e) => setClarityGrade(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="cutGrade">Cut Grade</label>
                      <input
                        id="cutGrade"
                        name="cutGrade"
                        type="number"
                        className="form-control validate"
                        value={cutGrade}
                        onChange={(e) => setCutGrade(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="polishGrade">Polish Grade</label>
                      <input
                        id="polishGrade"
                        name="polishGrade"
                        type="number"
                        className="form-control validate"
                        value={polishGrade}
                        onChange={(e) => setPolishGrade(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="symmetryGrade">Symmetry Grade</label>
                      <input
                        id="symmetryGrade"
                        name="symmetryGrade"
                        type="number"
                        className="form-control validate"
                        value={symmetryGrade}
                        onChange={(e) => setSymmetryGrade(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="fluoresceneGrade">Fluorescence Grade</label>
                      <input
                        id="fluoresceneGrade"
                        name="fluoresceneGrade"
                        type="number"
                        className="form-control validate"
                        value={fluoresceneGrade}
                        onChange={(e) => setFluoresceneGrade(parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="inscription">Inscription</label>
                      <input
                        id="inscription"
                        name="inscription"
                        type="text"
                        className="form-control validate"
                        value={inscription}
                        onChange={(e) => setInscription(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="height">Height</label>
                      <input
                        id="height"
                        name="height"
                        type="number"
                        step="0.01"
                        className="form-control validate"
                        value={height}
                        onChange={(e) => setHeight(parseFloat(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="width">Width</label>
                      <input
                        id="width"
                        name="width"
                        type="number"
                        step="0.01"
                        className="form-control validate"
                        value={width}
                        onChange={(e) => setWidth(parseFloat(e.target.value))}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="length">Length</label>
                      <input
                        id="length"
                        name="length"
                        type="number"
                        step="0.01"
                        className="form-control validate"
                        value={length}
                        onChange={(e) => setLength(parseFloat(e.target.value))}
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
                      <label htmlFor="imageUrl">Image URL</label>
                      <input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        className="form-control validate"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-block text-uppercase">Add Diamond Now</button>
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

export default AddProduct;
