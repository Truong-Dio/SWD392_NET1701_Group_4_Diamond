import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditDiamond = () => {
  const [diamondID, setDiamondID] = useState('');
  const [diamondData, setDiamondData] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [searchError, setSearchError] = useState('');
  const [updateError, setUpdateError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setSearchError('');
    setUpdateError('');
    setLoading(true);
    try {
      const response = await axios.get(`https://diamondstoresystemwebapi.azurewebsites.net/api/Diamonds/GetById/${diamondID}`);
      if (response.data.status === 1) {
        setDiamondData(response.data.data);
        setImageURL(response.data.data.imageURL);
      } else {
        setSearchError('No ID not found!');
        setDiamondData(null);
        setImageURL('');
      }
    } catch (error) {
      console.error('Error find:', error);
      setSearchError('Error find, try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateImageURL = async () => {
    setUpdateError('');
    setLoading(true);
    try {
      const response = await axios.put(
        `https://diamondstoresystemwebapi.azurewebsites.net/api/Diamonds/UpdateImageURL/${diamondID}`,
        { imageURL },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.data.status === 1) {
        console.log('Update ImageURL completed:', response.data);
        alert('Update ImageURL completed!');
      } else {
        setUpdateError('Update ImageURL failed.');
      }
    } catch (error) {
      console.error('Faild update ImageURL:', error);
      setUpdateError('Error when update ImageURL');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setImageURL(e.target.value);
  };

  return (
    <div className="container">
      <h2>Edit Diamond</h2>
      <div className="mb-3">
        <label htmlFor="diamondID" className="form-label">Input ID Diamond</label>
        <div className="input-group">
          <input
            type="text"
            id="diamondID"
            name="diamondID"
            className="form-control"
            value={diamondID}
            onChange={(e) => setDiamondID(e.target.value)}
          />
          <button className="btn btn-outline-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {searchError && <div className="alert alert-danger">{searchError}</div>}
      {diamondData && (
        <div>
          <h3>Diamond Information</h3>
          <ul>
            <li>Diamond ID: {diamondData.diamondID}</li>
            <li>Origin: {diamondData.origin}</li>
            <li>Lab Created: {diamondData.labCreated}</li>
            <li>Description: {diamondData.description}</li>
            <li>GIA Report Number: {diamondData.giaReportNumber}</li>
            <li>Issue Date: {diamondData.issueDate}</li>
            <li>Shape: {diamondData.shape}</li>
            <li>Carat Weight: {diamondData.caratWeight}</li>
            <li>Color Grade: {diamondData.colorGrade}</li>
            <li>Clarity Grade: {diamondData.clarityGrade}</li>
            <li>Cut Grade: {diamondData.cutGrade}</li>
            <li>Polish Grade: {diamondData.polishGrade}</li>
            <li>Symmetry Grade: {diamondData.symmetryGrade}</li>
            <li>Fluorescence Grade: {diamondData.fluoresceneGrade}</li>
            <li>Inscription: {diamondData.inscription}</li>
            <li>Height: {diamondData.height}</li>
            <li>Width: {diamondData.width}</li>
            <li>Length: {diamondData.length}</li>
            <li>Price: {diamondData.price}</li>
            <li>SKU: {diamondData.sku}</li>
            <li>Image URL: <input
              type="text"
              id="imageURL"
              name="imageURL"
              className="form-control"
              value={imageURL}
              onChange={handleInputChange}
            /></li>
          </ul>
          {updateError && <div className="alert alert-danger">{updateError}</div>}
          <button className="btn btn-primary" onClick={handleUpdateImageURL}>Save imageURL</button>
          <Link to="/diamond" className="btn btn-secondary ms-2">Back Diamond Storage</Link>
        </div>
      )}
    </div>
  );
};

export default EditDiamond;
