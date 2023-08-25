import './AppInformation.scss'
import BackArrow from "../../assets/Icons/back.png"
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;
function AppInformation() {
    const [platformInformation, setPlatformInformation] = useState({
        name: '',
        dateOfBirth: '',
        username: '',
        password: '',
        items: '',
        location: '',
        contacts: '',
    });
    const { id } = useParams()
    useEffect(() => {
        axios
            .get(`${API_URL}:${PORT}/api/platforms/${id}`)
            .then((res) => {
                const platformData = res.data;
                console.log(platformData);
                setPlatformInformation(platformData)
            }).catch((error) => {
                console.log(error)
            })

    }, [id])

    const handleCheckboxChange = (field) => {
        const requestBody = {
        //     [field]: '',
        //     [field]: 
        "name": "facebook",
        "info_access": [`${[[filed1],[field2]]}`]
        };

        axios
            .put(`${API_URL}:${PORT}/api/platforms/${id}`, requestBody)
            .then((res) => {
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div className='app-information'>
            <div className="app-information__header">
                <img className="app-information__icon" src={BackArrow} alt='back arrow' />
                <div className="app-information__title">
                    <img className='app-information__icon' src='' alt='Logo' />
                    <h1 className='app-information__app-name'>{platformInformation.name}</h1>
                </div>
            </div>
            <div className='app-information__edit'>
                <p>Turn information sharing on or off by switching the toggle </p>
                <div className='app-information__information-container'>
                    <p>Name</p>
                    <input type='checkbox' checked={platformInformation.name !== ''}
                        onChange={() => handleCheckboxChange('name')}></input>
                </div>
                <div className='app-information__information-container'>
                    <p>Date of Birth</p>
                    <input type='checkbox' checked={platformInformation.dateOfBirth !== ''}
                        onChange={() => handleCheckboxChange('dataOfBirth')}></input>
                </div>
                <div className='app-information__information-container'>
                    <p>Username</p>
                    <input type='checkbox' checked={platformInformation.username !== ''}
                        onChange={() => handleCheckboxChange('Username')}></input>
                </div>
                <div className='app-information__information-container'>
                    <p>Password</p>
                    <input type='checkbox' checked={platformInformation.password !== ''}
                        onChange={() => handleCheckboxChange('password')}></input>
                </div>
                <div className='app-information__information-container'>
                    <p>Saved / Liked Items</p>
                    <input type='checkbox' checked={platformInformation.items !== ''}
                        onChange={() => handleCheckboxChange('items')}></input>
                </div>
                <div className='app-information__information-container'>
                    <p>Location</p>
                    <input type='checkbox' checked={platformInformation.location !== ''}
                        onChange={() => handleCheckboxChange('location')}></input>
                </div>
                <div className='app-information__information-container'>
                    <p>Contacts</p>
                    <input type='checkbox' checked={platformInformation.contacts !== ''}
                        onChange={() => handleCheckboxChange('contacts')}></input>
                </div>
            </div>
            <div className='app-information__button-container'>
                <button className='app-information__button'>Stop sharing all information</button>
                <button className='app-information__button'>Delete app from list</button>
            </div>
        </div>
    )
}

export default AppInformation;