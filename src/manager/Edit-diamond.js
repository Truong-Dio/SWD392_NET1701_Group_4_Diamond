import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/templatemo-style.css';

const EditDiamond = () => {
    const [diamondID, setDiamondID] = useState('');
    const [diamondData, setDiamondData] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [formData, setFormData] = useState({
        diamondID: '',
        origin: '',
        labCreated: 0,
        tablePercent: 0,
        depthPercent: 0,
        description: '',
        giaReportNumber: 0,
        issueDate: '',
        shape: 0,
        caratWeight: 0,
        colorGrade: 0,
        clarityGrade: 0,
        cutGrade: 0,
        polishGrade: 0,
        symmetryGrade: 0,
        fluorescenceGrade: 0,
        inscription: '',
        height: 0,
        width: 0,
        length: 0,
        price: 0,
        sku: '',
        imageURL: '',
    });
    const [searchError, setSearchError] = useState('');
    const [updateError, setUpdateError] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

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
        if (diamondData) {
            setFormData({
                diamondID: diamondData.diamondID || '',
                origin: diamondData.origin || '',
                labCreated: diamondData.labCreated !== undefined ? diamondData.labCreated : 0,
                tablePercent: diamondData.tablePercent !== undefined ? diamondData.tablePercent : 0,
                depthPercent: diamondData.depthPercent !== undefined ? diamondData.depthPercent : 0,
                description: diamondData.description || '',
                giaReportNumber: diamondData.giaReportNumber !== undefined ? diamondData.giaReportNumber : 0,
                issueDate: diamondData.issueDate || '',
                shape: diamondData.shape !== undefined ? diamondData.shape : 0,
                caratWeight: diamondData.caratWeight !== undefined ? diamondData.caratWeight : 0,
                colorGrade: diamondData.colorGrade !== undefined ? diamondData.colorGrade : 0,
                clarityGrade: diamondData.clarityGrade !== undefined ? diamondData.clarityGrade : 0,
                cutGrade: diamondData.cutGrade !== undefined ? diamondData.cutGrade : 0,
                polishGrade: diamondData.polishGrade !== undefined ? diamondData.polishGrade : 0,
                symmetryGrade: diamondData.symmetryGrade !== undefined ? diamondData.symmetryGrade : 0,
                fluorescenceGrade: diamondData.fluorescenceGrade !== undefined ? diamondData.fluorescenceGrade : 0,
                inscription: diamondData.inscription || '',
                height: diamondData.height !== undefined ? diamondData.height : 0,
                width: diamondData.width !== undefined ? diamondData.width : 0,
                length: diamondData.length !== undefined ? diamondData.length : 0,
                price: diamondData.price !== undefined ? diamondData.price : 0,
                sku: diamondData.sku || '',
                imageURL: diamondData.imageURL || '',
            });
            setImagePreview(diamondData.imageURL || '');
        }
    }, [diamondData]);

    const handleSearch = async () => {
        setSearchError('');
        setUpdateError('');
        setLoading(true);
        try {
            const response = await axios.post(
                'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Diamonds/SearchByCategory',
                { DiamondID: diamondID }
            );
            console.log('Search Response:', response); 
            if (response.data && response.data.data.length > 0) {
                const filteredResults = response.data.data.filter(diamond => 
                    diamond.diamondID.includes(diamondID)
                ); 
                if (filteredResults.length > 0) {
                    setSearchResults(filteredResults);
                    setDiamondData(filteredResults[0]); 
                } else {
                    setSearchError('ID not found!');
                    setDiamondData(null);
                    setSearchResults([]);
                }
            } else {
                setSearchError('ID not found!');
                setDiamondData(null);
                setSearchResults([]);
            }
        } catch (error) {
            console.error('Error finding diamond:', error);
            setSearchError('Error finding diamond, please try again.');
        } finally {
            setLoading(false);
        }
    };
    
    
    
    


    const handleUpdateDiamond = async () => {
        setUpdateError('');
        setLoading(true);

        try {
            
            const updatedData = {
                diamondID: formData.diamondID,
                origin: formData.origin,
                labCreated: parseFloat(formData.labCreated),
                tablePercent: parseFloat(formData.tablePercent),
                depthPercent: parseFloat(formData.depthPercent),
                description: formData.description,
                giaReportNumber: parseFloat(formData.giaReportNumber),
                issueDate: formData.issueDate,
                shape: parseFloat(formData.shape),
                caratWeight: parseFloat(formData.caratWeight),
                colorGrade: parseFloat(formData.colorGrade),
                clarityGrade: parseFloat(formData.clarityGrade),
                cutGrade: parseFloat(formData.cutGrade),
                polishGrade: parseFloat(formData.polishGrade),
                symmetryGrade: parseFloat(formData.symmetryGrade),
                fluorescenceGrade: parseFloat(formData.fluorescenceGrade),
                inscription: formData.inscription,
                height: parseFloat(formData.height),
                width: parseFloat(formData.width),
                length: parseFloat(formData.length),
                price: parseFloat(formData.price),
                sku: formData.sku,
                imageURL: formData.imageURL,
                Description: formData.description,
                DiamondID: formData.diamondID,
                Inscription: formData.inscription,
                Origin: formData.origin,
                SKU: formData.sku,
            };

            console.log('Updated Data:', updatedData);

            //code mẫu
            if (imageFile) {
                // xử lý up ảnh lên firebase
                const storageRef = ref(storage, `images/${imageFile.name}`);
                const uploadTask = uploadBytesResumable(storageRef, imageFile);

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        // Xử lý tiến trình tải lên
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    },
                    (error) => {
                        // Xử lý lỗi khi tải lên không thành công
                        console.error('Error uploading image:', error);
                        setUpdateError('Error uploading image, please try again.');
                        setLoading(false);
                    },
                    () => {
                        // Xử lý khi tải lên thành công
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            updatedData.imageURL = downloadURL;

                            console.log('Updated Data with Image URL:', updatedData);

                            // yêu cầu update
                            axios
                                .put(
                                    `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Diamonds/Update/${diamondID}`,
                                    updatedData,
                                    { headers: { 'Content-Type': 'application/json' } }
                                )
                                .then((response) => {
                                    if (response.data.status === 1) {
                                        console.log('Update Diamond success:', response.data);
                                        alert('Update Diamond completed!');
                                        setDiamondData({ ...diamondData, ...updatedData });
                                    } else {
                                        setUpdateError('Update Diamond failed.');
                                    }
                                })
                                .catch((error) => {
                                    // bắt lỗi
                                    if (error.response && error.response.status === 400) {
                                        console.error('Bad Request:', error.response.data);
                                        setUpdateError('Bad Request: ' + error.response.data.message);
                                    } else {
                                        console.error('Update Diamond error:', error);
                                        setUpdateError('Update Diamond failed, please try again.');
                                    }
                                })
                                .finally(() => setLoading(false));
                        });
                    }
                );
            } else {
                // không có ảnh vẫn update kim cuong
                axios
                    .put(
                        `https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Diamonds/Update/${diamondID}`,
                        updatedData,
                        { headers: { 'Content-Type': 'application/json' } }
                    )
                    .then((response) => {
                        if (response.data.status === 1) {
                            console.log('Update Diamond success:', response.data);
                            alert('Update Diamond completed!');
                            setDiamondData({ ...diamondData, ...updatedData });
                        } else {
                            setUpdateError('Update Diamond failed.');
                        }
                    })
                    .catch((error) => {
                        // bắt lỗi
                        if (error.response && error.response.status === 400) {
                            console.error('Bad Request:', error.response.data);
                            setUpdateError('Bad Request: ' + error.response.data.message);
                        } else {
                            console.error('Update Diamond error:', error);
                            setUpdateError('Update Diamond failed, please try again.');
                        }
                    })
                    .finally(() => setLoading(false));
            }
        } catch (error) {
            console.error('Update Diamond error:', error);
            setUpdateError('Update Diamond failed, please try again.');
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
                                    <h2 className='tm-block-title d-inline-block text-white'>Edit Diamond</h2>
                                </div>
                            </div>

                            <div className='row p-3' style={{ marginTop: 45 }}>
                            <div className='mb-2'>
    <label>Diamond ID:</label>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
            className='form-control validate mr-2'
            type='text'
            value={diamondID}
            onChange={(e) => setDiamondID(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading} className='btn btn-primary'>
            Search
        </button>
    </div>

    {searchError && <p>{searchError}</p>}

    {searchResults.length > 0 && (
        <div className='mt-3'>
            <label>Search Results:</label>
            <ul className='list-group'>
                {searchResults.map((result) => (
                    <li
                        key={result.diamondID}
                        className='list-group-item'
                        onClick={() => setDiamondData(result)} 
                        style={{ cursor: 'pointer' }}
                    >
                        {result.diamondID}
                    </li>
                ))}
            </ul>
        </div>
    )}
</div>



                                {diamondData && (
                                    <div className='diamond-form row'>
                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Origin:</label>
                                            <input
                                                className='form-control validate'
                                                type='text'
                                                value={formData.origin}
                                                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Lab Created:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.labCreated}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, labCreated: e.target.value })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Table Percent:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.tablePercent}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, tablePercent: e.target.value })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Depth Percent:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.depthPercent}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, depthPercent: e.target.value })
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
                                            <label>GIA Report Number:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.giaReportNumber}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        giaReportNumber: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Issue Date:</label>
                                            <input
                                                className='form-control validate'
                                                type='text'
                                                value={formData.issueDate}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, issueDate: e.target.value })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Shape:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.shape}
                                                onChange={(e) => setFormData({ ...formData, shape: e.target.value })}
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Carat Weight:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.caratWeight}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, caratWeight: e.target.value })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Color Grade:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.colorGrade}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, colorGrade: e.target.value })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Clarity Grade:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.clarityGrade}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, clarityGrade: e.target.value })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Cut Grade:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.cutGrade}
                                                onChange={(e) => setFormData({ ...formData, cutGrade: e.target.value })}
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Polish Grade:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.polishGrade}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, polishGrade: e.target.value })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Symmetry Grade:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.symmetryGrade}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, symmetryGrade: e.target.value })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Fluorescence Grade:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.fluorescenceGrade}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        fluorescenceGrade: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Inscription:</label>
                                            <input
                                                className='form-control validate'
                                                type='text'
                                                value={formData.inscription}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, inscription: e.target.value })
                                                }
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Height:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.height}
                                                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Width:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.width}
                                                onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                                            />
                                        </div>

                                        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                            <label>Length:</label>
                                            <input
                                                className='form-control validate'
                                                type='number'
                                                value={formData.length}
                                                onChange={(e) => setFormData({ ...formData, length: e.target.value })}
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
                                            <label>SKU:</label>
                                            <input
                                                className='form-control validate'
                                                type='text'
                                                value={formData.sku}
                                                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                                            />
                                        </div>

                                        <div className='mb-2'>
                                            <label>Image URL:</label>
                                            <input
                                                className='form-control validate'
                                                type='text'
                                                value={formData.imageURL}
                                                onChange={(e) => setFormData({ ...formData, imageURL: e.target.value })}
                                            />
                                        </div>

                                        <div className='mb-2' style={{width:'100%'}}>
                                            <label>New Image:</label>
                                            <input type='file' onChange={handleImageChange} />
                                            {imagePreview && (
                                                <img src={imagePreview} alt='Preview' className='image-preview' style={{width: 600, height:400}} />
                                            )}
                                        </div>

                                        {updateError && <p className='error-message'>{updateError}</p>}

                                        <div className='button-group mt-2'>
                                            <button onClick={handleUpdateDiamond} disabled={loading} className='btn btn-primary btn-block text-uppercase'>
                                                Update Diamond
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className='back-link'>
                                    <Link to='/diamond'>Back to Diamond Storage</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditDiamond;
