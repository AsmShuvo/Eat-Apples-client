import React from 'react';

const CatergoryCard = ({ image, title, price }) => {
    return (
        <div className='relative transform transition-transform duration-500 hover:scale-105'>
            <img src={image} />
            <div className="absolute top-10 left-5 w-1/2">
                <p className='text-3xl font-extrabold uppercase text-white tracking-widest'>{title}</p>
                <p className='text-lg mt-4 font-extrabold uppercase text-white'>from ${price}</p>
            </div>
        </div>
    );
};

export default CatergoryCard;