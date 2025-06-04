import '../css/devicecard.css'
import RedirectButton from './RedirectButton.js';  
import React from 'react';
import { Link } from "react-router-dom";
import { FULLDEVICEPAGE_ROUTE } from "../utils/consts.js";

const DeviceCard = ({device}) => {

    return(
        <Link to={FULLDEVICEPAGE_ROUTE} state={device} className='cards-container'>
            <img src={device["g:image_link"]} alt="product-photo" className='product-photo'/>
            <div className='device-name'>{device["g:title"]}</div>
            <div className='device-price'>
                {device["g:price"]}
                <RedirectButton/>
            </div>
            
        </Link>
    )
}

export default DeviceCard;