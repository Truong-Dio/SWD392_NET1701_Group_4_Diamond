import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const AddAccessory = () => {
    const [accessoryID, setAccessoryID] = useState('');
    const [accessoryName, setAccessoryName] = useState('');
    const [description, setDescription] = useState('');
    const [material, setMaterial] = useState(0);
    const [style, setStyle] = useState(0);
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState(0);
    const [unitInStock, setUnitInStock] = useState(0);
    const [sku, setSku] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    

    // Hàm đăng nhập
    const handleLogin = async () => {
        try {
            const loginData = {
                email: 'nhatthien30112002@gmail.com',
                password: 'string',
            };

            const response = await axios.post(
                'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Auth/Login',
                loginData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        accept: '*/*',
                    },
                }
            );

            if (response.status === 200 && response.data) {
                const token = response.data.token;
                setToken(token);
                localStorage.setItem('token', token);
            } else {
                console.error('Login Failed:', response.data);
                alert('Login Failed. Try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login Failed. Try again.');
        }
    };
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

    // Hàm thêm sản phẩm
    const handleAddAccessory = async (e) => {
        e.preventDefault();

        if (!token) {
            await handleLogin();
        }

        let uploadedImageUrl = imageUrl;
        if (image) {
            try {
                uploadedImageUrl = await handleImageUpload();
            } catch (error) {
                alert('Error uploading image. Please try again.');
                return;
            }
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
            sku,
            imageURL: uploadedImageUrl,
        };

        console.log('Data sending:', accessoryData);
        try {
            const response = await axios.post(
                'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accessories/Create',
                accessoryData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        accept: '*/*',
                    },
                }
            );

            console.log('API respone:', response.data);
            alert('Add Accessories Complete!');
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
                alert('Failed to add Accessories, check again!');
            }
        }
    };

    // Xử lý khi người dùng chọn file ảnh
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);

        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(selectedImage);
        } else {
            setImagePreview(null);
        }
    };
    const handleImageUpload = async () => {
        if (!image) {
            alert('Please select an image to upload.');
            return;
        }

        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        return new Promise((resolve, reject) => {
            uploadTask.on(
                'state_changed',
                (snapshot) => {},
                (error) => {
                    console.error('Image upload error:', error);
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setImageUrl(downloadURL);
                    resolve(downloadURL);
                }
            );
        });
    };

    return (
        <div className='test'>
            <div style={{ width: '100%', height: '100%' }}>
                <div
                    className='tm-bg-primary-dark blockAcount tm-block-h-auto'
                    style={{ paddingTop: 0, borderBottomWidth: 0 }}
                >
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
                            <h2 className='tm-block-title d-inline-block text-white'>Add Accessory</h2>
                        </div>
                    </div>
                    <div className='row tm-edit-product-row' style={{ marginTop: 45 }}>
                        {/* <div className='col-xl-6 col-lg-6 col-md-12'> */}
                            <form onSubmit={handleAddAccessory} className='row p-3'>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='accessoryID'>Accessory ID</label>
                                    <input
                                        id='accessoryID'
                                        name='accessoryID'
                                        type='text'
                                        className='form-control validate'
                                        value={accessoryID}
                                        onChange={(e) => setAccessoryID(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='accessoryName'>Accessory Name</label>
                                    <input
                                        id='accessoryName'
                                        name='accessoryName'
                                        type='text'
                                        className='form-control validate'
                                        value={accessoryName}
                                        onChange={(e) => setAccessoryName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='description'>Description</label>
                                    <textarea
                                        className='form-control validate'
                                        rows='3'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='material'>Material</label>
                                    <input
                                        id='material'
                                        name='material'
                                        type='number'
                                        className='form-control validate'
                                        value={material}
                                        onChange={(e) => setMaterial(parseInt(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='style'>Style</label>
                                    <input
                                        id='style'
                                        name='style'
                                        type='number'
                                        className='form-control validate'
                                        value={style}
                                        onChange={(e) => setStyle(parseInt(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='brand'>Brand</label>
                                    <input
                                        id='brand'
                                        name='brand'
                                        type='text'
                                        className='form-control validate'
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='price'>Price</label>
                                    <input
                                        id='price'
                                        name='price'
                                        type='number'
                                        step='0.01'
                                        className='form-control validate'
                                        value={price}
                                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='unitInStock'>Units In Stock</label>
                                    <input
                                        id='unitInStock'
                                        name='unitInStock'
                                        type='number'
                                        className='form-control validate'
                                        value={unitInStock}
                                        onChange={(e) => setUnitInStock(parseInt(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='sku'>SKU</label>
                                    <input
                                        id='sku'
                                        name='sku'
                                        type='text'
                                        className='form-control validate'
                                        value={sku}
                                        onChange={(e) => setSku(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='image'>Image</label>
                                    <input
                                        id='image'
                                        name='image'
                                        type='file'
                                        className='form-control validate'
                                        onChange={handleImageChange}
                                        accept='image/*'
                                        required
                                    />
                                    {imagePreview && (
                                        <div className='mt-2'>
                                            <img
                                                src={imagePreview}
                                                alt='Preview'
                                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-primary btn-block text-uppercase'>
                                        Add Accessory Now
                                    </button>
                                </div>
                            </form>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAccessory;
