import React from 'react';
import {  CiSettings } from "react-icons/ci";
import { GoListUnordered } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
function Header() {
    return (
        <div className='header'>
            <span>
            <GoListUnordered className='header-icon' />
            </span>
            <span className='right_span'>
            <IoMoonOutline className='header-icon' />
            <CiSettings className='header-icon' />
            <FaUserCircle className='user-icon' />
            </span>
           
        </div>
    )
}
export default Header