import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './schedule.css';

const VideoBackground = () => (
    <video autoPlay loop muted className='video-background'>
        <source src='/videos/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
    </video>
);

const Schedule = () => {
    const [selectedYear, setSelectedYear] = useState('2024');
    const [scheduleData, setScheduleData] = useState([]);
    const [currentAccount, setCurrentAccount] = useState(null);

    // Function to fetch current account data (mocking login session)
    const fetchCurrentAccount = async () => {
        try {
            const response = await axios.get(
                'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accounts/GetByIdWithAllField/S004'
            );
            return response.data.data;
        } catch (error) {
            console.error('Error fetching current account:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchScheduleData = async () => {
            const account = await fetchCurrentAccount();
            if (account) {
                setCurrentAccount(account);
                const workTime =
                    account.workingSchedule === 1
                        ? '9 AM - 5 PM'
                        : account.workingSchedule === 2
                        ? '1 PM - 9 PM'
                        : 'Off';
                const isWorking = account.workingSchedule === 1 || account.workingSchedule === 2;

                //demo lịch làm việc
                const generatedScheduleData = [
                    { day: 'Monday', date: '1', month: 'May', time: workTime, work: isWorking },
                    { day: 'Tuesday', date: '2', month: 'May', time: workTime, work: isWorking },
                    { day: 'Wednesday', date: '3', month: 'May', time: workTime, work: isWorking },
                    { day: 'Thursday', date: '4', month: 'May', time: workTime, work: isWorking },
                    { day: 'Friday', date: '5', month: 'May', time: workTime, work: isWorking },
                    { day: 'Saturday', date: '6', month: 'May', time: workTime, work: isWorking },
                    { day: 'Sunday', date: '7', month: 'May' },
                ];

                setScheduleData(generatedScheduleData);
            }
        };

        fetchScheduleData();
    }, []);

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    return (
      <div className='test'>
            <Header />
            <div className='containerBody2'>
                <h1 className='my-4'>Schedule</h1>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <select value={selectedYear} onChange={handleYearChange} className='form-select year-select'>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                        <option value='2025'>2025</option>
                    </select>
                </div>
                <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Day</th>
                            <th>Date</th>
                            <th>Month</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleData.map((item, index) => (
                            <tr key={index} className={item.work ? 'table-success' : 'table-danger'}>
                                <td>{item.day}</td>
                                <td>{item.date}</td>
                                <td>{item.month}</td>
                                <td>{item.time}</td>
                                <td>{item.work ? 'Working' : 'Off'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Schedule;
