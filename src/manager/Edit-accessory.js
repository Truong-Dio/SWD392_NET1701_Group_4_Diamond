import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';
import Accessory from './Accessory';

const EditAccessory = () => {
    const [accessoryID, setAccessoryID] = useState('');
    const [accessoryData, setAccessoryData] = useState(null);
    const [formData, setFormData] = useState({
        accessoryID: '',
        accessoryName: '',
        description: '',
        material: 0,
        style: 0,
        brand: '',
        price: 0,
        unitInStock: 0,
        sku: '',
        imageUrl: '',
    });
    const [searchError, setSearchError] = useState('');
    const [updateError, setUpdateError] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const firebaseConfig = {
        apiKey: 'AIzaSyDoGFFGOSjxjoTpQkQ51mUg_Y-U0lfEnDc',
        authDomain: 'swd-react-2ce3c.firebaseapp.com',
        projectId: 'swd-react-2ce3c',
        storageBucket: 'swd-react-2ce3c.appspot.com',
        messagingSenderId: 'G-H7HWHEZ2SS',
        appId: '1:651216624825:web:6f56a25297e652b8d20f68',
    };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    useEffect(() => {
        if (accessoryData) {
            setFormData({
                accessoryID: accessoryData.accessoryID || '',
                accessoryName: accessoryData.accessoryName || '',
                description: accessoryData.description || '',
                material: accessoryData.material || 0,
                style: accessoryData.style || 0,
                brand: accessoryData.brand || '',
                price: accessoryData.price !== undefined ? accessoryData.price : 0,
                unitInStock: accessoryData.unitInStock || 0,
                sku: accessoryData.sku || '',
                imageUrl: accessoryData.imageUrl || '',
            });
            setImagePreview(accessoryData.imageUrl || '');
        }
    }, [accessoryData]);

    const handleSearch = async () => {
        setSearchError('');
        setUpdateError('');
        setLoading(true);
        try {
          const response = await axios.get(
            `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accessories/SearchByCategory?category=${searchTerm}`
          );
          if (response.data.status === 1) {
            const matchedAccessory = response.data.data.find(
              (item) => item.accessoryID === searchTerm || item.accessoryName.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (matchedAccessory) {
              setAccessoryData(matchedAccessory);
            } else {
              setSearchError('Accessory not found!');
              setAccessoryData(null);
            }
          } else {
            setSearchError('Error searching accessory.');
            setAccessoryData(null);
          }
        } catch (error) {
          console.error('Error searching accessory:', error);
          setSearchError('Error searching accessory, please try again.');
        } finally {
          setLoading(false);
        }
      };

    const handleUpdateAccessory = async () => {
        setUpdateError('');
        setLoading(true);

        try {
            const updatedData = {
                accessoryID: formData.accessoryID,
                accessoryName: formData.accessoryName,
                description: formData.description,
                material: formData.material,
                style: formData.style,
                brand: formData.brand,
                price: parseFloat(formData.price),
                unitInStock: parseInt(formData.unitInStock),
                sku: formData.sku,
                imageUrl: formData.imageUrl,
            };

            if (imageFile) {
                const storageRef = ref(storage, `images/${imageFile.name}`);
                const uploadTask = uploadBytesResumable(storageRef, imageFile);

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    },
                    (error) => {
                        console.error('Error uploading image:', error);
                        setUpdateError('Error uploading image, please try again.');
                        setLoading(false);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            updatedData.imageUrl = downloadURL;

                            axios
                                .put(
                                    `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accessories/Update/${accessoryID}`,
                                    updatedData,
                                    { headers: { 'Content-Type': 'application/json' } }
                                )
                                .then((response) => {
                                    if (response.data.status === 1) {
                                        console.log('Update Accessory success:', response.data);
                                        alert('Update Accessory completed!');
                                        setAccessoryData({ ...accessoryData, ...updatedData });
                                    } else {
                                        setUpdateError('Update Accessory failed.');
                                    }
                                })
                                .catch((error) => {
                                    if (error.response && error.response.status === 400) {
                                        console.error('Bad Request:', error.response.data);
                                        setUpdateError('Bad Request: ' + error.response.data.message);
                                    } else {
                                        console.error('Update Accessory error:', error);
                                        setUpdateError('Update Accessory failed, please try again.');
                                    }
                                })
                                .finally(() => setLoading(false));
                        });
                    }
                );
            } else {
                axios
                    .put(
                        `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accessories/Update/${accessoryID}`,
                        updatedData,
                        { headers: { 'Content-Type': 'application/json' } }
                    )
                    .then((response) => {
                        if (response.data.status === 1) {
                            console.log('Update Accessory success:', response.data);
                            alert('Update Accessory completed!');
                            setAccessoryData({ ...accessoryData, ...updatedData });
                        } else {
                            setUpdateError('Update Accessory failed.');
                        }
                    })
                    .catch((error) => {
                        if (error.response && error.response.status === 400) {
                            console.error('Bad Request:', error.response.data);
                            setUpdateError('Bad Request: ' + error.response.data.message);
                        } else {
                            console.error('Update Accessory error:', error);
                            setUpdateError('Update Accessory failed, please try again.');
                        }
                    })
                    .finally(() => setLoading(false));
            }
        } catch (error) {
            console.error('Update Accessory error:', error);
            setUpdateError('Update Accessory failed, please try again.');
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='test'>
            <div style={{ width: '100%', height: '100%' }}>
                <div
                    className='tm-bg-primary-dark blockAcount tm-block-h-auto'
                    style={{ paddingTop: 0, borderBottomWidth: 0 }}
                >
                    <div className='row'>
                        <div className='edit-diamond-container'>
                            <div
                                className='row'
                                style={{
                                    height: 45,
                                    backgroundColor: '#4747A1',
                                    alignItems: 'center',
                                    position: 'fixed',
                                    zIndex: 1000,
                                    width: '100%',
                                }}
                            >
                                <div className='col-12'>
                                    <h2 className='tm-block-title d-inline-block text-white'>Edit Accessory</h2>
                                </div>
                            </div>
                            <div className='row p-3' style={{ marginTop: 45 }}>
                            <div className="form-group mb-2">
            <label htmlFor="searchTerm">Accessory ID:</label>
            <div className="d-flex align-items-center">
                <input
                    id="searchTerm"
                    className="form-control validate mr-2"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch} disabled={loading} className="btn btn-primary">
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>
            {searchError && <p className="text-danger">{searchError}</p>}
        </div>

                                {accessoryData && (
                                    <div className='diamond-form row'>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Accessory Name:</label>
                                            <input
                                                className='form-control validate'
                                                type='text'
                                                value={formData.accessoryName}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, accessoryName: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Description:</label>
                                            <input
                                                className='form-control validate'
                                                type='text'
                                                value={formData.description}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, description: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Material:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.material}
                                                onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Style:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.style}
                                                onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Brand:</label>
                                            <input
                                                className='form-control validate'
                                                type='text'
                                                value={formData.brand}
                                                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Price:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.price}
                                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Unit in Stock:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.unitInStock}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, unitInStock: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>SKU:</label>
                                            <input
                                                className='form-control validate'
                                                type='text'
                                                value={formData.sku}
                                                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Image URL:</label>
                                            <input
                                                className='form-control validate'
                                                type='text'
                                                value={formData.imageUrl}
                                                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                            />
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>New Image:</label>
                                            <input type='file' onChange={handleImageChange} />
                                            {imagePreview && (
                                                <img
                                                    src={imagePreview}
                                                    alt='Preview'
                                                    style={{ width: '100px', height: 'auto', marginTop: '10px' }}
                                                />
                                            )}
                                        </div>
                                        <button onClick={handleUpdateAccessory} disabled={loading} className='btn btn-primary btn-block text-uppercase'>
                                            Update Accessory
                                        </button>
                                        {updateError && <p>{updateError}</p>}
                                    </div>
                                )}
                            </div>
                            <div className='back-link'>
                                <Link to='/accessory'>Back to Accessory Storage</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAccessory;
