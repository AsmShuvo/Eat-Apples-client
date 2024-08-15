// Update the component name to start with an uppercase letter
import React from 'react';

const CustomButton = ({ text, style }) => {
    return (
        <div>
            <button className={`btn ${style} border-none rounded-none px-4  text-white barlow m-2 bg-[#333333]`}>{text}</button>
        </div>
    );
};

export default CustomButton;
