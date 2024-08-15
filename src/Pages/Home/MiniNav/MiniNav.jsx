import React from 'react';
import { CiLinkedin, CiYoutube } from 'react-icons/ci';
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';

const MiniNav = () => {
    return (
        <div className='bg-black text-white'>
            <div className='flex justify-between mx-10 py-2'>
                <p>Order Online Call Us (0123) 456789</p>
                <div className='flex gap-1 justify-center items-center text-lg'>
                    <CiLinkedin />
                    <FaInstagramSquare />
                    <CiYoutube />
                    <FaSquareFacebook />
                    <FaTwitterSquare />
                </div>
            </div>
        </div>
    );
};

export default MiniNav;