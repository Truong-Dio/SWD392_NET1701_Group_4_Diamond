import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import Select from 'react-select';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const AddProduct = () => {
    const [isShowOption, setIsShowOption] = useState(false);
    const [diamondID, setDiamondID] = useState('');
    const [origin, setOrigin] = useState('');
    const [labCreated, setLabCreated] = useState(0);
    const [tablePercent, setTablePercent] = useState(0);
    const [depthPercent, setDepthPercent] = useState(0);
    const [description, setDescription] = useState('0');
    const [inscription, setInscription] = useState('0');
    const [giaReportNumber, setGiaReportNumber] = useState(0);
    const [issueDate, setIssueDate] = useState('');
    const [shape, setShape] = useState(0);
    const [caratWeight, setCaratWeight] = useState(0);
    const [colorGrade, setColorGrade] = useState(0);
    const [clarityGrade, setClarityGrade] = useState(0);
    const [cutGrade, setCutGrade] = useState(0);
    const [polishGrade, setPolishGrade] = useState(0);
    const [symmetryGrade, setSymmetryGrade] = useState(0);
    const [fluoresceneGrade, setFluoresceneGrade] = useState(0);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [length, setLength] = useState(0);
    const [price, setPrice] = useState(0);
    const [sku, setSku] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState(null);
    const originOptions = [
        { value: 'ZA', label: 'South Africa' }, 
        { value: 'RU', label: 'Russia' }, 
        { value: 'BW', label: 'Botswana' }, 
        { value: 'CD', label: 'Democratic Republic of Congo' }, 
        { value: 'AU', label: 'Australia' }, 
        { value: 'BR', label: 'Brazil' }, 
        { value: 'IN', label: 'India' }, 
        { value: 'CA', label: 'Central African Republic' }, 
        
    ];
    
    const optionGrade = [
        { value: 0, label: 'Poor', color: 'red' },
        { value: 1, label: 'Fair', color: 'orange' },
        { value: 2, label: 'Good', color: 'yellow' },
        { value: 3, label: 'Very Good', color: 'lightgreen' },
        { value: 4, label: 'Excellent', color: 'green' },
    ];
    const optionpolishGrade = [
        { value: 0, label: 'Poor', color: 'red' },
        { value: 1, label: 'Fair', color: 'orange' },
        { value: 2, label: 'Good', color: 'yellow' },
        { value: 3, label: 'Very Good', color: 'lightgreen' },
        { value: 4, label: 'Excellent', color: 'green' },
    ];
    const polishGradeLabels = [0, 1, 2, 3, 4].map(value =>
        optionpolishGrade.find(item => item.value === value)?.label || 'Unknown'
    );
    
    console.log(polishGradeLabels);
    const optionSymmetryGrade = [
        { value: 0, label: 'Poor', color: 'red' },
        { value: 1, label: 'Fair', color: 'orange' },
        { value: 2, label: 'Good', color: 'yellow' },
        { value: 3, label: 'Very Good', color: 'lightgreen' },
        { value: 4, label: 'Excellent', color: 'green' },
    ];
    const SymmetryGradeLabels = [0, 1, 2, 3, 4].map(value =>
        optionSymmetryGrade.find(item => item.value === value)?.label || 'Unknown'
    );
    
    console.log(SymmetryGradeLabels);

    const optionFluoresceneGrade = [
        { value: 0, label: 'Poor', color: 'red' },
        { value: 1, label: 'Fair', color: 'orange' },
        { value: 2, label: 'Good', color: 'yellow' },
        { value: 3, label: 'Very Good', color: 'lightgreen' },
        { value: 4, label: 'Excellent', color: 'green' },
    ];
    const FluoresceneGradeLabels = [0, 1, 2, 3, 4].map(value =>
        optionFluoresceneGrade.find(item => item.value === value)?.label || 'Unknown'
    );
    
    console.log(FluoresceneGradeLabels);

    const optionlabCreated = [
        { value: 0, label: 'Artificial' },
        { value: 1, label: 'Natural' },
    ];
    const optionShape = [
        { value: 0, label: 'Round' },
        { value: 1, label: 'Princess' },
        { value: 2, label: 'Emerald' },
        { value: 3, label: 'Marquise' },
        { value: 4, label: 'Heart' },
        { value: 5, label: 'Pear' },
        { value: 6, label: 'Radiant' },
        { value: 7, label: 'Oval' },
        { value: 8, label: 'Asscher' },
        { value: 9, label: 'Cushion' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOriginChange = (selectedOption) => {
        setOrigin(selectedOption.value); 
    };

    
    const firebaseConfig = {
        apiKey: 'AIzaSyDoGFFGOSjxjoTpQkQ51mUg_Y-U0lfEnDc',
        authDomain: 'swd-react-2ce3c.firebaseapp.com',
        projectId: 'swd-react-2ce3c',
        storageBucket: 'swd-react-2ce3c.appspot.com',
        messagingSenderId: 'G-H7HWHEZ2SS',
        appId: '1:651216624825:web:6f56a25297e652b8d20f68',
    };
    const ShapeSelector = () => {
        const [isShowOption, setIsShowOption] = useState(false);
        const [shape, setShape] = useState(0);
    };
    const ColorGradeSelector = () => {
        const [isShowOption, setIsShowOption] = useState(false);
        const [colorGrade, setColorGrade] = useState(0);
    };
    const optionColor = [
        { value: 0, label: 'Z', color: '#FF0000' },  
        { value: 1, label: 'Y', color: '#FF4000' },  
        { value: 2, label: 'X', color: '#FF8000' },  
        { value: 3, label: 'W', color: '#FFBF00' },  
        { value: 4, label: 'V', color: '#FFFF00' },  
        { value: 5, label: 'U', color: '#BFFF00' },  
        { value: 6, label: 'T', color: '#80FF00' },  
        { value: 7, label: 'S', color: '#40FF00' },  
        { value: 8, label: 'R', color: '#00FF00' },  
        { value: 9, label: 'Q', color: '#00FF40' },  
        { value: 10, label: 'P', color: '#00FF80' },  
        { value: 11, label: 'O', color: '#00FFBF' },  
        { value: 12, label: 'N', color: '#00FFFF' },  
        { value: 13, label: 'M', color: '#00BFFF' },  
        { value: 14, label: 'L', color: '#0080FF' },  
        { value: 15, label: 'K', color: '#0040FF' },  
        { value: 16, label: 'J', color: '#0000FF' },  
        { value: 17, label: 'I', color: '#4000FF' },  
        { value: 18, label: 'H', color: '#8000FF' },  
        { value: 19, label: 'G', color: '#BF00FF' },  
        { value: 20, label: 'F', color: '#FF00FF' },  
        { value: 21, label: 'E', color: '#FF00BF' },  
        { value: 22, label: 'D', color: '#FF0080' },  
    ];
    const ClarityGradeSelector = () => {
        const [isShowOption, setIsShowOption] = useState(false);
        const [clarityGrade, setClarityGrade] = useState(0);
    };
    const optionClarity = [
        { value: 0, label: 'I3' },
        { value: 1, label: 'I2' },
        { value: 2, label: 'I1' },
        { value: 3, label: 'SI2' },
        { value: 4, label: 'SI1' },
        { value: 5, label: 'VS2' },
        { value: 6, label: 'VS1' },
        { value: 7, label: 'VVS2' },
        { value: 8, label: 'VVS1' },
        { value: 9, label: 'IF' },
        { value: 10, label: 'FL' },
    ];

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    const handleLogin = async () => {
        try {
            const loginData = {
                email: 'admin@example.com',
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
                console.error('Error login:', response.data);
                alert('Error login.');
            }
        } catch (error) {
            console.error('Error login:', error);
            alert('Error login.');
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
    
    const handleAddProduct = async (e) => {
        e.preventDefault();

        if (!token) {
            await handleLogin();
        }

        const currentDate = new Date();
        const selectedDate = new Date(issueDate);

        if (selectedDate > currentDate) {
            alert('Issue Date cannot be in the future.');
            return;
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

        const diamondData = {
            diamondID,
            origin: origin.toString(),
            labCreated: Number(labCreated),
            tablePercent,
            depthPercent,
            giaReportNumber,
            issueDate: selectedDate.toISOString(),
            shape: Number(shape),
            caratWeight,
            colorGrade: Number(colorGrade),
            clarityGrade: Number(clarityGrade),
            cutGrade: Number(cutGrade),
            polishGrade: Number(polishGrade),
            symmetryGrade: Number(symmetryGrade),
            fluoresceneGrade: Number(fluoresceneGrade),
            height,
            width,
            length,
            price,
            sku,
            imageURL: uploadedImageUrl,
            description: '', 
            inscription: '',
        };

        console.log('Data is sending:', diamondData);

        try {
            const response = await axios.post(
                'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Diamonds/Create',
                diamondData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        accept: '*/*',
                    },
                }
            );

            console.log('API response:', response.data);
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
    const ClickItemOption = (item, optionType) => {
        setIsShowOption(false); 
        
        switch (optionType) {
            case 'labCreated':
                setLabCreated(item.value); 
                console.log('Lab created:', labCreated); 
                break;
            case 'cutGrade':
                setCutGrade(item.value); 
                console.log('Cut grade:', cutGrade); 
                break;
            case 'colorGrade':
                setColorGrade(item.value); 
                console.log('Color Grade:', colorGrade); 
                break;
            case 'shape':
                setShape(item.value); 
                console.log('Shape:', shape); 
                break;
            case 'clarityGrade':
                    setClarityGrade(item.value); 
                    console.log('clairty Grade:', clarityGrade); 
                    break;
             case 'polishGrade':
                        setPolishGrade(item.value); 
                        console.log('Polish Grade:', polishGrade); 
                        break; 
            case 'symmetryGrade':
                        setSymmetryGrade(item.value); 
                        console.log('Symmetry Grade:', symmetryGrade); 
                        break;   
             
            case 'fluoresceneGrade':
                            setFluoresceneGrade(item.value); 
                            console.log('Fluorescene Grade:', fluoresceneGrade); 
                            break;
           
            default:
                break;
        }
    };
    
    
    

    return (
        <div className='test'>
            <div style={{ width: '100%', height: '100%' }}>
                <div className='tm-bg-primary-dark blockAcount tm-block-h-auto' style={{ paddingTop: 0, borderBottomWidth:0 }}>
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
                            <h2 className='tm-block-title d-inline-block text-white'>Add Diamond</h2>
                        </div>
                    </div>
                    <div className='row tm-edit-product-row' style={{ marginTop: 45 }}>
                        <form onSubmit={handleAddProduct} className='row p-3'>
                            <div style={{ width: '100%', paddingLeft: 15, paddingRight: 40 }}>
                                <label htmlFor='image'>Image</label>
                                <input
                                    id='image'
                                    name='image'
                                    type='file'
                                    className='form-control validate'
                                    onChange={handleImageChange}
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
                            <div className='row p-3'>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='diamondID'>Diamond ID</label>
                                    <input
                                        id='diamondID'
                                        name='diamondID'
                                        type='text'
                                        className='form-control validate'
                                        value={diamondID}
                                        onChange={(e) => setDiamondID(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
    <label htmlFor='origin'>Origin</label>
    <Select
        id='origin'
        name='origin'
        value={originOptions.find(option => option.value === origin)}
        onChange={handleOriginChange}
        options={originOptions}
        placeholder='Select origin...'
    />
</div>
        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
    <label htmlFor='labCreated'>Lab Created</label>
    <div
        onClick={() => {
            setIsShowOption(!isShowOption);
        }}
        className='form-control'
    >
        <label htmlFor='labCreated'>
            {labCreated === 0 ? 'Artificial' : 'Natural'}
        </label>
    </div>
    {isShowOption && (
        <div
            style={{
                width: '100%',
                height: 50,
                marginTop: 5,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {optionlabCreated.map((item) => (
                <div
                    key={item.value}
                    onClick={() => ClickItemOption(item, 'labCreated')}
                    style={{
                        width: '24.5%',
                        height: 45,
                        marginLeft: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        cursor: 'pointer',
                        backgroundColor: labCreated === item.value ? '#007bff' : 'transparent',
                        color: labCreated === item.value ? '#fff' : '#000',
                    }}
                >
                    <label
                        style={{
                            marginBottom: 0,
                            fontWeight: 'bold',
                        }}
                    >
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    )}
</div>

                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='tablePercent'>Table Percent</label>
                                    <input
                                        id='tablePercent'
                                        name='tablePercent'
                                        type='number'
                                        className='form-control validate'
                                        value={tablePercent}
                                        onChange={(e) => setTablePercent(parseInt(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='depthPercent'>Depth Percent</label>
                                    <input
                                        id='depthPercent'
                                        name='depthPercent'
                                        type='number'
                                        className='form-control validate'
                                        value={depthPercent}
                                        onChange={(e) => setDepthPercent(parseInt(e.target.value))}
                                        required
                                    />
                                </div>
                        
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='giaReportNumber'>GIA Report Number</label>
                                    <input
                                        id='giaReportNumber'
                                        name='giaReportNumber'
                                        type='number'
                                        className='form-control validate'
                                        value={giaReportNumber}
                                        onChange={(e) => setGiaReportNumber(parseInt(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='issueDate'>Issue Date</label>
                                    <input
                                        id='issueDate'
                                        name='issueDate'
                                        type='date'
                                        className='form-control validate'
                                        value={issueDate}
                                        onChange={(e) => setIssueDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
            <label htmlFor='shape'>Shape</label>
            <div
                onClick={() => {
                    setIsShowOption(!isShowOption);
                }}
                className='form-control'
                style={{ border: '1px solid #ced4da', padding: '0.375rem 0.75rem', borderRadius: '0.25rem' }}
            >
                <label htmlFor='shape'>
                    {optionShape.find((item) => item.value === shape)?.label || 'Select Shape'}
                </label>
            </div>
            {isShowOption && (
                <div
                    style={{
                        width: '100%',
                        marginTop: 5,
                        display: 'flex',
                        flexWrap: 'wrap',
                        border: '1px solid #ced4da',
                        borderRadius: '0.25rem',
                        padding: '0.5rem',
                        backgroundColor: '#fff',
                    }}
                >
                    {optionShape.map((item) => (
                        <div
                            key={item.value}
                            onClick={() => ClickItemOption(item, 'shape')}
                            style={{
                                width: 'calc(50% - 10px)',
                                height: 45,
                                margin: '5px',
                                backgroundColor: item.color,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                cursor: 'pointer',
                        backgroundColor: shape === item.value ? '#007bff' : 'transparent',
                        color: shape === item.value ? '#fff' : '#000',
                            }}
                        >
                            <label
                                style={{ color: '#000', marginBottom: 0, fontWeight: 'bold' }}
                            >
                                {item.label}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='caratWeight'>Carat Weight</label>
                                    <input
                                        id='caratWeight'
                                        name='caratWeight'
                                        type='number'
                                        step='0.01'
                                        className='form-control validate'
                                        value={caratWeight}
                                        onChange={(e) => setCaratWeight(parseFloat(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
            <label htmlFor='colorGrade'>Color Grade</label>
            <div
                onClick={() => {
                    setIsShowOption(!isShowOption);
                }}
                className='form-control'
                style={{ border: '1px solid #ced4da', padding: '0.375rem 0.75rem', borderRadius: '0.25rem' }}
            >
                <label htmlFor='colorGrade'>
                    {optionColor.find((item) => item.value === colorGrade)?.label || 'Select Color Grade'}
                </label>
            </div>
            {isShowOption && (
                <div
                    style={{
                        width: '100%',
                        marginTop: 5,
                        display: 'flex',
                        flexWrap: 'wrap',
                        border: '1px solid #ced4da',
                        borderRadius: '0.25rem',
                        padding: '0.5rem',
                        backgroundColor: '#fff',
                    }}
                >
                    {optionColor.map((item) => (
                        <div
                            key={item.value}
                            onClick={() => ClickItemOption(item, 'colorGrade')}
                            style={{
                                width: 'calc(25% - 10px)',
                                height: 45,
                                margin: '5px',
                                backgroundColor: item.color,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                cursor: 'pointer',
                            }}
                        >
                            <label
                                style={{ color: '#000', marginBottom: 0, fontWeight: 'bold' }}
                            >
                                {item.label}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
            <label htmlFor='clarityGrade'>Clarity Grade</label>
            <div
                onClick={() => {
                    setIsShowOption(!isShowOption);
                }}
                className='form-control'
                style={{ border: '1px solid #ced4da', padding: '0.375rem 0.75rem', borderRadius: '0.25rem' }}
            >
                <label htmlFor='clarityGrade'>
                    {optionClarity.find((item) => item.value === clarityGrade)?.label || 'Select Clarity Grade'}
                </label>
            </div>
            {isShowOption && (
                <div
                    style={{
                        width: '100%',
                        marginTop: 5,
                        display: 'flex',
                        flexWrap: 'wrap',
                        border: '1px solid #ced4da',
                        borderRadius: '0.25rem',
                        padding: '0.5rem',
                        backgroundColor: '#fff',
                    }}
                >
                    {optionClarity.map((item) => (
                        <div
                            key={item.value}
                            onClick={() => ClickItemOption(item, 'clarityGrade')}
                            style={{
                                width: 'calc(25% - 10px)',
                                height: 45,
                                margin: '5px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                cursor: 'pointer',
                                border: '1px solid #ced4da',
                                backgroundColor: '#f8f9fa'
                            }}
                        >
                            <label
                                style={{ color: '#000', marginBottom: 0, fontWeight: 'bold' }}
                            >
                                {item.label}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='cutGrade'>Cut Grade</label>
                                    <div
                                        onClick={() => {
                                            setIsShowOption(!isShowOption);
                                        }}
                                        className='form-control'
                                    >
                                        <label htmlFor='cutGrade'>
                                            {cutGrade === 0
                                                ? 'Poor'
                                                : cutGrade === 1
                                                ? 'Fair'
                                                : cutGrade === 2
                                                ? 'Good'
                                                : cutGrade === 3
                                                ? 'Very Good'
                                                : 'Excellent'}
                                        </label>
                                    </div>
                                    {isShowOption && (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: 50,
                                                marginTop: 5,
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {optionGrade.map((item) => (
                                                <div
                                                    key={item.value}
                                                    onClick={() => ClickItemOption(item, 'cutGrade')}
                                                    style={{
                                                        width: '24.5%',
                                                        height: 45,
                                                        marginLeft: 5,
                                                        backgroundColor: item.color,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: 10,
                                                        cursor: 'pointer',
                            
                                                    }}
                                                >
                                                    <label
                                                        style={{ color: '#000', marginBottom: 0, fontWeight: 'bold' }}
                                                    >
                                                        {item.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}                               
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='polishGrade'>Polish Grade</label>
                                    <div
                                        onClick={() => {
                                            setIsShowOption(!isShowOption);
                                        }}
                                        className='form-control'
                                    >
                                        <label htmlFor='polishGrade'>
                                            {polishGrade === 0
                                                ? 'Poor'
                                                : polishGrade === 1
                                                ? 'Fair'
                                                : polishGrade === 2
                                                ? 'Good'
                                                : polishGrade === 3
                                                ? 'Very Good'
                                                : 'Excellent'}
                                        </label>
                                    </div>
                                    {isShowOption && (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: 50,
                                                marginTop: 5,
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {optionpolishGrade.map((item) => (
                                                <div
                                                key={item.value}
                                                    onClick={() => ClickItemOption(item, 'polishGrade')}
                                                    style={{
                                                        width: '24.5%',
                                                        height: 45,
                                                        marginLeft: 5,
                                                        backgroundColor: item.color,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: 10,
                                                    }}
                                                >
                                                    <label
                                                        style={{ color: '#000', marginBottom: 0, fontWeight: 'bold' }}
                                                    >
                                                        {item.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}                               
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
    <label htmlFor='symmetryGrade'>Symmetry Grade</label>
    <div
        onClick={() => {
            setIsShowOption(!isShowOption);
        }}
        className='form-control'
    >
        <label htmlFor='symmetryGrade'>
        {symmetryGrade === 0
                                                ? 'Poor'
                                                : symmetryGrade === 1
                                                ? 'Fair'
                                                : symmetryGrade === 2
                                                ? 'Good'
                                                : symmetryGrade === 3
                                                ? 'Very Good'
                                                : 'Excellent'}
        </label>
    </div>
    {isShowOption && (
        <div
            style={{
                width: '100%',
                height: 50,
                marginTop: 5,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {optionSymmetryGrade.map((item) => (
                <div
                    key={item.value}
                    onClick={() => ClickItemOption(item, 'symmetryGrade')}
                    style={{
                        width: '24.5%',
                        height: 45,
                        marginLeft: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        cursor: 'pointer',                     
                    }}
                >
                    <label
                        style={{
                            color: '#000', marginBottom: 0, fontWeight: 'bold' 
                        }}
                    >
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    )}
</div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
            <label htmlFor='fluoresceneGrade'>Fluorescene Grade</label>
            <div
                onClick={() => {
                    setIsShowOption(!isShowOption);
                }}
                className='form-control'
                style={{ border: '1px solid #ced4da', padding: '0.375rem 0.75rem', borderRadius: '0.25rem' }}
            >
                <label htmlFor='fluoresceneGrade'>
                    {optionFluoresceneGrade.find((item) => item.value === fluoresceneGrade)?.label || 'Select Color Grade'}
                </label>
            </div>
            {isShowOption && (
                <div
                    style={{
                        width: '100%',
                        marginTop: 5,
                        display: 'flex',
                        flexWrap: 'wrap',
                        border: '1px solid #ced4da',
                        borderRadius: '0.25rem',
                        padding: '0.5rem',
                        backgroundColor: '#fff',
                    }}
                >
                    {optionFluoresceneGrade.map((item) => (
                        <div
                            key={item.value}
                            onClick={() => ClickItemOption(item,'fluoresceneGrade')}
                            style={{
                                width: 'calc(25% - 10px)',
                                height: 45,
                                margin: '5px',
                                backgroundColor: item.color,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                cursor: 'pointer',
                            }}
                        >
                            <label
                                style={{ color: '#000', marginBottom: 0, fontWeight: 'bold' }}
                            >
                                {item.label}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='height'>Height</label>
                                    <input
                                        id='height'
                                        name='height'
                                        type='number'
                                        step='0.01'
                                        className='form-control validate'
                                        value={height}
                                        onChange={(e) => setHeight(parseFloat(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='width'>Width</label>
                                    <input
                                        id='width'
                                        name='width'
                                        type='number'
                                        step='0.01'
                                        className='form-control validate'
                                        value={width}
                                        onChange={(e) => setWidth(parseFloat(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='length'>Length</label>
                                    <input
                                        id='length'
                                        name='length'
                                        type='number'
                                        step='0.01'
                                        className='form-control validate'
                                        value={length}
                                        onChange={(e) => setLength(parseFloat(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 mb-2'>
                                    <label htmlFor='price'>Price</label>
                                    <input
                                        id='price'
                                        name='price'
                                        type='number'
                                        className='form-control validate'
                                        value={price}
                                        onChange={(e) => setPrice(parseInt(e.target.value))}
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
                                <div className='col-12 mt-3'>
                                    <button type='submit' className='btn btn-primary btn-block text-uppercase'>
                                        Add Diamond
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
